#!/bin/bash

# Personal Website Server Manager
# This script helps manage local development servers

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if a port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Port is in use
    else
        return 1  # Port is free
    fi
}

# Function to kill processes on specific ports
kill_port() {
    local port=$1
    print_status "Checking port $port..."
    
    if check_port $port; then
        local pids=$(lsof -Pi :$port -sTCP:LISTEN -t)
        print_warning "Killing processes on port $port: $pids"
        kill -9 $pids 2>/dev/null || true
        sleep 1
        
        if check_port $port; then
            print_error "Failed to kill processes on port $port"
            return 1
        else
            print_success "Port $port is now free"
        fi
    else
        print_status "Port $port is already free"
    fi
}

# Function to kill all development-related processes
kill_dev_processes() {
    print_status "Stopping all development servers..."
    
    # Kill common development ports
    local common_ports=(3000 3001 5173 8000 8080 4000 5000 5001)
    
    for port in "${common_ports[@]}"; do
        kill_port $port
    done
    
    # Kill Node.js processes that match development patterns
    print_status "Killing Node.js development processes..."
    
    # Kill Next.js processes
    pkill -f "next dev" 2>/dev/null || true
    pkill -f "next-server" 2>/dev/null || true
    
    # Kill Vite processes
    pkill -f "vite" 2>/dev/null || true
    
    # Kill npm/yarn dev processes
    pkill -f "npm.*dev" 2>/dev/null || true
    pkill -f "yarn.*dev" 2>/dev/null || true
    pkill -f "pnpm.*dev" 2>/dev/null || true
    
    # Kill vitest processes
    pkill -f "vitest" 2>/dev/null || true
    
    # Give processes time to terminate
    sleep 2
    
    print_success "Development processes stopped"
}

# Function to start the personal website server
start_server() {
    local port=${1:-3000}
    
    print_status "Starting personal website server on port $port..."
    
    # Check if we're in the right directory
    if [[ ! -f "package.json" ]]; then
        print_error "No package.json found. Make sure you're in the project directory."
        exit 1
    fi
    
    # Check if node_modules exists
    if [[ ! -d "node_modules" ]]; then
        print_warning "node_modules not found. Installing dependencies..."
        npm install
    fi
    
    # Start the development server
    print_status "Running: npm run dev"
    exec npm run dev
}

# Function to show current server status
show_status() {
    print_status "Current server status:"
    echo
    
    # Check common ports
    local ports=(3000 3001 5173 8000 8080)
    local found_servers=false
    
    for port in "${ports[@]}"; do
        if check_port $port; then
            local pid=$(lsof -Pi :$port -sTCP:LISTEN -t | head -1)
            local process=$(ps -p $pid -o comm= 2>/dev/null || echo "unknown")
            echo -e "  ${GREEN}✓${NC} Port $port: $process (PID: $pid)"
            found_servers=true
        fi
    done
    
    if [[ "$found_servers" == false ]]; then
        echo -e "  ${YELLOW}No development servers found running${NC}"
    fi
    
    echo
    
    # Show Node.js development processes
    local node_procs=$(ps aux | grep -E "(next|vite|npm.*dev|yarn.*dev)" | grep -v grep | wc -l | tr -d ' ')
    if [[ "$node_procs" -gt 0 ]]; then
        echo -e "${BLUE}Active Node.js development processes:${NC}"
        ps aux | grep -E "(next|vite|npm.*dev|yarn.*dev)" | grep -v grep | while read line; do
            echo "  $line"
        done
    fi
}

# Function to restart with clean slate
restart_clean() {
    print_status "Performing clean restart..."
    
    # Kill all processes
    kill_dev_processes
    
    # Clear Next.js cache
    if [[ -d ".next" ]]; then
        print_status "Clearing .next cache..."
        rm -rf .next
    fi
    
    # Clear node_modules cache (optional, commented out by default)
    # if [[ -d "node_modules" ]]; then
    #     print_status "Clearing node_modules..."
    #     rm -rf node_modules
    #     npm install
    # fi
    
    # Start fresh server
    start_server
}

# Main script logic
case "${1:-}" in
    "start"|"")
        kill_dev_processes
        start_server ${2:-3000}
        ;;
    "stop")
        kill_dev_processes
        ;;
    "restart")
        kill_dev_processes
        sleep 1
        start_server ${2:-3000}
        ;;
    "clean")
        restart_clean
        ;;
    "status")
        show_status
        ;;
    "kill-port")
        if [[ -z "$2" ]]; then
            print_error "Please specify a port number: $0 kill-port <port>"
            exit 1
        fi
        kill_port $2
        ;;
    "help"|"-h"|"--help")
        echo "Personal Website Server Manager"
        echo
        echo "Usage: $0 [command] [options]"
        echo
        echo "Commands:"
        echo "  start [port]     Stop all servers and start personal website (default port: 3000)"
        echo "  stop             Stop all development servers"
        echo "  restart [port]   Restart personal website server"
        echo "  clean            Clean restart (clears .next cache)"
        echo "  status           Show current server status"
        echo "  kill-port <port> Kill process on specific port"
        echo "  help             Show this help message"
        echo
        echo "Examples:"
        echo "  $0                    # Start server on default port 3000"
        echo "  $0 start 3001        # Start server on port 3001"
        echo "  $0 stop              # Stop all servers"
        echo "  $0 restart           # Restart server"
        echo "  $0 clean             # Clean restart with cache clearing"
        echo "  $0 status            # Check what's running"
        echo "  $0 kill-port 3000    # Kill process on port 3000"
        ;;
    *)
        print_error "Unknown command: $1"
        print_status "Run '$0 help' for usage information"
        exit 1
        ;;
esac

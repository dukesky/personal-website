import { SiteContent } from '@/types/content';
import contentData from '@/data/content.json';

export function useContent(): SiteContent {
  return contentData as SiteContent;
}

// Site-wide content hooks
export function useSiteContent() {
  return useContent().site;
}

export function useFooterContent() {
  return useContent().footer;
}

// Page-specific content hooks
export function useHeroContent() {
  return useContent().hero;
}

export function useAboutContent() {
  return useContent().about;
}

export function usePortfolioContent() {
  return useContent().portfolio;
}

export function useProjectsContent() {
  return useContent().projects;
}

export function useContactContent() {
  return useContent().contact;
}

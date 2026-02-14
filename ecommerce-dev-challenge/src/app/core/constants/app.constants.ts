/**
 * Application-wide constants
 */
export const APP_CONSTANTS = {
  APP_NAME: 'D1 Skincare',
  DEFAULT_TIMEOUT: 30000,
} as const;

/**
 * Image path constants
 */
export const IMAGE_PATHS = {
  PRODUCTS: '/images/products',
  ICONS: '/images/icons',
} as const;

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1200,
} as const;

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATIONS = {
  SHORT: 200,
  MEDIUM: 300,
  LONG: 500,
  MARQUEE_SCROLL: 30000,
} as const;

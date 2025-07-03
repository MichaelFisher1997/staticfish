import { defineMiddleware } from 'astro:middleware';

// This middleware runs on every request and adds security headers.
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Set various security headers to enhance protection
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // A basic Content Security Policy (CSP). This is a powerful header that requires careful configuration.
  // This policy allows resources (scripts, styles, images) only from the site's own origin.
  // It may need to be adjusted if you add third-party resources in the future.
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
  );

  return response;
});

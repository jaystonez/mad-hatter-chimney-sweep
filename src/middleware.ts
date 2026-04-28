import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Legacy WordPress tag pages that warrant a 301 to the closest real service page.
// Middleware runs before next.config.js redirects, so all /tag/* logic lives here.
const TAG_REDIRECTS: Record<string, string> = {
  '/tag/chimney-sweep':                    '/services/chimney-inspection-sweeping',
  '/tag/chimney-sweep/':                   '/services/chimney-inspection-sweeping',
  '/tag/chimney-repair':                   '/services/chimney-repairs',
  '/tag/chimney-repair/':                  '/services/chimney-repairs',
  '/tag/fireplace-repair':                 '/services/chimney-repairs',
  '/tag/fireplace-repair/':                '/services/chimney-repairs',
  '/tag/fireplace-cleaning':               '/chimney-cleaning',
  '/tag/fireplace-cleaning/':              '/chimney-cleaning',
  '/tag/dryer-vent-cleaning':              '/services',
  '/tag/dryer-vent-cleaning/':             '/services',
  '/tag/the-mad-hatter-chimney-sweep':     '/about',
  '/tag/the-mad-hatter-chimney-sweep/':    '/about',
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── Legacy WordPress tag pages ──────────────────────────────────────────────
  if (pathname.startsWith('/tag/')) {
    // Specific tags → 301 to closest real service page
    const destination = TAG_REDIRECTS[pathname];
    if (destination) {
      return NextResponse.redirect(new URL(destination, req.url), 301);
    }
    // Every other /tag/* (including /tag/*/feed/ and /tag/roof-snow-removal/) → 410 Gone
    return new NextResponse(null, { status: 410 });
  }

  // ── Legacy WordPress feed / REST / admin / media URLs → 410 Gone ────────────
  if (
    pathname === '/feed' ||
    pathname === '/feed/' ||
    pathname === '/comments/feed' ||
    pathname === '/comments/feed/' ||
    pathname.startsWith('/wp-json') ||
    pathname.startsWith('/wp-admin') ||
    pathname.startsWith('/wp-content/')
  ) {
    return new NextResponse(null, { status: 410 });
  }

  // ── Protect /admin routes except the login page ─────────────────────────────
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = req.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'change-me-in-production'
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/tag/:path*',
    '/feed',
    '/feed/',
    '/comments/feed',
    '/comments/feed/',
    '/wp-json/:path*',
    '/wp-json',
    '/wp-admin/:path*',
    '/wp-admin',
    '/wp-content/:path*',
  ],
};

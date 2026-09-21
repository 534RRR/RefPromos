import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  await clearSessionCookie();
  
  const acceptHeader = req.headers.get('accept') || '';
  if (acceptHeader.includes('application/json')) {
    return NextResponse.json({ success: true, redirect: '/cms_admin_login/login' });
  }

  return NextResponse.redirect(new URL('/cms_admin_login/login', req.url), { status: 303 });
}

export async function GET(req: NextRequest) {
  await clearSessionCookie();
  return NextResponse.redirect(new URL('/cms_admin_login/login', req.url));
}

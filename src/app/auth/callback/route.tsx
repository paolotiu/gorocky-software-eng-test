import { NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    // Exchange the code in the URL for a session
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect the user to the homepage or dashboard
  return NextResponse.redirect(new URL('/', request.url));
}

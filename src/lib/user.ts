import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { clientEnv } from '@/env/client';
import prisma from './prisma';

export const getUser = async (params = { withUserBooks: false }) => {
  const cookiesStore = await cookies();

  const supabase = createServerClient(
    clientEnv.NEXT_PUBLIC_SUPABASE_URL,
    clientEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookiesStore.getAll();
        },
      },
    }
  );

  const {
    data: { user: supabaseUser },
  } = await supabase.auth.getUser();

  if (!supabaseUser) {
    return null;
  }

  const user = await prisma.users.findUnique({
    where: {
      id: supabaseUser?.id,
    },
    include: {
      profile: true,
      UserBooks: params.withUserBooks,
    },
  });

  return user;
};

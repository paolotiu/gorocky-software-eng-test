import { NextRequest } from 'next/server';
import z from 'zod';
import { BOOK_STATUS_MAP } from '../book-status';
import { getUser } from '@/lib/user';
import prisma from '@/lib/prisma';

const UpdateUserBookSchema = z.object({
  status: z.enum(Object.values(BOOK_STATUS_MAP)),
  // Maximum length of 256 characters for review
  review: z.string().max(256).optional(),
});

export const POST = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const user = await getUser();

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { id } = await params;

  const body = await request.json();

  const parsedData = UpdateUserBookSchema.safeParse(body);

  if (!parsedData.success) {
    return new Response('Invalid data', { status: 400 });
  }

  const { status, review } = parsedData.data;

  if (status === 'STARTED' || status === 'FINISHED') {
    // Check if userBook exists for this user and book
    // If exists, update it; if not, create a new entry
    await prisma.userBooks.upsert({
      where: {
        user_id_book_id: {
          user_id: user.id,
          book_id: Number(id),
        },
      },
      update: {
        review,
        updated_at: new Date(),
        finished_at: status === 'FINISHED' ? new Date() : null,
      },
      create: {
        user_id: user.id,
        book_id: Number(id),
        review,
        started_at: new Date(),
        finished_at: status === 'FINISHED' ? new Date() : null,

        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return new Response('User book updated', { status: 200 });
  } else {
    // Delete userBook entry if status is NONE

    await prisma.userBooks.delete({
      where: {
        user_id_book_id: {
          user_id: user.id,
          book_id: Number(id),
        },
      },
    });

    return new Response('User book deleted', { status: 200 });
  }
};

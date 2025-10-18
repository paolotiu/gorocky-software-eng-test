import prisma from '@/lib/prisma';

export const getBook = async (id: number) => {
  // Kinda complex query to get a book along with user reviews and usernames
  // Will do for now
  return prisma.books.findUnique({
    where: { id },
    include: {
      UserBooks: {
        select: {
          id: true,
          review: true,
          started_at: true,
          finished_at: true,
          user: {
            include: {
              profile: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

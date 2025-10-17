import prisma from '@/lib/prisma';

export const getBooks = () => {
  // For now just return all books
  // In the future we can add pagination, filtering, etc.
  return prisma.books.findMany({
    include: {
      _count: {
        select: {
          UserBooks: true,
        },
      },
    },
  });
};

export type GetBooksResult = Awaited<ReturnType<typeof getBooks>>;

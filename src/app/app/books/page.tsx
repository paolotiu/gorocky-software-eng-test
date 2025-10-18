import React from 'react';
import { getBooks } from './getBooks';
import BookList from './book-list';
import { getUser } from '@/lib/user';

const Page = async () => {
  const books = await getBooks();
  const user = await getUser();
  return (
    <>
      <BookList books={books} userId={user?.id || ''} />
    </>
  );
};

export default Page;

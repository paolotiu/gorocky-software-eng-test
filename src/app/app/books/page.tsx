import React from 'react';
import { getBooks } from './getBooks';
import Link from 'next/link';

const Page = async () => {
  const books = await getBooks();
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-4">
        {books.map((book) => (
          <Link href={`/app/books/${book.id}`} key={book.id} className="border p-4 m-2 rounded">
            <h3 className="font-bold">{book.title}</h3>
            <p className="italic">{book.author}</p>
            <p className="mt-2 text-sm text-gray-500">
              {book._count.UserBooks} {book._count.UserBooks === 1 ? 'user' : 'users'} read this
              book
            </p>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Page;

'use client';

import React, { useState } from 'react';
import { GetBooksResult } from './getBooks';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import fuzzysort from 'fuzzysort';

type Props = {
  books: GetBooksResult;
  userId: string;
};

const BookList = ({ books, userId }: Props) => {
  const [search, setSearch] = useState('');

  const results = search
    ? fuzzysort
        .go(search, books, {
          keys: ['title', 'author'],
        })
        .map((r) => r.obj)
    : books;

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <Label htmlFor="search-books">Search for a book or an author!</Label>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search-books"
          placeholder="The Catcher in the Rye"
        />
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {results.map((book) => {
          const readCount = book.UserBooks.filter((ub) => ub.finished_at).length;
          const currentUserBook = book.UserBooks.find((ub) => ub.user_id === userId);
          return (
            <Link
              href={`/app/books/${book.id}`}
              key={book.id}
              className="border p-4 m-2 rounded active:ring-2"
            >
              <div className="flex justify-between">
                <h3 className="font-bold">{book.title} </h3>
                <span className="text-xs text-gray-400">
                  {currentUserBook ? (currentUserBook.finished_at ? 'Finished' : 'Reading') : ''}
                </span>
              </div>
              <p className="italic">{book.author}</p>
              <p className="mt-2 text-sm text-gray-500">
                {readCount} {readCount === 1 ? 'user' : 'users'} read this book
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default BookList;

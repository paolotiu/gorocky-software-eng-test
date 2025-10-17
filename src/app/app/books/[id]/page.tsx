import React from 'react';
import { getBook } from './getBook';

const Book = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(Number(params.id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <section className="p-4">
        {' '}
        <h1 className="text-3xl font-bold mt-8 mb-4">{book.title}</h1>
        <p className="italic mb-2">by {book.author}</p>
      </section>
      <section className="p-4 border-t">
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        {book.UserBooks.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {book.UserBooks.filter((ub) => ub.review).map((ub) => (
              <li key={ub.id} className="border p-4 rounded">
                <p className="mb-2">{ub.review}</p>
                <p className="text-sm text-gray-500">- {ub.user.profile?.username}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Book;

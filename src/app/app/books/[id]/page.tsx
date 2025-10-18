import React from 'react';
import { getBook } from './getBook';
import { getUser } from '@/lib/user';
import { userReviewToBookStatus } from './book-status';
import { BookReview } from './book-review';

const Book = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(Number(params.id));
  const user = await getUser();

  if (!user) {
    // Should not reach here
    return null;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  const currentUserReview = book.UserBooks.find((ub) => ub.user.id === user.id);
  const initialStatus = userReviewToBookStatus(currentUserReview);
  const initialReview = currentUserReview?.review || '';
  const reviews = book.UserBooks.filter((ub) => ub.review);

  return (
    <>
      <section className="p-4">
        <h1 className="text-3xl font-bold ">{book.title}</h1>
        <p className="italic mb-2">by {book.author}</p>
        <div className="flex gap-4 items-center mt-8 mb-4">
          <BookReview
            initialUserBook={{
              status: initialStatus,
              review: initialReview,
            }}
          />
        </div>
      </section>
      <section className="p-4 border-t">
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="italic text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((ub) => (
              <li key={ub.id} className="border p-4 rounded">
                <p className="mb-2">{ub.review}</p>
                <p className="text-sm text-gray-500">
                  - {ub.user.profile?.username} ⋅ Finished {ub.finished_at?.toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Book;

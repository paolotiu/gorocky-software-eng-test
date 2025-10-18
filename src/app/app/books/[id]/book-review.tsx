'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { BOOK_STATUS } from './book-status';
import { useDebounce } from 'use-debounce';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useParams } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '../../../../components/ui/label';
import { toast } from 'sonner';

type Props = {
  initialUserBook: {
    status: BOOK_STATUS;
    review: string;
  };
};

export const BookReview = ({ initialUserBook }: Props) => {
  const [userBook, setUserBook] = useState(initialUserBook);
  const [debouncedUserBook] = useDebounce(userBook, 500);
  const isFirstRun = React.useRef(true);

  const params = useParams();

  const updateStatus = useCallback(
    async (ub: typeof userBook) => {
      const res = await fetch(`/app/books/${params.id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ub),
      });

      if (!res.ok) {
        toast.error('Failed to update book status');
        return;
      } else {
        toast.success('Book status updated');
      }
    },
    [params.id]
  );

  useEffect(() => {
    // Skip on initial render (avoids dev StrictMode double-invoke and initial POST)
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // If same as initial values, do not update
    if (
      debouncedUserBook.status === initialUserBook.status &&
      debouncedUserBook.review === initialUserBook.review
    ) {
      return;
    }

    updateStatus(debouncedUserBook);
  }, [debouncedUserBook, initialUserBook, updateStatus]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Select
        value={userBook.status}
        onValueChange={(v) => setUserBook({ ...userBook, status: v as BOOK_STATUS })}
      >
        <SelectTrigger className="w-[150px]" value={userBook.status}>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="NONE">Not Started</SelectItem>
          <SelectItem value="STARTED">Started</SelectItem>
          <SelectItem value="FINISHED">Finished</SelectItem>
        </SelectContent>
      </Select>
      {userBook.status === 'FINISHED' && (
        <div>
          <Label htmlFor="review" className="mb-1">
            Review
          </Label>
          <Textarea
            className="w-full max-w-[500px] h-[150px] resize-none"
            value={userBook.review}
            name="review"
            placeholder="Write your review here!"
            onChange={(e) => {
              setUserBook({
                ...userBook,
                review: e.currentTarget.value,
              });
            }}
            maxLength={256}
          />{' '}
          <p className="text-muted-foreground text-sm">Max 256 characters</p>
        </div>
      )}
    </div>
  );
};

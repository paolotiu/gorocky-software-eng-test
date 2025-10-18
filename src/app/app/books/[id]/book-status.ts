export const BOOK_STATUS_MAP = {
  NONE: 'NONE',
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
} as const;

export type BOOK_STATUS = keyof typeof BOOK_STATUS_MAP;

export const userReviewToBookStatus = (
  review: undefined | { started_at: Date; finished_at: Date | null }
): BOOK_STATUS => {
  if (!review) {
    return BOOK_STATUS_MAP.NONE;
  }

  if (!review.finished_at) {
    return BOOK_STATUS_MAP.STARTED;
  }

  return BOOK_STATUS_MAP.FINISHED;
};

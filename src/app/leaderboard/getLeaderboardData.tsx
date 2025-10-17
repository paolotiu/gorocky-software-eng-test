import prisma from '../../lib/prisma';

export const getLeaderboardData = async () => {
  // Complex query to get top 10 users with most books read

  const leaderboard = (await prisma.$queryRaw`
  SELECT
    u.id AS user_id,
    p.username,
    CAST(COUNT(br.id) AS INTEGER) AS books_read_count
  FROM "UserBooks" br
  JOIN "Users" u ON br.user_id = u.id
  LEFT JOIN "Profiles" p ON p.user_id = u.id
  WHERE br.finished_at IS NOT NULL
  GROUP BY u.id, p.username
  ORDER BY books_read_count DESC
  LIMIT 10;
`) as Array<{
    user_id: string;
    username: string | null;
    books_read_count: number;
  }>;

  return leaderboard;
};

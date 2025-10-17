import React from 'react';
import Avatar from 'boring-avatars';
import { getLeaderboardData } from './getLeaderboardData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Leaderboard = async () => {
  const l = await getLeaderboardData();

  return (
    <section>
      <div className="pt-20" />
      <div className="flex flex-col mx-auto max-w-[800px] gap-2">
        <h1 className="text-3xl font-bold">Leaderboard</h1>

        <div className="border rounded ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Books Read</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {l.map((user, index) => (
                <TableRow key={user.user_id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="flex items-center gap-2 font-medium">
                    <Avatar name={user.username || ''} size={24} variant="beam" />
                    {user.username}
                  </TableCell>
                  <TableCell>{user.books_read_count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;

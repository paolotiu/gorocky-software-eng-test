'use client';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { usePathname, useRouter } from 'next/navigation';
import Avatar from 'boring-avatars';
import { supabaseClient } from '../lib/supabase/client';

export const navData = {
  navMain: [
    {
      title: 'Books Catalogue',
      url: '/app/books',
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  user: {
    username: string;
    booksReadingCount: number;
    booksDoneReadingCount: number;
  };
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-col gap-1 p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar name={user.username || 'Guest'} size={32} variant="beam" />
            <div className="text-sm font-medium"> {user.username || 'Guest'}</div>
          </div>
          <div className="text-xs text-muted-foreground">
            Currently reading {user.booksReadingCount} book{user.booksReadingCount > 1 ? 's' : ''}
          </div>
          <div className="text-xs text-muted-foreground">
            Finished reading {user.booksDoneReadingCount} book
            {user.booksDoneReadingCount > 1 ? 's' : ''}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navData.navMain.map((item) => {
          const isActive = pathname === item.url;

          return (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
        <SidebarFooter>
          <SidebarMenuButton
            onClick={async () => {
              await supabaseClient.auth.signOut();
              router.push('/login');
            }}
          >
            Logout
          </SidebarMenuButton>
        </SidebarFooter>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

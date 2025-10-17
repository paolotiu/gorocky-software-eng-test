'use client';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
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
    booksReadCount: number;
  };
}) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-col gap-1 p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar name={user.username || 'Guest'} size={32} variant="beam" />
            <div className="text-sm font-medium"> {user.username || 'Guest'}</div>
          </div>
          <div className="text-xs text-muted-foreground">
            You have read {user.booksReadCount} {user.booksReadCount === 1 ? 'book' : 'books'}
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
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

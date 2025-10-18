import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getUser } from '../../lib/user';
import { Toaster } from 'sonner';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser({ withUserBooks: true });

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar
        user={{
          booksDoneReadingCount: user?.UserBooks.filter((ub) => ub.finished_at).length || 0,
          booksReadingCount: user?.UserBooks.filter((ub) => !ub.finished_at).length || 0,
          username: user?.profile?.username || '',
        }}
      />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}

import { usePathname } from 'next/navigation';
import { navData } from '../components/app-sidebar';

const getCurrentPathTitle = (pathname: string) => {
  const navItem = navData.navMain.find((item) => item.url === pathname);
  return navItem ? navItem.title : '';
};

export const useCurrentPathTitle = () => {
  const pathname = usePathname();

  return getCurrentPathTitle(pathname);
};

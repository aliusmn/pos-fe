import Dashboard from "@/components/dashboard/dashboard";
import { HeaderMenu } from "@/components/dashboard/header-profile-menu";
import { MenuSection } from "@/components/dashboard/sidebar-menu";
import {
  BuildingStorefrontIcon,
  CogIcon,
  HomeIcon,
  PhoneIcon,
  PowerIcon,
  TvIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Leegro POS - Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerMenu: HeaderMenu = [
    {
      title: "Profil",
      href: "/settings",
      icon: <UserCircleIcon className="size-5" />,
    },
    {
      title: "Pengaturan",
      href: "/settings",
      icon: <CogIcon className="size-5" />,
    },
    null,
    {
      title: "Logout",
      href: "/logout",
      icon: <PowerIcon className="size-5" />,
    },
  ];

  const menuSections: MenuSection = [
    {
      menuItems: [
        {
          title: "Dashboard",
          icon: <HomeIcon className="size-6" />,
          href: "/",
        },
        {
          title: "Cabang",
          icon: <BuildingStorefrontIcon className="size-6" />,
          href: "/branches",
        },
        {
          title: "Orders",
          icon: <TvIcon className="size-6" />,
          children: [
            {
              title: "All Orders",
              href: "/orders",
            },
            {
              title: "Pending Orders",
              href: "/orders/pending",
            },
            {
              title: "Completed Orders",
              href: "/orders/completed",
            },
          ],
        },
      ],
    },
    {
      title: "Dukungan",
      menuItems: [
        {
          title: "Pusat Bantuan",
          icon: <CogIcon className="size-6" />,
          href: "/",
        },
        {
          title: "Hubungi Kami",
          icon: <PhoneIcon className="size-6" />,
          href: "/contact",
        },
      ],
    },
  ];
  return (
    <Dashboard headerMenu={headerMenu} menuSections={menuSections}>
      {children}
    </Dashboard>
  );
}

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo_white.svg";

export default function DashboardLogo() {
  return (
    <Link href="/">
      <Image src={Logo} alt="Logo" width={50} height={50} />
    </Link>
  );
}

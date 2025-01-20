"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo_text.png";

export default function Header() {
  const path = usePathname();
  let headerText = "";

  if (path.startsWith("/login")) {
    headerText = "Login ke akun Anda";
  } else if (path.startsWith("/signup")) {
    headerText = "Buat akun baru";
  } else if (path.startsWith("/forgot-password")) {
    headerText = "Lupa password Anda?";
  } else if (path.startsWith("/reset-password")) {
    headerText = "Atur ulang password Anda";
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Link href="/">
        <Image
          className="mx-auto h-20 w-auto"
          src={Logo}
          alt="Leegro POS"
          width={400}
          height={400}
        />
      </Link>
      <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        {headerText}
      </h2>
    </div>
  );
}

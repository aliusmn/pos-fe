import Link from "next/link";
import { Url } from "url";

export default function DefaultLink({
  className,
  href,
  ...props
}: {
  className?: string;
  href: string | Url;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={`text-indigo-600 hover:text-indigo-700 focus:outline-none focus:underline ${className}`}
      href={href}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default function Paragraph({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`mt-10 text-center text-sm/6 text-gray-500 ${className}`}
      {...props}
    >
      {props.children}
    </p>
  );
}

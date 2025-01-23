export default function Paragraph({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm/6 text-gray-500 ${className}`} {...props}>
      {props.children}
    </p>
  );
}

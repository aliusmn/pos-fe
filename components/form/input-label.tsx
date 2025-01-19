export default function InputLabel({
  className,
  ...props
}: { className?: string } & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`block text-sm/6 font-medium text-gray-900 ${className}`}
      {...props}
    >
      {props.children}
    </label>
  );
}

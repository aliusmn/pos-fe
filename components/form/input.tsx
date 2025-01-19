export default function Input({
  className,
  ...props
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const disableOrReadOnlyClass =
    props.disabled || props.readOnly
      ? "cursor-not-allowed bg-gray-100"
      : "bg-white";

  return (
    <input
      className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${disableOrReadOnlyClass} ${className}`}
      {...props}
    />
  );
}

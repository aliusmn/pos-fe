export default function InputIcon({
  icon,
  iconButtonProps,
  ...props
}: {
  className?: string;
  icon: React.ReactNode;
  iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const disableOrReadOnlyClass =
    props.disabled || props.readOnly
      ? "cursor-not-allowed bg-gray-100"
      : "bg-white";

  return (
    <div className="relative">
      <input
        className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${disableOrReadOnlyClass}`}
        {...props}
      />
      <button
        type="button"
        className="absolute inset-y-[2px] right-[2px] flex items-center px-2 z-10 border-none cursor-pointer rounded-r-md"
        {...iconButtonProps}
      >
        {icon}
      </button>
    </div>
  );
}

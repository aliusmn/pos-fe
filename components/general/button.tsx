export default function Button({
  children,
  size = "default",
  buttonType = "default",
  block = false,
  bordered = false,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  size?: "small" | "default" | "big";
  buttonType?:
    | "primary"
    | "secondary"
    | "default"
    | "danger"
    | "success"
    | "info";
  block?: boolean;
  bordered?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & { [key: string]: any }) {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    default: "px-3 py-1.5 text-sm/6",
    big: "px-4 py-2 text-base",
  };

  // Type classes for bordered buttons
  const borderedTypeClasses = {
    primary:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white",
    secondary:
      "border border-gray-600 text-gray-600 hover:bg-gray-500 hover:text-white",
    default:
      "border border-gray-300 text-gray-900 hover:bg-gray-200 hover:text-gray-900",
    danger:
      "border border-red-600 text-red-600 hover:bg-red-500 hover:text-white",
    success:
      "border border-green-600 text-green-600 hover:bg-green-500 hover:text-white",
    info: "border border-blue-600 text-blue-600 hover:bg-blue-500 hover:text-white",
  };

  // Type classes for filled buttons
  const filledTypeClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-500",
    default: "bg-gray-300 text-gray-900 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-500",
    success: "bg-green-600 text-white hover:bg-green-500",
    info: "bg-blue-600 text-white hover:bg-blue-500",
  };

  // Determine type classes based on `bordered`
  const typeClasses = bordered
    ? borderedTypeClasses[buttonType]
    : filledTypeClasses[buttonType];

  // Additional classes
  const blockClass = block ? "w-full" : "inline-flex";

  return (
    <button
      className={`flex justify-center rounded-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClasses[size]} ${typeClasses} ${blockClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

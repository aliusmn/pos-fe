import InputLabel from "./input-label";

export default function InputGroup({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <div>
      <InputLabel {...props}>{label}</InputLabel>
      <div className="mt-1">{children}</div>
    </div>
  );
}

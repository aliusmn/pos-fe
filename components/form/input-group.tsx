import Input from "./input";
import InputLabel from "./input-label";

export default function InputGroup({
  label,
  className,
  children,
  ...props
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { onCopy, onCut, onPaste, ...labelProps } = props;

  return (
    <div>
      <InputLabel {...labelProps}>{label}</InputLabel>
      <div className="mt-1">{children}</div>
    </div>
  );
}

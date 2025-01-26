import Paragraph from "../general/paragraph";

export default function PanelHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <Paragraph>{description}</Paragraph>
      </div>
      <div>{children}</div>
    </div>
  );
}

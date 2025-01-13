interface Props {
  title: string;
  value: string;
}

export default function EsmerilListItem({ title, value }: Props) {
  return (
    <li className="mb-1 w-full border-b p-1">
      <span className="text-muted-foreground">{title}:</span>{" "}
      <span className="text-lg sm:text-xl">{value}</span>
    </li>
  );
}

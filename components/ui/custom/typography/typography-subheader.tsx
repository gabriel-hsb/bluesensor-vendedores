import React from "react";

type Props = React.ComponentProps<"p">;

export default function TypographySubheader({ children }: Props) {
  return <p className="pb-1 text-sm text-muted-foreground">{children}</p>;
}

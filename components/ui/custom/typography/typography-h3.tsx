import React from "react";

type Props = React.ComponentProps<"h3">;

export default function TypographyH3({ children }: Props) {
  return (
    <h3 className="mb-1 inline-block scroll-m-20 border-b text-2xl font-semibold tracking-tight first:mt-0">
      {children}
    </h3>
  );
}

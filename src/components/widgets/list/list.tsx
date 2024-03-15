import React, { HTMLAttributes } from "react";

interface listProps {
  menuProps?: HTMLAttributes<HTMLUListElement>;
  itemProps?: HTMLAttributes<HTMLLIElement>;
  items: string[];
}

export default function List({
  menuProps = {},
  itemProps = {},
  items,
}: listProps) {
  return (
    <ul {...menuProps}>
      {items.map((value, index) => (
        <li key={index} {...itemProps}>
          {value}
        </li>
      ))}
    </ul>
  );
}

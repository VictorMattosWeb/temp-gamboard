import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link: string;
}

export default function Button({ text, link, ...props }: buttonProps) {
  if (link) {
    return (
      <Link href={link} {...(props as any)}>
        {text}
      </Link>
    );
  }
  return <button {...props}>{text}</button>;
}

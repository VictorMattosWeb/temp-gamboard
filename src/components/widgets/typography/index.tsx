import { FC, ReactNode, createElement, memo } from "react";
import { twMerge } from "tailwind-merge";

export enum TypographyTags {
  "HeadingTitle" = "h1",
}

interface TypographyProps {
  tag: TypographyTags;
  className: string;
  text: string;
  leftIcon?: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  tag,
  className,
  text,
  leftIcon,
  ...props
}) => {
  const Types: FC<any> = ({ children, ...props }) =>
    createElement(tag, props, children);

  return (
    <>
      <Types
        className={twMerge(
          `w-4/5 px-0 md:w-fit md:px-12 py-2 flex items-center justify-center rounded-md bg-zinc-200 text-slate-900 ${className}`
        )}
        {...props}
      >
        {leftIcon}
        {text}
      </Types>
    </>
  );
};

export default Typography;

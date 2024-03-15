import { twMerge } from "tailwind-merge";

export default function Container({ ...props }) {
  console.log({ props });
  return (
    <div
      {...props}
      className={twMerge(
        `h-fit w-full flex flex-col justify-center items-center gap-2 bg-[#F4F0EA] `,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

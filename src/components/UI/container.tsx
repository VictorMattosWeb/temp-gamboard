import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
}

export default function ContainerUI({ children }: containerProps) {
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
}

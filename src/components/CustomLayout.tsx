import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CustomLayout = ({ children }: Props) => {
  return (
    <div className="h-[100vh]">
      <div>Esto es porque pasa por el padre</div>
      {children}
    </div>
  );
};

export { CustomLayout };

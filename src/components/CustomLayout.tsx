import { ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

const CustomLayout = ({ children }: Props) => {
  return (
    <div className="h-[100vh]">
      <div className="h-50 flex justify-center items-center w-full p-10 bg-amber-700">Esto es porque pasa por el padre</div>
      {children}
      <Footer/>
    </div>
  );
};

export { CustomLayout };

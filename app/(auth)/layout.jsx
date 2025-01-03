import Image from "next/image";
import {Button} from "@/components/ui/button";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-[#242C36] items-center text-slate-100">
      <div className="w-full flex items-center justify-center gap-1">
        <Image src="/logo.png" alt="logo" width={16} height={16} />
        <h4 className="mt-1">uniaccelerate.</h4>
      </div>

      <div className="w-full flex flex-col mt-10 items-center justify-center">
        <p>Unlocking the <b>entrepreneurship</b> potential in <b>Students</b></p>
        <Image
          src="/thinking.png"
          alt="thinking"
          width={512}
          height={512}
          className="mt-10 object-contain"
        />

        <Button className="bg-amber-400 mt-10 text-lg py-8 px-14 font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Layout;
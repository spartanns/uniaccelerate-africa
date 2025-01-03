import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next/link";
import SignIn from "@/app/(auth)/sign-in/page";

const Welcome = () => {
  return (
    <section className="flex flex-col min-h-screen bg-[#242C36] items-center text-slate-100 overflow-hidden">
      <div className="w-full flex items-center justify-center gap-2">
        <Image src="/logo.png" alt="logo" width={15} height={16} />
        <h4 className="mt-1">uniaccelerate.</h4>
      </div>

      <div className="w-full flex flex-col mt-11 items-center justify-center">
        <p>
          Unlocking the <b>entrepreneurship</b> potential in <b>Students</b>
        </p>
        <Image
          src="/thinking.png"
          alt="thinking"
          width={511}
          height={511}
          className="mt-11 object-contain"
        />

        <a
          href="/sign-in"
          className="bg-amber-400 px-16 py-6 text-md mt-10 font-semibold rounded-lg uppercase"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Welcome;

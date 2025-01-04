import AuthForm from "@/components/AuthForm";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="flex w-full min-h-screen overflow-hidden justify-between">
      <AuthForm />
      <Image
        src="/bg.png"
        alt="buildings"
        width={512}
        height={512}
        className="sm:hidden md:block object-cover"
      />
    </section>
  );
};

export default SignIn;

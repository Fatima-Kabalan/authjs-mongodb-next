import { SignIn } from "@/components/auth/signin-button";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}

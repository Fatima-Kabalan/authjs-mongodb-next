import { SignIn } from "@/components/auth/signin-button";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}

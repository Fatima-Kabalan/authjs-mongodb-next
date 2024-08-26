import { SignOut } from "@/components/auth/signout-button";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 min-h-screen">
        <h1 className="text-lg font-bold">This is the dashboard page</h1>
        <SignOut />
      </div>
    </>
  );
}

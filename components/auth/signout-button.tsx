import { signOut } from "@/auth";

export default async function SignOut() {
  const handleSignOut = async () => {
    "use server";
    await signOut();
    console.log("signed out");
  };

  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        name="action"
        value="signOut"
        className="flex gap-4 justify-center rounded-lg bg-red-500 text-white text-lg p-4"
      >
        Sign Out
      </button>
    </form>
  );
}

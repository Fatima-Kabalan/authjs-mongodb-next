import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
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

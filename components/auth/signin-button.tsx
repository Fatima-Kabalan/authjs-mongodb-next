import { signIn, signOut } from "@/auth";
import GithubSvg from "@/public/svg/GithubSvg";
import GoogleSvg from "@/public/svg/GoogleSvg";

export function SignIn() {
  return (
    <form
      className="rounded-xl p-6 w-full max-w-sm bg-white shadow-xl space-y-4"
      action={async (formData: FormData) => {
        "use server";

        const action = formData.get("action");

        if (action === "signInGoogle") {
          await signIn("google", { redirectTo: "/dashboard" });
        } else if (action === "signInGitHub") {
          await signIn("github", { redirectTo: "/dashboard" });
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Sign In
      </h2>
      <button
        type="submit"
        name="action"
        value="signInGitHub"
        className="flex gap-4 justify-center rounded-lg bg-black text-white text-lg p-4 w-full"
      >
        <div className="w-6">
          <GithubSvg />
        </div>
        Sign in with GitHub
      </button>
      <button
        type="submit"
        name="action"
        value="signInGoogle"
        className="flex gap-4 justify-center rounded-lg border border-gray-200 text-lg p-4 w-full"
      >
        <div className="w-6">
          <GoogleSvg />
        </div>
        Sign in with Google
      </button>
    </form>
  );
}

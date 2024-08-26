import { signIn } from "@/auth";
import GitHubIcon from "@mui/icons-material/GitHub";

export function SignIn() {
  return (
    <form
      className="border"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-black text-white text-lg p-4 flex gap-4"
      >
        <GitHubIcon />
        Sign in with GitHub
      </button>
    </form>
  );
}

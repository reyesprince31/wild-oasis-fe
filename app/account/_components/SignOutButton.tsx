import { signOutAction } from "@/lib/action";
import { LogOut } from "lucide-react";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary hover:text-secondary transition-colors flex items-center gap-4 font-semibold text-primary w-full">
        <LogOut className="h-5 w-5 text-primary" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;

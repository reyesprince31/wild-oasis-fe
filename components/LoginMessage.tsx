import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please
        <button className="px-2 py-1">
          <Link href="/auth/sign-in" className="underline text-accent-500">
            login
          </Link>
        </button>
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;

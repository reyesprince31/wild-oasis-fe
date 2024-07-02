import { auth } from "@/lib/auth";

export const metadata = {
  title: "Guest area",
};

async function page() {
  const session = await auth();
  const firstName = session!.user!.name!.split(" ").at(0);

  return (
    <h2 className="front-semibold text-2xl text-accent">
      Welcome, {firstName}
    </h2>
  );
}

export default page;

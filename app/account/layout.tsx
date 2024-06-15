import AccountSideNavigation from "./_components/AccountSideNavigation";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full  gap-12">

        <AccountSideNavigation />

      <div className="py-1">{children}</div>
    </div>
  );
}

export default layout;

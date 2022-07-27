import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="max-w-[1280px] p-4 mt-8 mx-auto">
      <Outlet />
    </main>
  );
}
export default Layout;

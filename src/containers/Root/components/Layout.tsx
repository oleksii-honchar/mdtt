import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PageNavbar } from "src/components/PageNavbar.tsx";
import { Footer } from "src/components/Footer.tsx";

export function Layout({}) {
  return (
    <div
      className={`
        flex min-h-screen w-full flex-col bg-md-sys-light-background 
      `}
    >
      <PageNavbar />
      <main className="w-full flex flex-col flex-1 items-center justify-start">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

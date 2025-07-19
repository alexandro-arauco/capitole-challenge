import Header from "@/components/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Toaster richColors />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

import Header from "../components/Header/Header";
import type { RouterContext } from "@/routerContext";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    links: [{ rel: "icon", href: "/images/favicon.ico" }],
    meta: [
      {
        title: "TanStack Router SSR Basic File Based Streaming",
      },
      {
        charSet: "UTF-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    scripts: [
      {
        src: "https://unpkg.com/@tailwindcss/browser@4",
      },
      ...(!import.meta.env.PROD
        ? [
            {
              type: "module",
              children: `import RefreshRuntime from "/@react-refresh"
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true`,
            },
            {
              type: "module",
              src: "/@vite/client",
            },
          ]
        : []),
      {
        type: "module",
        src: import.meta.env.PROD
          ? "/static/entry-client.js"
          : "/src/entry-client.tsx",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ backgroundColor: "black" }}>
        <Header />
        <Toaster richColors />
        <Outlet /> {/* Start rendering router matches */}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}

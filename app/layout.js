import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Buildify.ai",
  description: "A web app that creates wesbite for you",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ConvexClientProvider>
          <Provider>{children}</Provider>
          <Toaster />

        </ConvexClientProvider>
      </body>
    </html>
  );
}

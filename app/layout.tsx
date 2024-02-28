import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/navigation/header";
import Container from "@/components/container/container";
import ConvexClientProvider from "@/components/providers/convex-client-provider";
import Footer from "@/components/navigation/footer";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samatar Barkadleh Portfolio",
  description: "",
  icons: ["shortcut-icon"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
          </Container>

          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Container>
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import CartProvider from "@/store/CartProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const noNav = ["/SignIn", "/SignUp"];
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {noNav.includes(pathName) ? null : <Header />}
          {children}
          {noNav.includes(pathName) ? null : <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}

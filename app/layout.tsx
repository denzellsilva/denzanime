import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#191919] text-white flex items-center justify-center min-h-svh`}
      >
        {children}
      </body>
    </html>
  );
}

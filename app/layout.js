import "./globals.css";

export const metadata = {
  title: "NOVA — Landing Page",
  description: "Мінімальний Landing Page на Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

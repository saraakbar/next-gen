import localFont from 'next/font/local'
import "./globals.css";

const openSauce = localFont({ src: './OpenSauceSans-Regular.ttf' })

export const metadata = {
  title: "Sports Next Gen",
  description: "Sports Next Gen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={openSauce.className}>{children}</body>
    </html>
  );
}

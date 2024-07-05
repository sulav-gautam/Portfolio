import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sulav Gautam",
  description:` Versatile Web Developer & Graphic Designer | Cross-Technology Experience | Passionate Mentor & Leader`,   keywords: "Sulav Gautam, front end developer, graphic designer, portfolio, Next.js",
  keywords: "Sulav Gautam, front end developer, graphic designer, portfolio, Next.js, Good Web Developer, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Sulav Gautam" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sulav-gautam.vercel.app/" /> {/* Replace with your actual URL */}
        <meta property="og:image" content="/profile-pic.png" /> {/* Use relative path to the image in the public directory */}
        <meta property="og:image:alt" content={metadata.title} /> {/* Replace with an appropriate alt text */}
        <meta property="og:site_name" content="Sulav Gautam" />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

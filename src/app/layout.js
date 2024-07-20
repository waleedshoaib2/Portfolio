import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waleed Shoaib - Software Engineer",
  description: "Explore the portfolio of Waleed Shoaib, a passionate software engineer specializing in Front-End Development with React.js and Next.js, Back-End Development with Node.js, and Full-Stack Development. Connect to learn more about robust and scalable application development.",
  keywords: "Waleed Shoaib, Software Engineer, Front-End Development, React.js, Next.js, Back-End Development, Node.js, Full-Stack Development, Portfolio, Web Development",
  author: "Waleed Shoaib",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  language: "en",
  robots: "index, follow",
  themeColor: "#000000",
  openGraph: {
    title: "Waleed Shoaib - Software Engineer",
    description: "Explore the portfolio of Waleed Shoaib, a passionate software engineer specializing in Front-End Development with React.js and Next.js, Back-End Development with Node.js, and Full-Stack Development.",
    url: "https://yourwebsite.com",
    type: "website",
    locale: "en_US",
    siteName: "Waleed Shoaib Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/path-to-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waleed Shoaib - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Waleed Shoaib - Software Engineer",
    description: "Explore the portfolio of Waleed Shoaib, a passionate software engineer specializing in Front-End Development with React.js and Next.js, Back-End Development with Node.js, and Full-Stack Development.",
    image: "https://yourwebsite.com/path-to-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="icon" href="icon.png" type="image/x-icon" />
        <link rel="icon" href="icon.png" type="image/png" sizes="16x16" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

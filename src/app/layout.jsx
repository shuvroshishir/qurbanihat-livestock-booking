import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar, { App } from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat | Premium Livestock Booking Platform",
  description:
    "Explore premium cows and goats for Qurbani. Book your livestock easily with QurbaniHat. Trusted, healthy, and verified animals across Bangladesh.",

  keywords: [
    "Qurbani",
    "Livestock marketplace",
    "Buy cow Bangladesh",
    "Buy goat",
    "Qurbani animals",
    "Online cattle booking",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <header className="shadow-sm bg-white/20 backdrop-blur-md border border-white/30 sticky top-0 z-50 ">
          <Navbar />
        </header>

        <main className="min-h-screen bg-[#F9F7F5]">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}


// bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar.jsx";
import Footer from "@components/Footer";
import connectMongoDB from "@libs/mongodb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Booking app",
  description:
    "Book a table at your favourite restaurant easily from any device",
};

export default function RootLayout({ children }) {
  //connect to the MongoDB database when the layout is rendered so database can be used in the components
  connectMongoDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto p-4 bg-slate-50">
          <Navbar />
          <div className="mt-8 "> {children} </div>
        </div>
        <Footer /> {/*adding footer to layout so it is displayed on all pages*/}
      </body>
    </html>
  );
}

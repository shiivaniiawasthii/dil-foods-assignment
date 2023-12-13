import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
    </>
  );
}
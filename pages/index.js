import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatformGrid from "../components/PlatformsGrid";
import MainBanner from "../components/MainBanner";

export default function Home() {
  const brandName = "Discord";
  return (
    <div>
      <Navbar name={brandName} />
      <MainBanner />
      <PlatformGrid />
      <Footer />
    </div>
  );
}

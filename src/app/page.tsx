import Blog from "@/componants/Blog";
import { Donate } from "@/componants/Donate";
import Event from "@/componants/Events";
import Footer from "@/componants/Footer";
import Home from "@/componants/Home";
import Navbar from "@/componants/Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Event/>
      <Blog/>
      <Donate/>
      <Footer />
    </>
  );
}

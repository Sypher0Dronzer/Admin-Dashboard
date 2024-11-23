import LeftNav from "./components/LeftNav";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="font-poppins max-w-[100vw] overflow-hidden">
      <BrowserRouter>
        <LeftNav />
        <Navbar />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

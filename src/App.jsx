import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
import MainContainer from "./Components/MainContainer";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="bg-[#F4F5FA] flex w-full h-screen">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;

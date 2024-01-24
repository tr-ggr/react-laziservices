import { Button } from "./components/ui/button";
import MenuCard from "./MenuCard";

function App() {
  return (
    <div className="w-dvw h-dvh bg-slate-400 flex-col  flex justify-center items-center">
      <img className="w-80" src="/us.png"></img>
      <MenuCard></MenuCard>
    </div>
  );
}

export default App;

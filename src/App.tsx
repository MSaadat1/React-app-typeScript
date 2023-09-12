import "./App.css";
import { ContainerItems } from "./components/Container.tsx";
import { NavBar } from "./components/Navbar";
import { TableList } from "./components/TableData";
import { dataCharacter } from "./fma-data.ts";

function App() {
  const sortedCharacters = dataCharacter.slice().sort((a, b) => b.votes - a.votes);
  const topFiveCharacters = sortedCharacters.slice(0, 5);
  return (
    <>
      <div>
        <NavBar />
        <TableList props={topFiveCharacters} />
        <ContainerItems characters={dataCharacter}/>
      </div>
    </>
  );
}

export default App;


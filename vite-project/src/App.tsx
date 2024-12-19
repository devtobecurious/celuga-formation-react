import "./App.css";
import { ListFilms } from "./features/films/components/ListFilms";
import { DisplayTitle } from "./shared/ui/DisplayTitle";

function App() {
  return (
    <>
      <DisplayTitle />
      <ListFilms />
    </>
  );
}

export default App;

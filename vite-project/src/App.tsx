import "./App.css";
import { AddFilm } from "./features/films/components/AddFilm";
import { EditFilm } from "./features/films/components/EditFilm";
import { ListFilms } from "./features/films/components/ListFilms";
import { DisplayTitle } from "./shared/ui/DisplayTitle";

function App() {
  return (
    <>
      <DisplayTitle />
      <ListFilms />
      <AddFilm></AddFilm>
      <EditFilm></EditFilm>
    </>
  );
}

export default App;

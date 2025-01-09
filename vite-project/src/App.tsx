import { Route, Routes } from "react-router";
import "./App.css";
import { DisplayTitle } from "./shared/ui/DisplayTitle";
import { MainMenu } from "./shared/ui/MainMenu";
import { PageFilms } from "./features/films/pages/PageFilms";
import { AddFilm } from "./features/films/components/AddFilm";

function App() {
  return (
    <>
      <MainMenu />
      <DisplayTitle />

      <Routes>
        <Route path="/films" element={ <PageFilms /> }></Route> 
        <Route path="/films/add" element={ <AddFilm /> }></Route> 
      </Routes>

      {/* <ListFilms />
      <AddFilm></AddFilm>
      <EditFilm></EditFilm> */}
    </>
  );
}

export default App;

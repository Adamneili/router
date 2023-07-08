import React, { useState } from "react";

import { Moviedata } from "./Component/Moviedata";
import Navbarapp from "./Component/Navbarapp";
import Movielist from "./Component/Movielist";
import Addmovie from "./Component/Addmovie";
import { Route, Routes } from "react-router-dom";
import Description from "./Component/Description";

const App = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(Moviedata);
  return (
    <div className="App">
      <Routes>
      <Route
      exact
      path="/"
      element={[
      <Navbarapp
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRateSearch={setRateSearch}
        movies={movies}
        setMovies={setMovies}
      />,

      <Movielist
        movies={movies}
        nameSearch={nameSearch}
        rateSearch={rateSearch}
      />,
        <Addmovie movies={movies} setMovies={setMovies} />
        ]}
        />

        <Route
        exact
        path="/description/:name"
        element={<Description movies={movies} />}
        />
       
        
        </Routes>
      </div>
    
  );
};

export default App;

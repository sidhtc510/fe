import { Route, Routes } from "react-router-dom";
import "./App.css";
import ConfigurationsPage from "./Pages/ConfigurationsPage";
import TeamsPages from "./Pages/TeamsPages";
import NavMenu from "./components/NavMenu";
import { useState } from "react";
import { Context } from "./context";

function App() {
      const [team, setTeam] = useState([]);
      const [players, setPlayers] = useState([]);

      const add_team = (newTeam) => {
            setTeam([...team, newTeam]);
      };


      const add_player = (newPlayer) => {
            setPlayers([...players, newPlayer]);
      };
      
      const delete_player = (id) => setPlayers(players.filter(el => el.id !== id));

      return (
            <div>
                  <Context.Provider value={{ team, add_team, players, add_player, delete_player}}>
                        <NavMenu />
                        <Routes>
                              <Route
                                    path="/"
                                    element={<ConfigurationsPage />}
                              />
                              <Route
                                    path="/team_page"
                                    element={<TeamsPages />}
                              />
                        </Routes>
                  </Context.Provider>
            </div>
      );
}

export default App;

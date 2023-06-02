import React, { useContext } from "react";
import s from "./s.module.css";
import Select from "react-select";
import { Context } from "../../context";

export default function AddPlayerForm() {
      const { team, add_player } = useContext(Context);

      const handler = (e) => {
            e.preventDefault();
            const { player, team } = e.target;

            const player_obj = {
                  id: Date.now(),
                  player: player.value,
                  team: team.value,
            };

            add_player(player_obj);
            e.target.reset();
      };
      return (
            <form className={s.addPlayerForm} onSubmit={handler}>
                  <label htmlFor="">
                        <p>Add Player</p>
                        <input
                              type="text"
                              placeholder="Player`s name"
                              name="player"
                        />
                  </label>

                  <Select options={team} name="team" />
                  <button>Add player</button>
            </form>
      );
}

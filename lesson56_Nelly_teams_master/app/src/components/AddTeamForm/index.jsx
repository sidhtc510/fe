import React, { useContext } from "react";
import s from "./s.module.css";
import { Context } from "../../context";

export default function AddTeamForm() {
      const { add_team } = useContext(Context);
      const handler = (e) => {
            e.preventDefault();

            // e.preventDefault();
            // let data = new FormData(e.target)
            // let obj = Object.fromEntries(data)
            // const { value } = obj;
            // const team_obj = {...obj, label: value}
            // console.log(team_obj);

            const team = {
                  label: e.target.team.value,
                  value: e.target.team.value,
            };
            add_team(team);
            e.target.reset();
      };

      return (
            <form className={s.addTeamForm} onSubmit={handler}>
                  <label htmlFor="">
                        <p>Add Team</p>
                        <input
                              type="text"
                              placeholder="Team`s name"
                              name="team"
                        />
                  </label>
                  <button>Add team</button>
            </form>
      );
}

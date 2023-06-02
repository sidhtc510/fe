import React, { useContext } from "react";
import s from "./s.module.css";
import { Context } from "../../context";

export default function Player({ id, player, team }) {
      const { delete_player } = useContext(Context);
      return (
            <div className={s.player_card}>
                  <p>{player}</p>
                  <p>{team}</p>
                  <span onClick={() => delete_player(id)}>X</span>
            </div>
      );
}

import React, { useContext } from 'react'
import { Context } from '../../context';
import Player from '../Player';

export default function PlayersContainer() {
      const { players } = useContext(Context);

      console.log(players);
  return (
      <div>
      {
        players.length === 0
        ? <p>No players</p>
        :  players.map(el => <Player key={el.id} {...el} />)
      }
    </div>
  )
}

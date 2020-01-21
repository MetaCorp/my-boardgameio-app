// @ts-ignore
import { Client } from 'boardgame.io/react'
// @ts-ignore
import { SocketIO } from 'boardgame.io/multiplayer'

import game from './game'
import board from './board'

const TicTacToeClient = Client({
	game,
	board,
	multiplayer: SocketIO({ server: 'localhost:8000' })
})

export default TicTacToeClient

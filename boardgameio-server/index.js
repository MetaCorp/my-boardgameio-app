const Server = require('boardgame.io/server').Server
const TicTacToe = require('../src/components/games/tictactoe/game').default
const server = Server({ games: [ TicTacToe ] })
server.run(8000)

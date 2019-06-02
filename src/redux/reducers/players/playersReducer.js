
// import Actions Types
import {
  UPDATE_PLAYERS,
} from './playersActions';

import playerInitialState from './playersInitialState';

// Initial State
const initialState = playerInitialState

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case UPDATE_PLAYERS:
          return Object.assign({}, state, { players: action.payload.players })
      default:
          return state;
  }
}
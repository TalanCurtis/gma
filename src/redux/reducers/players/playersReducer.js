
import _ from 'lodash';
// import Actions Types
import {
  UPDATE_PLAYERS,
  UPDATE_CURRENT_HP,
} from './playersActions';

import playerInitialState from './playersInitialState';

// Initial State
const initialState = playerInitialState

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case UPDATE_PLAYERS: return Object.assign({}, state, { players: action.payload.players });
      case UPDATE_CURRENT_HP: {
        state = _.cloneDeep(state);
        let index = _.findIndex(state, {id: action.payload.player.id});
        state.splice(index, 1, action.payload.player);
        return state; 
      }
      default: return state;
  }
}
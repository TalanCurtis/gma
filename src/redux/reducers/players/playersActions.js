import _ from 'lodash';

// Types
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";
export const UPDATE_CURRENT_HP = "UPDATE_CURRENT_HP";

// Actions
export function updateATest(text) {
  const payload = {players: text }
  const type = UPDATE_PLAYERS
  return {type, payload};
}

export function updateCurrentHP(player, value) {
  player = _.cloneDeep(player);
  player.character.info.currentHP = value;
  const payload = {player}
  const type = UPDATE_CURRENT_HP
  return {type, payload};
}




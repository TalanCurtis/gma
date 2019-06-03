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

export function updateCurrentHP(player, operation) {
  player = _.cloneDeep(player);
  if (operation === "add"){
    console.log("add", player)
    player.character.info.currentHP = player.character.info.currentHP + 1;
  } else if ( operation === "sub" ){
    console.log("sub")
    player.character.info.currentHP = player.character.info.currentHP - 1;
  }
  const payload = {player}
  const type = UPDATE_CURRENT_HP
  return {type, payload};
}




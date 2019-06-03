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
  if (operation === "add"){
    console.log("add")
  } else if ( operation === "sub" ){
    console.log("sub")
  }
  const payload = {players: player }
  const type = UPDATE_CURRENT_HP
  return {type, payload};
}




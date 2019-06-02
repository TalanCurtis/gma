// Types
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";

// Actions
export function updateATest(text) {
  const payload = {players: text }
  const type = UPDATE_PLAYERS
  return {type, payload};
}




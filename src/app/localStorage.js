const GAME_APP_KEY = "GAME_APP";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(GAME_APP_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(GAME_APP_KEY, serializedState);
  } catch (error) {}
};

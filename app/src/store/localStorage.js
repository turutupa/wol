export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

export const clearLocalStorageItem = (item) => {
  try {
    const serializedState = JSON.parse(localStorage.getItem("state"));
    delete serializedState[item];
    localStorage.setItem("state", serializedState);
  } catch (err) {
    return undefined;
  }
};

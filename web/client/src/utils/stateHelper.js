export const addItemAction = (newData) => (prevState) => {
    const newState = [...prevState];
    newState.push(newData);
    return newState;
}
export const editItemAction = (newData, oldData) => (prevState) => {
    const newState = [...prevState];
    debugger
    newState[newState.indexOf(oldData)] = newData;
    return newState;
}
export const deleteItemAction = (oldData) => (prevState) => {
    const newState = [...prevState];
    newState.splice(newState.indexOf(oldData), 1);
    return newState;
}

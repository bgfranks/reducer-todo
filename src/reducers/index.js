export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "TOGGLE_DONE":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    case "CLEAR_COMPLETED_ITEMS":
      return state.filter(item => {
        return item.completed === false;
      });
    default:
      return state;
  }
};

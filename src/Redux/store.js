import { legacy_createStore as createStore } from "redux";

const store = createStore(
  function (state, action) {
    switch (action.type) {
      case "SET_THEME":
        return {
          ...state,
          darkTheme: !state.darkTheme,
        };
      case "SET_MENU_OPEN":
        return {
          ...state,
          menuIsOpen: !state.menuIsOpen,
        };

      default:
        return state;
    }
  },
  { darkTheme: true, menuIsOpen: false }
);
export default store;

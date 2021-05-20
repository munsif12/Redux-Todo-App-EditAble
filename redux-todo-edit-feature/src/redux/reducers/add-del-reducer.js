const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const UPDATED = "UPDATED";
const initialState = {
  list: [],
};
let idForEdit = 0;
const add_del_reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // return Object.assign({}, state, {
      //   contacts: [
      //     ...state.list,
      //     { data: action.payload.data, id: action.payload.id },
      //   ],
      // });
      return {
        list: [
          ...state.list,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };
    case DELETE_ITEM:
      const filterArr = state.list.filter(
        (val) => val.id !== action.payload.id
      );
      return {
        list: filterArr,
      };
    case EDIT_ITEM:
      idForEdit = action.payload.id; //ya jo id lakr arha h isko ham global krrhy ha taka updateed reducer ka waqt ham is id ka use karty huay apna content match krky usko ko specificaly update karaky
      return {
        list: state.list,
      };
    case UPDATED:
      const objIndex = state.list.findIndex((obj) => obj.id === idForEdit); //goood logic to update specific element
      // console.log("Before update: ", state.list[objIndex]);
      state.list[objIndex].data = action.payload.data;
      // console.log("After update: ", state.list[objIndex]);
      return {
        list: state.list,
      };
    default:
      return state;
  }
};
export { add_del_reducers };

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const initialState = {
  list: [],
};
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
    default:
      return state;
  }
};
export { add_del_reducers };

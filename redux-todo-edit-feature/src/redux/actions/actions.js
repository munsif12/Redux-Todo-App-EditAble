const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const UPDATED = "UPDATED";
const add_item = (data) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: new Date().getTime(),
      data: data,
    },
  };
};
const delete_item = (id, updatedData) => {
  return {
    type: DELETE_ITEM,
    payload: {
      id,
      updatedData,
    },
  };
};
//working on edit feature
const edit_item = (id) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
    },
  };
};
const updated = (id, updatedVal) => {
  return {
    type: UPDATED,
    payload: {
      id,
      data: updatedVal,
    },
  };
};
export { add_item, delete_item, edit_item, updated };

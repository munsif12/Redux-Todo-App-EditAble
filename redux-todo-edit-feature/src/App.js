import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  add_item,
  delete_item,
  edit_item,
  updated,
} from "./redux/actions/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
function App() {
  const data = useSelector((state) => state.add_del_reducers.list);
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState("");
  const [editorNot, seteditorNot] = useState(false);
  const inputFocus = useRef("");

  // adding data to localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listItem));
  }, [listItem]);
  return (
    <>
      <div className="black top"></div>
      <div className="black center"></div>
      <div className="black bottom"></div>
      <div className="App">
        <div className="heading">
          <h1>React Redux Todo App</h1>
        </div>
        <div className="inputFields">
          <input
            type="text"
            name="item"
            id="text"
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
            ref={inputFocus}
            placeholder="Type sonething here..."
            autoComplete="off"
          />
          {!editorNot ? (
            <button
              className="addBtn common"
              onClick={() => {
                if (listItem.length >= 3) {
                  dispatch(add_item(listItem));
                  setListItem(" ");
                  inputFocus.current.focus();
                } else {
                  alert("Value Must be greater then 3 character");
                }
              }}
            >
              <AddCircleOutlineIcon />
            </button>
          ) : (
            <button
              className="editBtn common"
              onClick={() => {
                if (listItem.length >= 3) {
                  seteditorNot(false);
                  dispatch(updated(listItem));
                  setListItem(" ");
                  inputFocus.current.focus();
                } else {
                  alert("Value Must be greater then 3 character");
                }
              }}
            >
              <CheckCircleOutlineIcon />
            </button>
          )}
        </div>
        <div className="allLists">
          <div className="allItmes_wrapper">
            <ul>
              {data.map((val, index) => {
                //displaying all the lists with map
                return (
                  <div className={`listWrapper${index + 1} listWrapper`}>
                    <li className={`item${index + 1} item`}>
                      <div className="item">
                        <p>{val.data}</p>{" "}
                      </div>
                      <EditIcon
                        style={{
                          cursor: "pointer",
                          color: "green",
                          transform: "scale(0.8)",
                        }}
                        onClick={() => {
                          dispatch(edit_item(val.id));
                          setListItem(val.data, listItem);
                          seteditorNot(true);
                          inputFocus.current.focus();
                        }}
                      />
                      <DeleteForeverIcon
                        style={{
                          cursor: "pointer",
                          color: "red",
                          transform: "scale(0.8)",
                        }}
                        onClick={() => dispatch(delete_item(val.id))}
                      />
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add_item, delete_item, edit_item } from "./redux/actions/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
function App() {
  const data = useSelector((state) => state.add_del_reducers.list);
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState("");
  const [editorNot, seteditorNot] = useState(false);

  // adding data to localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listItem));
  }, [listItem]);
  return (
    <div className="App">
      <h1>React Redux Todo App</h1>
      <div className="input">
        <input
          type="text"
          name="item"
          id="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
        {!editorNot ? (
          <button
            onClick={() => {
              dispatch(add_item(listItem));
              setListItem(" ");
            }}
          >
            +
          </button>
        ) : (
          <button onClick={() => seteditorNot(false)}>edit</button>
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
                      {" "}
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
                        setListItem(val.data);
                        seteditorNot(true);
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
  );
}

export default App;

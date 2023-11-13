import { useRef, useState } from "react";
import "./styles.css";

function App() {
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem !== "") {
      setTask([...task, newItem]);
    }
    inputRef.current.value = "";
  };

  const removeItem = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="App container">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Enter an item" ref={inputRef} />
        <ul>
          {task.map((task, index) => (
            <li className="li-item" key={index}>
              {task}
              <span className="text-dark" onClick={() => removeItem(index)}>
                x
              </span>
            </li>
          ))}
        </ul>
        <button className="custom-btn" onClick={addItem}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;

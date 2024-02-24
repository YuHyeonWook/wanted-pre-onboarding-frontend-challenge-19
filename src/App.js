import "./App.css";
import Header from "./components/Header";
import TodoEditorItem from "./components/TodoEditorItem";
import ListTodo from "./components/ListTodo";
import { useReducer, useRef } from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "aaa",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "bbb",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "DELETE": {
      return state.filter((el) => el.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(2);

  // 추가 버튼
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  // 목록 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <TodoEditorItem onCreate={onCreate} />
      <ListTodo todo={todo} onDelete={onDelete} />
    </div>
  );
}

export default App;

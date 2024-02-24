import "./App.css";
import Header from "./components/Header";
import TodoEditorItem from "./components/TodoEditorItem";
import ListTodo from "./components/ListTodo";
import { useRef, useState } from "react";

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

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(2);

  // 추가 버튼
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  // 목록 삭제
  const onDelete = (targetId) => {
    setTodo(todo.filter((el) => el.id !== targetId));
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

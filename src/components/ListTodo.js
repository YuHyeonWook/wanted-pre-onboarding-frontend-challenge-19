import { useState } from "react";
import "../css/ListTodo.css";
import TodoItems from "./TodoItems";

const ListTodo = ({ todo, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((el) => el.content.includes(search.toLowerCase()));
  };

  return (
    <div className="ListTodo">
      <h4>할일 목록</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list__wrapper">
        {getSearchResult().map((el) => (
          <TodoItems key={el.id} {...el} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default ListTodo;

import { useRef, useState } from "react";
import "../css/TodoEditorItem.css";

const TodoEditorItem = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSumbit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditorItem">
      <h3>새로운 todo 작성하기</h3>
      <div className="TodoEditorItem__wrapper">
        <input
          placeholder="작성하세요."
          value={content}
          onChange={onChangeContent}
          ref={inputRef}
        />
        <button onClick={onSumbit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditorItem;

import "../css/TodoItems.css";

const TodoItems = ({ id, isDone, content, createdDate, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItems">
      <div className="checkbox__column">
        <input type="checkbox" checked={isDone} />
      </div>
      <div className="title__column">{content}</div>
      <div className="date__column">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn__column">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItems;

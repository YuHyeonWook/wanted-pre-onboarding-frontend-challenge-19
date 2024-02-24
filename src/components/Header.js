import "../css/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h2>오늘의 할일</h2>
      <h3>{new Date().toDateString()}</h3>
    </div>
  );
};
export default Header;

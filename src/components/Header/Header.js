import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      HyperStream🎬
      <span className="movie">Search Your favorite movie</span>
    </span>
  );
};

export default Header;
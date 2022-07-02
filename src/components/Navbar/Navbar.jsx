import styling from "./Navbar.module.scss";
import cw from "../../assets/cw.svg";

const Navbar = () => {
  return (
    <div className={styling.container}>
      <nav className={styling.navbar}>
        <img src={cw} alt="Clarusway" className={styling.image}/>
      </nav>
    </div>
  );
};

export default Navbar;

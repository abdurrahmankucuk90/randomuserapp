import styling from "./Footer.module.scss";
import design from "../../assets/design.svg";

const Footer = () => {
    return (
        <div className={styling.foot}>
            <img src={design} alt="design" className={styling.design} />
            <p className={styling.after}>abdurrahman</p>
        </div>
    );
};

export default Footer;

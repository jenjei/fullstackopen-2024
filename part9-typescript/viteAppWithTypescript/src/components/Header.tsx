import { Title } from "../types";

const Header = (props: Title) => {
  return <h1>{props.headerText}</h1>;
};

export default Header;

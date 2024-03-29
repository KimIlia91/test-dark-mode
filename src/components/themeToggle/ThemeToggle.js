import { BsSun } from "react-icons/bs"
import { HiOutlineMoon } from "react-icons/hi"
import './themeToggle.scss'

const ThemeToggle = ({darkMode, toggleTheme}) => {
  return (
    <button className="toggle__btn" onClick={toggleTheme}>
      {darkMode ? <BsSun size={25} color="white" /> : <HiOutlineMoon size={25} color="gray" />}
    </button>
  );
};

export default ThemeToggle
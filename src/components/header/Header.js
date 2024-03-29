import Bell from './bell/Bell'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Account from './account/Account'
import './header.scss'

const Header = ({darkMode, toggleTheme}) => {
  return (
    <header className='header'>
      <div className='app-container'>
        <div className='header__wrapper'>
          <Bell />
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          <Account />
        </div>
      </div>
    </header>
  )
}

export default Header
import './navBar.scss'

const NavBar = () => {
  return (
    <nav className='nav-bar__container'>
      <div className='app-container'>
        <ul className='nav-bar__list'>
          <li key={1} className='nav-bar__item'>
            <a href="/">Кредиты</a>
          </li>
          <li key={2} className='nav-bar__item'>
            <a href="/">Депозиты</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
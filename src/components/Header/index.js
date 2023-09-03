import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const onToggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className="navbar">
      <button type="button" onClick={onToggleMenu} className="hamburger-icon">
        <GiHamburgerMenu />
      </button>
      <ul className={`nav-list-container ${isNavOpen ? 'open' : ''}`}>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Schedules</li>
        <li className="nav-item">Membership</li>
        <li className="nav-item">Pricing</li>
      </ul>
      <div className="offers-courses-container">
        <p className="offer">Offers</p>
        <div className="courses-container">
          <p className="courses">Courses</p>
        </div>
      </div>
    </nav>
  )
}
export default Header

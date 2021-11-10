import '../styles/Header.css'
import { UilSearch, UilBars } from '@iconscout/react-unicons'
function Header() {
    return (
        <div className="header">
            <div className="headerMenu"><UilBars /></div>
            <div className="headerTitle pointer">
                BookPod<span className="headerDot">.</span>
            </div>
            <div className="headerMenu"><UilSearch /></div>
            <div className="headerCenter">
                <h3 className="headerCenterFont pointer">Home</h3>
                <h3 className="headerCenterFont pointer">Categories</h3>
                <h3 className="headerCenterFont pointer">Podcasts</h3>
            </div>
            <div className="">
                <input type="text" placeholder=" Search..." className="headerSearch" />
            </div>

        </div>
    )
}

export default Header

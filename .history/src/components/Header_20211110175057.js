import '../styles/Header.css'
import SearchIcon from './'
function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                BookPod<span className="headerDot">.</span>
            </div>
            <div className="headerCenter">
                <h3 className="headerCenterFont">Home</h3>
                <h3 className="headerCenterFont">Categories</h3>
                <h3 className="headerCenterFont">Podcasts</h3>
            </div>
            <div className="">
                <input type="text" placeholder='Search...' className="headerSearch" />
            </div>

        </div>
    )
}

export default Header

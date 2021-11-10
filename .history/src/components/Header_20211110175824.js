import '../styles/Header.css'
import SearchIcon from '../images/search.svg'
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
                <input type="text" placeholder="&#xF002; Search" style="font-family:Arial, FontAwesome" className=""/>
            </div>

        </div>
    )
}

export default Header

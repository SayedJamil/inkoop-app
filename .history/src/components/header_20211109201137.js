import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                BookPod<span className="headerDot">.</span>
            </div>
            <div className="headerCenter">
                <h3 className="headerCenter">Home</h3>
                <h3 className="headerCenter">Categories</h3>
                <h3 className="headerCenter">Podcasts</h3>
            </div>

        </div>
    )
}

export default Header

import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                BookPod<span className="headerDot">.</span>
            </div>
            <div className="headerCenter">
                <h3>Home</h3>
                <h1>Categories</h1>
                <h1>Podcasts</h1>
            </div>

        </div>
    )
}

export default Header

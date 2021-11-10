import '../styles/Featured.css'
import Avatar from './Avatar'

function Featured() {
    const people=[]
    return (
        <div className="featured">
            <h1 className="featuredTitle">
                Featured Writers
            </h1>
            <Avatar />
        </div>
    )
}

export default Featured

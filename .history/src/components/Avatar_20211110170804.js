import '../styles/Avatar.css'
import Image2 from '../images/inkoop-app_image2.jpg'
function Avatar(name, image) {
    return (
        <div className="avatar">
            <img src={image} alt="" className="avatarImage" />
            <h3 className="avatarName">{name}</h3>
        </div>
    )
}

export default Avatar

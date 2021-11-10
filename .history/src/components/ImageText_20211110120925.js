import '../styles/ImageText.css'
import Image01 from '../images/inkoop-app_image1.jpg'
function ImageText() {
    return (
        <div className="imageText">
            <div className="imageTextLeft">
                <image src={Image01} className="imageImage" />
            </div>
            <div className="imageTextRight">
            </div>
        </div>
    )
}

export default ImageText

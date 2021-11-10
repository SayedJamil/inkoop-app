import '../styles/ImageText.css'
import Image01 from '../images/inkoop-app_image1.jpg'
function ImageText() {
    return (
        <div className="imageText">
            <div className="imageTextLeft">
                <img src={Image01} className="imageImage" alt='' />
            </div>
            <div className="imageTextRight">
                <div className="imageTextBox">

                </div>
                <div className="imageTextIcons
                ">

                </div>
            </div>
        </div>
    )
}

export default ImageText

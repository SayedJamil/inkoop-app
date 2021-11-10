import '../styles/ImageText.css'
import Image01 from '../images/inkoop-app_image1.jpg'
import { UilTwitter, UilFacebook, UilInstagram, UilLinkedin } from '@iconscout/react-unicons'
function ImageText() {
    return (
        <div className="imageText">
            <div className="imageTextLeft">
                <img src={Image01} className="imageImage" alt='' />
            </div>
            <div className="imageTextRight">
                <div className="imageTextBox">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="imageTextIcons">
                    <UilTwitter />
                    <UilFacebook />
                    <UilInstagram />
                    <UilLinkedin />
                </div>
            </div>
        </div>
    )
}

export default ImageText

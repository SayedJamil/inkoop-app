import '../styles/Featured.css'
import Avatar from './Avatar'
import Image2 from '../images/inkoop-app_image2.jpg'
import Image3 from '../images/inkoop-app_image2.jpg'
import Image4 from '../images/inkoop-app_image2.jpg'
import Image5 from '../images/inkoop-app_image2.jpg'
import Image6 from '../images/inkoop-app_image2.jpg'
import Image7 from '../images/inkoop-app_image2.jpg'
import Image8 from '../images/inkoop-app_image2.jpg'
import Image2 from '../images/inkoop-app_image2.jpg'
function Featured() {
    const people = [
        {
            id: 1,
            name: 'ER Braithwait',
            image:{Image2},
        },
        {
            id: 2,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 3,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 4,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 5,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 6,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 7,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 8,
            name: 'ER Braithwait',
            image: { Image2 },
        },

    ];
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

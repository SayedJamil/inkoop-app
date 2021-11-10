import '../styles/Featured.css'
import Avatar from './Avatar'
import Image2 from '../images/inkoop-app_image2.jpg'
import Image3 from '../images/inkoop-app_image3.jpg'
import Image4 from '../images/inkoop-app_image4.jpg'
import Image5 from '../images/inkoop-app_image5.jpg'
import Image6 from '../images/inkoop-app_image6.jpg'
import Image7 from '../images/inkoop-app_image7.jpg'
import Image8 from '../images/inkoop-app_image8.jpg'
import Image9 from '../images/inkoop-app_image9.jpg'
function Featured() {
    const people = [
        {
            id: 1,
            name: 'ER Braithwaite',
            image:{Image2},
        },
        {
            id: 2,
            name: 'Andrea Levy',
            image: { Image3 },
        },
        {
            id: 3,
            name: 'Stephen King',
            image: { Image4 },
        },
        {
            id: 4,
            name: 'Jorge Amado',
            image: { Image5 },
        },
        {
            id: 5,
            name: 'Gayle Forman',
            image: { Image6 },
        },
        {
            id: 6,
            name: 'Shashi Tharoor',
            image: { Image7 },
        },
        {
            id: 7,
            name: 'J.K. Rowling',
            image: { Image8 },
        },
        {
            id: 8,
            name: 'John Green',
            image: { Image9 },
        },

    ];
    return (
        <div className="featured">
            <h1 className="featuredTitle">
                Featured Writers
            </h1>
            <Avatar name={ }/>
        </div>
    )
}

export default Featured

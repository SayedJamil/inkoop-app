import '../styles/Featured.css'
import Avatar from './Avatar'
import Image2 from '../images/inkoop-app_image2.jpg'
function Featured() {
    const people = [
        {
            id: 1,
            name: 'ER Braithwait',
            image:{Image2},
        },
        {
            id: 1,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 1,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 1,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 1,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 1,
            name: 'ER Braithwait',
            image: { Image2 },
        },
        {
            id: 1,
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

import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import './style/div1.css';

const cardData = [
    { id: 1, title: "Advanced typography design and Destraction design", price: "$9.99", imgSrc: "/src/components/assets/1.webp" },
    { id: 2, title: "Advanced typography design and Destraction design", price: "$6.99", imgSrc: "/src/components/assets/2.jpg" },
    { id: 3, title: "Advanced typography design and Destraction design", price: "$4.99", imgSrc: "/src/components/assets/3.jpg" },
    { id: 4, title: "Advanced typography design and Destraction design", price: "$7.99", imgSrc: "/src/components/assets/4.webp" },
    { id: 5, title: "Advanced typography design and Destraction design", price: "$6.49", imgSrc: "/src/components/assets/5.jpg" },
    { id: 6, title: "Advanced typography design and Destraction design", price: "$8.99", imgSrc: "/src/components/assets/6.jpg" } // New card added
];

export default function Courses() {
    const menuListRef = useRef(null);

    const scrollLeft = () => {
        menuListRef.current.scrollBy({
            left: -300, // Adjust this value based on the card width
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        menuListRef.current.scrollBy({
            left: 300, // Adjust this value based on the card width
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className='Menu'>
                <h1>Our Top Courses</h1>
                
                <div className='nav2'>
                    <ul>
                        <li><a href="#home">Graphic Desgin</a></li>
                        <li><a href="#about">Web Design</a></li>
                        <li><a href="#services">Digital Marketing</a></li>
                        <li><a href="#contact">Life Style</a></li>
                    </ul>
                </div>
            </div>
            <div className="Courses">
                <button className="scrollButton left" onClick={scrollLeft}><ArrowBackIcon /></button>
                <div className="MenuList" ref={menuListRef}>
                    {cardData.map(card => (
                        <MenuCards key={card.id} title={card.title} price={card.price} imgSrc={card.imgSrc} />
                    ))}
                </div>
                <button className="scrollButton right" onClick={scrollRight}><ArrowForwardIcon /></button>
            </div>
        </>
    );
}

function MenuCards({ title, price, imgSrc }) {
    return (
        <>
            <div className='menu'>

            </div>
            <div className="Card_Parent">
                <div className="child_1">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="child_2">
                    <h1>{title}</h1>
                    <h3>{price}</h3>
                    <hr className="divider" />
                    <div className="info">
                        <div className='DP'>MD</div>
                        <div className="chartIcons">
                            <StarIcon className="Add_chart-2" />
                            <p className="Add_chart">4.3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

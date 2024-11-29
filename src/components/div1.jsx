import { useRef, useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Star, MoreVert, MoreHoriz} from '@mui/icons-material';


import './style/div1.css';
import './style/div2.css';
import './style/div21.css';
import './style/div3.css';
import './style/div4.css';

const cardData = [
    { id: 1, title: "Advanced typography design and Destraction design", price: "$9.99", imgSrc: "/src/components/assets/1.webp" },
    { id: 2, title: "Advanced typography design and Destraction design", price: "$6.99", imgSrc: "/src/components/assets/2.jpg" },
    { id: 3, title: "Advanced typography design and Destraction design", price: "$4.99", imgSrc: "/src/components/assets/3.jpg" },
    { id: 4, title: "Advanced typography design and Destraction design", price: "$7.99", imgSrc: "/src/components/assets/4.webp" },
    { id: 5, title: "Advanced typography design and Destraction design", price: "$6.49", imgSrc: "/src/components/assets/5.jpg" },
    { id: 6, title: "Advanced typography design and Destraction design", price: "$8.99", imgSrc: "/src/components/assets/6.jpg" }
];

const commentData = [
    {
        profilePic: "/src/components/assets/pp1.webp",
        username: "JaneDoe",
        comment: "I love the courses here! They're so informative."
    },
    {
        profilePic: "/src/components/assets/pp1.webp",
        username: "JohnSmith",
        comment: "The instructors are top-notch and very helpful."
    },
    {
        profilePic: "/src/components/assets/pp1.webp",
        username: "AnnaTaylor",
        comment: "I learned so much from these courses."
    },
    {
        profilePic: "/src/components/assets/pp1.webp",
        username: "ChrisBrown",
        comment: "Highly recommend to anyone wanting to improve their skills."
    }
];

function CommentCard({ profilePic, username, comment }) {
    return (
        <div className="commentCard">
            <img src={profilePic} alt={`${username}'s profile`} className="profilePic" />
            <div className="textContainer">
                <h3 className="username">{username}</h3>
                <p className="comment">{comment}</p>
            </div>
        </div>
    );
}

function MenuCards({ title, price, imgSrc }) {
    return (
        <>
            <div className='menu'></div>
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
                            <Star className="Add_chart-2" />
                            <p className="Add_chart">4.3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Courses() {
    const menuListRef = useRef(null);

    const scrollLeft = () => {
        menuListRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        menuListRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    const [listMenu,setListMeun] = useState(false);
    const toggleList = () =>{
        setListMeun(!listMenu);
    } 

    return (
        <>
            <div className='Menu'>
                <div className='ICON'>
                    <h1>Our Top Courses</h1>
                    
                    {listMenu ? <MoreHoriz onClick={toggleList} className='horiz'/> : <MoreVert onClick={toggleList} className='vert'/> }
                    {
                        listMenu&&
                        <div className='dropDown'>
                            <ul>
                                <li><a href="#home">Graphic Design</a></li>
                                <li><a href="#about">Web Design</a></li>
                                <li><a href="#services">Digital Marketing</a></li>
                                <li><a href="#contact">Life Style</a></li>
                            </ul>
                        
                        </div>
                    }
                </div>
                <div className='nav2'>
                    <ul>
                        <li><a href="#home">Graphic Design</a></li>
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
            
            <div className='div2'>   
                <div className="image1">
                    <div className='lady'>
                        <img src="/src/components/assets/img1.avif" alt="Teacher training" className="img" />
                        <div className='text1'>
                            <div className='pp'></div>
                            <h4>Train Teacher</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.</p>
                        </div>
                    </div>
                </div>
                <div className='info1'>
                    <h3>Best Education platform</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim velit molestias nam doloremque reiciendis debitis! Esse doloribus itaque quasi perferendis libero ipsa iure minus fugit sequi ducimus! Labore, corrupti?</p>
                    <button>Read More</button>
                </div>
            </div> 
            <div className="div21">   
                <div className="info2">
                    <h3>Best Education platform</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam blanditiis quia, vero laboriosam voluptatum neque ullam sint repellat mollitia odio a eius expedita repellendus voluptates ipsum? Aliquam, consequatur alias.</p>                        
                    <button>Read More</button>
                </div>
                <div className="image2">
                    <div className='gent'>
                        <img src="/src/components/assets/gent.png" alt="Teacher training" className='img' />
                    </div>
                   
                    <div className="text2">
                        <div className='Pp'><img src="/src/components/assets/pp1.webp" alt="" /></div>
                        <h1>8K+</h1>
                        <p>Teachers</p>
                    </div>
                </div>
            </div>

            <div className='div3'>
                <div className='heading'>
                    <h2>What Our students</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ab aliquid ad molestias nulla modi eius possimus voluptates ipsa odit.</p>
                </div>
                  
                <div className='comment_cards'>
                    {commentData.map((comment, index) => (
                        <CommentCard
                        key={index}
                        profilePic={comment.profilePic}
                        username={comment.username}
                        comment={comment.comment}
                        />
                    ))}
                    
                </div>
            </div>

            <div className='div4'>
                <div className='text3'>
                    <h2>Get ready to learn and grow your skills</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptatem tenetur ipsum aut provident odio?</p>
                    <button>Get started Now</button>
                </div>
                <div className='last_img'>
                    <img src="/src/components/assets/888.jpg" alt="Learn and grow" />
                </div>
            </div>
        </>
    );
}

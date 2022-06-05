import React from 'react'
import ProfileSide from '../../components/profile/ProfileSide.jsx';
import "./Home.css"

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide/>
            <div className="postSide">post</div>
            <div className="RightSide">Right</div>
        </div>
    )
}

export default Home;
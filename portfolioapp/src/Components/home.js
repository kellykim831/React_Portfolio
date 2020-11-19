import React from 'react';

const Home = ({ name, paragraph, authorImage }) => {

    return (
        <div>
            <div className="home_container stretch">
                <div className="home_head_wrapper">
                    < h1 > Welcome to my page! <br></br> 
                    <br></br><span>{name}</span></h1>
                  
                    <p>{paragraph}</p>
                </div>
                <div className="image_container">
                    <img src={authorImage} alt="Kelly Kim"></img>
                    <div className="bg"></div>
                </div>

            </div>
        </div>
    )
}

export default Home;
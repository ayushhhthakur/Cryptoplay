import React from 'react'
import styled from "styled-components";
import ayushthakur from '../assets/creators/ayushthakur.jpg'
import eshasuri from '../assets/creators/eshasuri.jpg'
import garimasaigal from '../assets/creators/garimasaigal.jpg'
import manavjamwal from '../assets/creators/manavjamwal.jpg'

const TheCreators = () => {
    return (
        <Wrapper>
            <section id="creators">
            <div className="heading">
                <h1>Meet The <span>Creators</span></h1>
            </div>
            <div className="creators-profile">
                <figure>
                    <a target="_blank" href="https://github.com/ayushhhthakur">
                        <img src={ayushthakur} alt="Ayush Thakur" />
                    </a>
                    <figcaption><a target="_blank" href="https://github.com/ayushhhthakur">Ayush Thakur</a></figcaption>
                </figure>
                <figure><a target="_blank" href="">
                    <img src={eshasuri} alt="Esha Suri" />
                </a>
                    <figcaption><a target="_blank" href="">Esha Suri</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="">
                        <img src={garimasaigal} alt="Garima Saigal" />
                    </a>
                    <figcaption><a target="_blank" href="">Garima Saigal</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="https://github.com/jamwal69">
                        <img src={manavjamwal} alt="Manav Jamwal" />
                    </a>
                    <figcaption><a target="_blank" href="https://github.com/jamwal69">Manav Jamwal</a></figcaption>
                </figure>
            </div>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.section`
#creators {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
}

.heading {
    margin-bottom: 20px;
}

.heading h1 {
    font-size: 36px;
    font-weight: bold;
}

#creators {
    padding: 40px;
    text-align: center;
}

#creators .heading h1 {
    font-size: 36px;
    margin-bottom: 40px;
}

#creators .creators-profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#creators .creators-profile figure {
    margin: 10px;
    position: relative;
}

#creators .creators-profile figure img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #333;
    transition: all 0.3s ease;
}

#creators .creators-profile figure figcaption {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

#creators .creators-profile a {
    text-decoration: none;
    color: black;
}

#creators .creators-profile a:hover {
    color: gray;
}

#creators .creators-profile figure img:hover {
    width: 250px;
    height: 250px;
    border: 4px solid black;
    z-index: 1;
    cursor: pointer;
}
`;
export default TheCreators
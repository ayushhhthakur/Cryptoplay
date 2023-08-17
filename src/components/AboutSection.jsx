import React from 'react'
import styled from "styled-components";
import react from '../assets/tech/react-logo.png'
import solidity from '../assets/tech/solidity-logo.png'
import tezos from '../assets/tech/tezos-logo.png'
import smartpy from '../assets/tech/smartpy-logo.png'
import nodejs from '../assets/tech/nodejs-logo.png'


const AboutSection = () => {
    return (
        <Wrapper>
            <div className="about">
                <div className="heading">
                    <h1>About <span>Crypto Play</span></h1>
                </div>
                <div className="tech">
                    <a target="_blank" href="https://react.dev/">
                        <img src={react} alt="react-img-logo" />
                    </a>
                    <a target="_blank" href="https://soliditylang.org/">
                        <img src={solidity} alt="solidity-img-logo" />
                    </a>
                    <a target="_blank" href="https://tezos.com/">
                        <img src={tezos} alt="tezos-img-logo" />
                    </a>
                    <a target="_blank" href="https://smartpy.io/">
                        <img src={smartpy} alt="smartpy-img-logo" />
                    </a>
                    <a target="_blank" href="https://nodejs.org/en">
                        <img src={nodejs} alt="nodejs-img-logo" />
                    </a>
                    <div className="aboutTech">
                        <h2>The CryptoPlay</h2>
                        <p>Crypto Play is a fantasy game built on tezos blockchain Technology.</p>
                        <div className="list-box">
                            <ul>
                                <li>Is a Decentrilized Platform</li>
                                <li>Is More Secure</li>
                                <li>Can Deposit & Widwarl rewards in Crypto</li>
                                <li>Win amazing rewards like NTF's</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
.about {
    text-align: center;
    padding: 20px;
}

.heading {
    margin-bottom: 20px;
}

.heading h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.tech {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.tech img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease;
    margin: 30px;
}

.tech img:hover {
    border-color: black;
}

.aboutTech {
    text-align: center;
    padding: 20px;
}

.aboutTech h2 {
    font-size: 36px;
    margin-top: 50px;
    margin-bottom: 20px;
}

.aboutTech p {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.list-box {
    text-align: center;
}

.list-box ul {
    list-style-type: disc;
    display: inline-block;
    text-align: left;
    padding-left: 0;
}

.list-box li {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 5px;
}
`;

export default AboutSection
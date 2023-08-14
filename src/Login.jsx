import React from 'react'
import styled from "styled-components";
import { Button } from "./styles/Button";
// import { Link } from 'react-router-dom';

const Wrapper = styled.section`
.content h1 {
  font-size: 2rem;
  line-height: 30px;
  margin-top: 20px;
}

.btn-position,
.content {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.content h1 a {
  text-decoration: underline;
}
`

const Login = () => {
  return (
    <Wrapper>
      <div className="content">
        <h2>Connect your Tezos Wallet</h2>
        <h1>Don't have a wallet?<br />Click <a target="_blank" href="https://tezos.com/create-wallet/" style={{color: 'black'}}>Here.</a></h1>
        {/* <h1>Click <Link to="https://tezos.com/create-wallet/">Here</Link></h1> */}
      </div>
      <div className="btn-position">
        <Button>
          Connect Walet
        </Button>
      </div>
    </Wrapper>
  )
}

export default Login
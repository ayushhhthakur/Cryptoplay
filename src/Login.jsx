import React from 'react'
import styled from "styled-components";
import { Button } from "./styles/Button";
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
.content h1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 30px;
  margin-top: 20px;
}

.btn-position,
.content {
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.content h1 a {
  text-decoration: underline;
}
.content-bottom h1 {
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
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
        {/* <NavLink onClick> */}
        <Button className='btn'>
          Connect Walet
        </Button>
        {/* </NavLink> */}
      </div>
      <div className="content-bottom">
        <h1>Currenty only Tezos Temple Wallet is supported.<br />More Wallets will be added soon.<br />For more Information<br />Please Check our <Link to="/docs" style={{color: 'black', textDecoration: 'underline'}}>Documentation.</Link></h1>
      </div>
    </Wrapper>
  )
}

export default Login
import React from 'react'
import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
        <img src='/spectacle.png' alt='' />
        <Title>
                <span>SPECTACLE</span>
        </Title>
        <img src='/spectacle.png' alt='' />
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    display: flex;
    background-color: #B28F74;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    letter-spacing: 16px;
    z-index: 3;
    font-size: 20px;

    img {
       width: 60px;
    }
`;

const Logo = styled.div`
    img {
        padding: 0;
        width: 80px;
        max-height: 60px !important;
        object-fit: contain;
        font-size: 0;
        display: inline-block;
        cursor: pointer;
    }
    
`;

const Title = styled.div`
    border: 1px;
    border-style: solid;
    padding-left: 10px;
    border-radius: 4px;
    &: hover {
        background-color: #4D301A;
        color: #FFFFFF;
        border-color: transparent;
    }
`;
export default Header
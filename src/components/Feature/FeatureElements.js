import styled from 'styled-components';
import ImgBg from '../../images/Product4.jpg';

export const FeatureContainer = styled.div`
background : linear-gradient(to right, rgba(1, 0, 1, 0), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    height: 100vh;
    max-height:700px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
        &:hover{
        color: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
    }
    h2{
        font-size: clamp(1rem, 2vw, 3rem);
        margin-bottom: 3rem;
        &:hover{
        color: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

    }
`

export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 1rem  4rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover{
        color: #fff;
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

`

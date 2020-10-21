import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    display:block;
    width:100%;
    padding-top: ${props => props.paddingTop ? props.paddingTop + "px" : "60px"};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom + "px" : "30px"};
    background-color: ${props => props.color ? props.color  : '#fffffe'};

    @media only screen and (max-width: 450px) {
        padding-top:30px;
        padding-bottom:30px;
    }
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction:${props => props.direction ? props.direction : "row"};
    width:70%;
    margin:auto;
    ${props => props.justify ? 
        `justify-content:${props.justify};` :
        ``
    }

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        width:90%;
    } 
`;

const Container = (props) => {
    return(
        <Background 
            color={props.color} 
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
        >
            <Wrapper className="container" direction={props.direction} justify={props.justify}>
                {props.children}
            </Wrapper>
        </Background>
    );
}

export default Container;
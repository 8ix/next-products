import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width:40%;
    display:inline-block;
    background-color:transparent;
    border: 3px solid #272343;
    margin:40px 0;
    padding:8px 20px;
    font-weight: 700;
    cursor:pointer;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration:none;
    text-align:center;
    margin:20px auto;

    &:hover{
        background-color:#ffd803;
    }
`;

const Button = (props) => {
        return(
            <StyledButton {...props}>
                    {props.children}
            </StyledButton>
        );
}

export default Button;
import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    width: ${props => props.width ? props.width : '45'}%;
    flew-grow: ${props => props.grow ? props.grow : '1'}%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: ${props => props.inverted ? "#fffffe" : "#272343"};
    margin-right:3%;
    margin-bottom:20px;
    padding:20px;

    ${props => props.inverted ?
        `-webkit-box-shadow: 3px 6px 11px 8px rgba(0,0,0,0.10);
        -moz-box-shadow: 3px 6px 11px 8px rgba(0,0,0,0.10);
        box-shadow: 3px 6px 11px 8px rgba(0,0,0,0.10);`
        : ''
    }

    h3,h4,h5{
        font-size:1.2em;
        color: ${props => props.inverted ? "#272343" : "#fffffe"};
        padding-bottom:20px;
    }

    p,ul,li{
        font-size:1em;
        color: ${props => props.inverted ? "#272343" : "#fffffe"};
        padding-bottom:20px;
    }
`;

const Block = (props) => {
    return(
        <StyledBlock {...props}>
            {props.children}
        </StyledBlock>
    );
}

export default Block;
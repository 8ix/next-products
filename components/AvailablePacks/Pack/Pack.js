import React from 'react';
import styled from 'styled-components';

const StyledPack = styled.div`
   display:flex;
   flex-direction:row;
   margin:auto;
   text-align:center;
   font-size:1.5rem;
   border:4px solid #000;
   border-radius:20px;
   margin-top:20px;
   margin-bottom:20px;
   overflow:hidden;
   padding-left:10px;
`;

const Remove = styled.button`
    background-color:red;
    color:#fff;
    font-size:1rem;
    margin-left:10px;
    border:0;
    height:100%;
    padding-right:20px;
    margin-right:-10px;

    @media only screen and (max-width: 850px) {
        height:37px;
    }
`;

const Pack = (props) => {

    return (
        <StyledPack>
            <span>{props.size}</span>
            <Remove onClick={() => props.removePack(props.size)}>
                Remove
            </Remove>
        </StyledPack>
    );
}

export default Pack;
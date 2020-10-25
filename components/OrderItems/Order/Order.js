import React from 'react';
import styled from 'styled-components';

const StyledOrder = styled.div`
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
   padding-right:15px;
`;

const Qty = styled.button`
    background-color:blue;
    color:#fff;
    font-size:1rem;
    margin-right:10px;
    border:0;
    height:100%;
    padding-left:20px;
    margin-left:-10px;

    @media only screen and (max-width: 850px) {
        height:37px;
    }
`;

const Order = (props) => {

    return (
        <StyledOrder>
            <Qty>
                {props.qty} x
            </Qty>
            <span>{props.size}</span>
        </StyledOrder>
    );
}

export default Order;
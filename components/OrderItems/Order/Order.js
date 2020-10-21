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
   padding-left:10px;
`;

const Qty = styled.button`
    background-color:blue;
    color:#fff;
    font-size:1rem;
    margin-left:10px;
    border:0;
`;

const Order = (props) => {

    return (
        <StyledOrder>
            <span>{props.size}</span>
            <Qty>
                x {props.qty}
            </Qty>
        </StyledOrder>
    );
}

export default Order;
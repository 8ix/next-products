import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import Order from './Order/Order';

const Title = styled.h1`
   margin:auto;
   text-align:center;
   font-size:2rem;
`;

const TextInput = styled.input`
    display:flex;
    flex:column;
    width:40%;
    margin:auto;
    text-align:center;
`;

const StyledButton = styled.button`
    width:40%;
    margin:auto;
    border-top:0;
`;

const Orders = styled.div`
    display:flex;
    flex-direction:row;
`;

const OrderItems = (props) => {

    return (
        <Container direction="column">
            <Title>
                Items to Order
            </Title>
            <TextInput type="number" placeholder="Items Required" />
            <Button>Calculate Order</Button>

            <Orders>
                <Order size={250} qty={2} />
                <Order size={500} qty={1} />
                <Order size={2000} qty={3} />
            </Orders>
        </Container>
    );
}

export default OrderItems;
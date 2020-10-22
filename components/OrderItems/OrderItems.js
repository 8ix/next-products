import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import Order from './Order/Order';
import Spinner from '../UI/Spinner/Spinner';

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

const Message = styled.p`
    text-align:center;
`;

const OrderItems = (props) => {

    let title = "";
    let order = "";
    let spinner = "";

    const items = props.order.map(function(pack){
        return <Order size={pack.size} qty={pack.qty} />
    })

    if(items.length > 0){
        title= <Message>Packs Required to fulfil the order</Message>
        order = <Orders>{items}</Orders>
    }

    if(props.loading){
       spinner = <Spinner />
    }

    return (
        <Container direction="column">
            <Title>
                Items to Order
            </Title>
            <TextInput type="number" name="orderItems" placeholder="Items Required" />
            <Button onClick={() => props.calculateOrder("orderItems")}>Calculate Order</Button>
            {spinner}
            {title}
            {order}
        </Container>
    );
}

export default OrderItems;
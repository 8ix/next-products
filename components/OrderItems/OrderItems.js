import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import Order from './Order/Order';
import Spinner from '../UI/Spinner/Spinner';
import { chunk } from '../../lib/common';

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
    flex-direction:column;
`;

const Message = styled.p`
    text-align:center;
`;

const Row = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }
`;

const OrderItems = (props) => {

    let title = "";
    let order = "";
    let spinner = "";
    let list = [];

    let items = props.order.map(function(pack){
        return <Order size={pack.size} qty={pack.qty} />
    })

    items = chunk(items,4);

    for (let i = 0; i < items.length; i++) {
        list.push(<Row key={"row_"+i}>{items[i]}</Row>);
    }

    if(list.length > 0){
        title= <Message>Packs Required to fulfil the order</Message>
        order = <Orders>{list}</Orders>
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
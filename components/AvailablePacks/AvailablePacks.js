import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container/Container';
import Pack from './Pack/Pack';
import Button from '../UI/Button/Button';

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

const Packs = styled.div`
    display:flex;
    flex-direction:row;
`;


const AvailablePacks = (props) => {

    return (
        <Container direction="column">
            <Title>
                Available Pack Sizes
            </Title>

            <Packs>
                <Pack size={250} />
                <Pack size={500} />
                <Pack size={1000} />
                <Pack size={2000}/>
                <Pack size={5000} />
            </Packs>

            <TextInput type="text" name="packsize" placeholder="Pack Size" />
            <Button>Add New Pack Size</Button>
        </Container>
    );
}

export default AvailablePacks;
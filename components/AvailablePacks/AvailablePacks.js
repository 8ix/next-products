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

    const packs = props.packs.map(function(pack){
        return <Pack key={'key-'+pack} size={pack} removePack={props.removePack} />
    });

    return (
        <Container direction="column">
            <Title>
                Available Pack Sizes
            </Title>

            <Packs>
                {packs}
            </Packs>

            <TextInput type="number" name="packsize" placeholder="Pack Size" />
            <Button onClick={() => props.addPack("packsize")}>Add New Pack Size</Button>
        </Container>
    );
}

export default AvailablePacks;
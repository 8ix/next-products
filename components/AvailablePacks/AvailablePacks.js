import React from 'react';
import styled from 'styled-components';
import { chunk } from '../../lib/common';

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
    flex-direction:column;
`;

const Row = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }
`;


const AvailablePacks = (props) => {

    let list = [];

    let packs = props.packs.map(function(pack){
        return <Pack key={'key-'+pack} size={pack} removePack={props.removePack} />
    });

    packs = chunk(packs,4);

    for (let i = 0; i < packs.length; i++) {
        list.push(<Row key={"row_"+i}>{packs[i]}</Row>);
    }

    return (
        <Container direction="column">
            <Title>
                Available Pack Sizes
            </Title>

            <Packs>
                {list}
            </Packs>

            <TextInput type="number" name="packsize" placeholder="Pack Size" />
            <Button onClick={() => props.addPack("packsize")}>Add New Pack Size</Button>
        </Container>
    );
}

export default AvailablePacks;
import React, { Component } from 'react';

import PageWrapper from '../UI/PageWrapper/PageWrapper';
import OrderItems from '../OrderItems/OrderItems';
import AvailablePacks from '../AvailablePacks/AvailablePacks';

class App extends Component {

    state = {
        packSizes: [
            250,
            500,
            1000,
            2000,
            5000
        ]
    }
    
    addPackSize(size){
        const newPackSize = parseInt(document.getElementsByName(size)[0].value);

        let packs = [...this.state.packSizes]
            .filter(function(item){ return item != newPackSize });
        
        packs.push(newPackSize)
        packs.sort((a,b)=>a-b);

        if(newPackSize > 0){
            this.setState({
                packSizes: packs
            });
        }
    }

    removePackSize(size){
        const packSizes = [...this.state.packSizes];
        this.setState({
            packSizes: packSizes.filter(function(item){ return item != size })
        });
    }

    render(){
        return(
            <PageWrapper>
                <OrderItems />
                <AvailablePacks 
                    packs={this.state.packSizes} 
                    addPack={this.addPackSize.bind(this)}
                    removePack={this.removePackSize.bind(this)}
                />
            </PageWrapper>
        );
    }
}

export default App;
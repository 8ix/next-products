import React, { Component } from 'react';

import PageWrapper from '../UI/PageWrapper/PageWrapper';
import OrderItems from '../OrderItems/OrderItems';
import AvailablePacks from '../AvailablePacks/AvailablePacks';
import axios from 'axios';

class App extends Component {

    state = {
        order:[],
        packSizes: [
            250,
            500,
            1000,
            2000,
            5000
        ],
        loading:false
    }

    calculateOrder(items){
        const itemsToOrder = parseInt(document.getElementsByName(items)[0].value);
        const packSizes = [...this.state.packSizes];
        this.setState({order:[],loading:true});

        if(itemsToOrder > 0){
            axios({
                method: 'get',
                url: 'https://ua0g88sr31.execute-api.us-east-1.amazonaws.com/dev?items='+itemsToOrder+'&packs='+packSizes.join(',')
              }).then((response) => {
                this.setState({order:response.data,loading:false});
              }, (error) => {
                console.log(error);
              });
        }else{
            this.setState({order:[],loading:true});
        }   
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
                <OrderItems
                    loading={this.state.loading}
                    order={this.state.order}
                    calculateOrder={this.calculateOrder.bind(this)}
                />
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
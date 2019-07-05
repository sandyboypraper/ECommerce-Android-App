import React,{Component} from 'react';

import {Box , Text} from 'react-native-design-utility';

import AddressForm from '../Components/AddresssForm';

class Addaddress extends Component{
    render(){
        return(
            <Box f={1}>
            <AddressForm navigation={this.props.navigation} save={this.save} />
          </Box>
        )
    }
}

export default Addaddress; 
import React , {Component} from 'react'
import {Box , Text} from 'react-native-design-utility'

import {Icon} from 'react-native-elements'; 
import {TouchableOpacity , Dimensions} from 'react-native';
import NavigationService from '../api/NavigationService';


import AddressCard from '../Components/AddressCard';
const {width : WIDTH} = Dimensions.get('window');

class Address extends Component{

    constructor(props){
        super(props);
        this.state = {
            no : 1,
        }
    }

    handlePress = () => {
        NavigationService.navigate('Addaddress');
    }

    render(){


        // if(this.state.no == 1){
        //     return(
        //         <Box f={1} center>
        //            <Icon
        //             name='location'
        //             type='evilicon'
        //             color='black'
        //             size = {150}
        //              />
        //             <Text bold color="black" size = {20} mt={20}>Add address</Text>
        //             <Text  color="greyLighter" size = {15}>you haven't added an address yet</Text>
        //             <Box w = {WIDTH - 50} mt = {20}>
        //             <TouchableOpacity onPress = {this.handlePress}>
        //                 <Box bg="green" center p = {10} radius = {10}>
        //                 <Text color = "white">Add address</Text>
        //                 </Box>
        //             </TouchableOpacity>
        //             </Box>
        //         </Box>
        //     )
        // }


        return(

            <Box f = {1} bg = "greyLightest" align = "center">
               <AddressCard/>
            </Box>
        )
    }
}

export default Address;
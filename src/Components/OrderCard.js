import React , {Componet, Component} from 'react';

import {Image , Dimensions , TouchableOpacity , StyleSheet , Alert} from 'react-native'
import {Box , Text} from 'react-native-design-utility';
import { PricingCard } from 'react-native-elements';
import NavigationService from '../api/NavigationService';
const {width : WIDTH} = Dimensions.get('window');

class OrderCard extends Component{


    goToOrderDetails = () => {
        NavigationService.navigate('OrderDetails' , {order_id : this.props.order_id});
    }
    

    render(){
    
        const {order_id , price ,date} = this.props;

        return(
        // <Box bg="white" position = "relative" w = {WIDTH/1.05} h = {100} mt = {10} radius = {10}>
        //     <TouchableOpacity onPress = {this.goToOrderDetails} style = {styles.Parent}>
        //     <Box bg = "" f = {1} dir = "row">
        //         <Box mb = "sm" f = {1} style = {styles.item} h = {80}>
        //             <Image
        //             style = {styles.imag}
        //             resizeMode = "contain"
        //             source = {img} />
        //         </Box>
        

        //         <Box bg = "" f={2} mt = {10} ml = {10}>
        //            <Text left bold size = "xs">{order_id}</Text>
        //             <Text left size="sm" color = "green"><Text color="green">{'\u20A8'}</Text>{price}</Text>
        //         </Box>
        //     </Box>
        //     </TouchableOpacity>
        // </Box>


            <PricingCard
            color="#4f9deb"
            title={date}
            price={'\u20A8' + price}
            info={['Successfull order', order_id]}
            button={{ title: ' More Details', icon: 'info' }}
            onButtonPress = {this.goToOrderDetails}
            />
        )
    }
}

const styles = StyleSheet.create({
    Parent : {
        flex : 1,
        flexDirection: 'row',
        height: 100
    },
    imag : {
        flex: 1,
        width: 200,
        resizeMode : "contain",
    },
    item : {
		overflow: 'hidden',
		alignItems: 'center',
		backgroundColor: "#90caf9",
        position: 'relative',
        borderRadius : 10,
		margin: 10
    }
})

export default OrderCard;
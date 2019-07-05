import React , {Componet, Component} from 'react';

import {Image , Dimensions , TouchableOpacity , StyleSheet , Alert} from 'react-native'
import {Box , Text} from 'react-native-design-utility';
const {width : WIDTH} = Dimensions.get('window');

class AddressCard extends Component{


    goToOrderDetails = () => {
        console.log("clicked");
        Alert.alert("hruurur");
    }
    

    render(){

        const img = require('../../assets/img/p4.jpg');
        return(
            <Box bg="white" position = "relative" w = {WIDTH/1.05} mt = {10} radius = {10} style={styles.flexHeight}>
            <TouchableOpacity onPress = {this.goToOrderDetails} style = {styles.Parent}>
            <Box bg = "" f = {1} dir = "row">
                <Box bg = "" f={2} mt = {10} ml = {10}>
                   <Text left bold size = "xs">yes</Text>
                    <Text left size="sm" color = "green"><Text color="green">{'\u20A8'}</Text>yes</Text>
                    <Text left size="xs" color = "greyLight"><Text color="greyLight">{'\u20A8'}</Text>yes</Text>
                </Box>
            </Box>
            </TouchableOpacity>
        </Box>
        )
    }
}

const styles = StyleSheet.create({
    Parent : {
        flex : 1,
        flexDirection: 'row',
        height: 100
    },
    flexHeight:{
        height: "auto",
    }
})

export default AddressCard;
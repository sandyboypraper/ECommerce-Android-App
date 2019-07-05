import React , {Component} from 'react'
import {Image , TouchableOpacity , StyleSheet} from 'react-native';

import {Box} from 'react-native-design-utility';
import {images} from '../constraints/images';

import NavigationService from '../api/NavigationService';
import {connect} from 'react-redux';
import {Badge , Icon} from 'react-native-elements';
// import console = require('console');

class ShopingCartIcon extends Component{
   
    handlePress = () => {
        NavigationService.navigate('ShoppingCart');
    }
    
    render(){

        // const total = this.props.total;
        console.log(this.props);
        return(
            <TouchableOpacity onPress = {this.handlePress} style = {styles.btn}>
            <Box>
                <Box f={1} mr = {16} mb = {16} bg = "black">
                <Icon
                name='shopping-bag'
                type='font-awesome'
                color='grey'
                style = {styles.btn}
               />
                <Badge
                    value={String(this.props.total)}
                    containerStyle={{ position: 'absolute', top: -15, right: -4}}
                    textStyle = {{color : "white"}}
                    badgeStyle = {{backgroundColor : "orange"}}
                />   
            </Box>
            </Box>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn :{
        flex : 1,
        marginTop : 12,
    }
})

function mapstateToProps(state) {
    return {
        total : state.total,
    }
}


export default connect(mapstateToProps)(ShopingCartIcon)
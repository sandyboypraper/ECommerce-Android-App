import React , {Component} from 'react'
import {Box , Text} from 'react-native-design-utility';
import {Products} from '../constraints/images';
import {Icon} from 'react-native-elements';
import {Image , StyleSheet , TouchableOpacity} from 'react-native';


import {removeFromCart} from '../actions/index';


import {connect} from 'react-redux';

class CartItem extends Component{

    state = {
        isTrashed : false,
        opacity : 1,
    }


    handleTrashPress = () => {

        this.setState({
            isTrashed : true,
            opacity : 0.5
        })
 
        if(!this.state.isTrashed){
            settimeoutId = setTimeout(() => {
                this.props.removeFromCart(this.props.product["id"]);
            }, 100);
    
        }       
    }

    render()
    {

        const {product} = this.props;

        const img = product["imagelink"];

        return(
            <Box position = "relative">
            <Box dir = "row" mb = {0.1} bg = "white" o = {this.state.opacity}>
                <Box style = {styles.item} h={90} radius = {10}>
                    <Image 
                    source = {{uri : img}} 
                    style = {styles.imag}
                    />
                </Box>
                <Box f = {1.5} justify = "start" mt = {13}>
                    <Text bold capitalizeEach>{product["itemName"]}</Text>
                    <Text capitalizeEach size = "tabsm" color = "greyDark">{product["sellerName"]}</Text>
                    <Text capitalizeEach size="sm"  color = "green"><Text color="green">{'\u20A8'}</Text> {product["Price"]}</Text>                    
                </Box>
                <Box f={1.5} align="end" justify = "start" mt = {13} mr = {10}>
                <Text bold capitalizeEach><Text bold color = "blue">#</Text>{product["qty"]}</Text>
                
                <TouchableOpacity onPress = {this.handleTrashPress}>
                    <Box mt = {10} mr = {5}>

                    {!this.state.isTrashed 
                    ?  <Icon
					name='trash'
					type='feather'
					color='green'
                    size = {20}
					/>
                    :
                    <Icon
					name='trash-2'
					type='feather'
					color='red'
                    size = {20}/>
                    }
                    
                    </Box>
                </TouchableOpacity>
                </Box>
            </Box>
            </Box>
        );
    }
}

const styles = StyleSheet.create({
    imag : {
        flex: 1,
        width: 200,
        resizeMode : "contain"
        },
        item: {
            flex: 1.2,
            overflow: 'hidden',
            alignItems: 'center',
            backgroundColor: "white",
            position: 'relative',
            margin: 10
          },
})

function mapStateToProps(){
    return {

    }
}

export default connect(mapStateToProps , {removeFromCart})(CartItem);
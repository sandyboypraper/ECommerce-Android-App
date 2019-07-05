import React,{Component} from 'react'
import {Box , Text} from 'react-native-design-utility';
import {Products} from '../constraints/images'

import {Image , StyleSheet , TouchableOpacity , Dimensions , TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {theme} from '../constraints/theme';

import {ShopingCartItemIncrement , ShopingCartItemDecrement} from '../actions/index';

import {connect} from 'react-redux';


const {width : WIDTH} = Dimensions.get('window');
class ProductCard extends Component{

    state = {
        isHover: false,
        opacity: 1,
    };

    handlePlusPress = () => {
        this.setState({isHover : true , opacity: 0.5});
    };

    handleTrashPress = () => {
        this.setState({isHover : false, opacity : 1});
    }

    // w={WIDTH - 20}
    render(){

        const { isHover } = this.state;

        const {serverLink} = this.props;
        const item = this.props;

        var itemForState = {};
        itemForState["id"] = item["item_id"];
        itemForState["sellerid"] = this.props.sellerid;
        // itemForState["sellerName"] = item["sellerName"];
        itemForState["sellerName"] = this.props.sellername;
        itemForState["Price"] = item["Price"];
        itemForState["itemName"] = item["item_name"];
        itemForState["Previous_Price"] = item["Previous_Price"];
        itemForState["qty"] = 0

        const image1 = serverLink + item["image"];
        // var itemForState = 2;

        itemForState["imagelink"] = image1;

        return(
            <Box bg="white" position = "relative" w = {WIDTH/1.05} h = {100}>
                <TouchableWithoutFeedback onPress = {this.handleTrashPress}>
                <Box o = {this.state.opacity} bg = "" f = {1} dir = "row">
                    <Box mb = "sm" f = {1} style = {styles.item} h = {80}>
                        <Image
                        style = {styles.img}
                        resizeMode = "contain"
                        source = {{uri : image1}} />
                    </Box>
            

                    <Box bg = "" f={2} mt = {10} ml = {10}>
                       <Text left bold size = "xs">{item["item_name"]}</Text>
                        <Text left size="sm" color = "green"><Text color="green">{'\u20A8'}</Text>{item["Price"]}</Text>
                        <Text deco = "through" left size={10} color = "greyLight"><Text size = {10} color="greyLight">{'\u20A8'}</Text>{item["Previous_Price"]}</Text>
                        <Text left size={10} color = "orange"><Text size = {10} color="greyLight">Available</Text> {item["count"]}</Text>
                    </Box>
                </Box>
                </TouchableWithoutFeedback>



                {!isHover && (
                <TouchableOpacity onPress={this.handlePlusPress} style={styles.plusBtn}>
                <Box circle = {25} style = {{borderColor : theme.color.green , borderWidth : 1}} center>
                           
                           {this.props.qty > 0 && (
                               <Text size = "sm" color = "green">{this.props.qty}</Text>
                           )}
                           {this.props.qty == 0 && (
                            <Icon
                                name='plus'
                                size = {15}
                                type='feather'
                                color='green'
                            />
                           )}
                            
                </Box>
                </TouchableOpacity>
                )}


                {isHover && (
                    <Box position = "absolute" style = {{top:12 , right:10 , zIndex:99}} shadow = {0} bg = "greyLightest" w = "50%" radius = {6}>
                        <Box dir ="row" align = "center" justify="between" p = "xs">
                        {this.props.qty > 0 && (
                                 <Icon
                                 onPress = {() => this.props.ShopingCartItemDecrement(itemForState)}
                                 name = "minus"
                                 size = {15}
                                 type='feather'
                                 color='green'
                             />
                            )}
                           {this.props.qty == 0 && (
                            <Icon
                                onPress = {this.handleTrashPress}
                                name='trash-2'
                                size = {15}
                                type='feather'
                                color='green'
                            />
                         )}
                            <Text>{this.props.qty}</Text>
                           
                            
                                <Icon
                                onPress = {() => this.props.ShopingCartItemIncrement(itemForState)}
                                name = "plus"
                                size = {15}
                                type='feather'
                                color='green'
                                />
                           
                        </Box>
                    </Box>
                )}

            </Box>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        flex: 1,
        width: 200,
        resizeMode : "contain",
    },
    plusBtn:{
        top:10,
        right:10,
        position : "absolute",
    },
    item : {
        flex: 1,
		overflow: 'hidden',
		alignItems: 'center',
		backgroundColor: "white",
        position: 'relative',
        borderRadius : 10,
		margin: 10
    }
})

function mapStateToProps(state , ownProps){

    var id = ownProps["item_id"];

    // console.log(id);
    

    var cItems = state.cartItems;
    // console.log(cItems);
    var cartItem = {};

    var qtyy = 0;

    // console.log(id + "    " + )

    for(var i = 0;i<cItems.length;i++)
    {
        // console.log(id + "    " + cItems[i]["id"]);
        if(cItems[i]["id"] == id)
        {
            // console.log("mila");
            cartItem["id"] = cItems[i]["id"];
            cartItem["sellerid"] = cItems[i]["sellerid"];
            cartItem["qty"] = cItems[i]["qty"];
            break;
        }
    }

    if(cartItem["qty"] > 0)
    {
        qtyy = cartItem["qty"]
    }


    // console.log("cartitemthat ->");
    console.log(cartItem);
    // console.log("quantity");
    console.log(qtyy);

    console.log();
    console.log();

    return {
        cartItem : cartItem,
        qty : qtyy,
    }
}

export default connect(mapStateToProps , {ShopingCartItemIncrement , ShopingCartItemDecrement})(ProductCard);
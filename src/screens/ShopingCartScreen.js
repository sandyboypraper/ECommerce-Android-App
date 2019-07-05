import React , {Component} from 'react'
import {Box , Text} from 'react-native-design-utility';
import {Overlay , Button , Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import CartItem from '../Components/CartItem';
import axios from 'axios';
import {theme} from '../constraints/theme';
import NavigationService from '../api/NavigationService';
const {width : WIDTH , height : HEIGHT} = Dimensions.get('window');
import {FlatList , Image , StyleSheet , TouchableOpacity ,ActivityIndicator , Dimensions} from 'react-native';
import CloseBtn from '../Components/Closebtn';

           // <Box f={1} dir="row" key = {item["id"]}>
                    //   <Text>{item["id"]}</Text>
                    //   <Text>{item["sellerid"]}</Text>
                    //   <Text>{item["qty"]}</Text>
                    //   <Text>{item["sellerName"]}</Text>
                    //   <Text>{item["itemName"]}</Text>
                    //   <Text>{item["Price"]}</Text>
                    // </Box>
import {EmptyTheCart} from '../actions/index';
import Serverurl from '../ServerUrl';

class ShoppingCartScreen extends Component{

    static navigationOptions = ({navigation}) => ({
        title : 'My Cart',
        headerLeft: <CloseBtn left size={25} onPress = {() => navigation.goBack(null)} />
    })
    
    renderItem = ({item , index}) => {
        return ( 
            <Box mt = {5}>
          <CartItem product = {item} />
          </Box>
        );
     }


     keyExtractor = item => {
        return String(item["id"])
     };

     makeOrder = () => {
      const serverLink = Serverurl();

      var orderlist = [];

      for(var i = 0;i<this.props.cartItems.length;i++)
      {
        var temp = {};
        temp.item_id = this.props.cartItems[i].id;
        temp.qty = this.props.cartItems[i].qty;
        temp.seller_id = this.props.cartItems[i].sellerid;
        console.log(temp.seller_id);
        orderlist.push(temp);
      }
     
      axios.post(serverLink + '/saveorders', {
        cart_items : orderlist,
        totalammount : this.props.totalammount,
        user_id : 1
        })
        .then((response) => {
          console.log(response);
          if(response.data.status == '420')
           NavigationService.navigate('Log');
          else if(response.data.status == '200')
            {
              this.props.EmptyTheCart();
              this.setState({IsOverlay : true});
            }
        })
        .catch(function (error) {
          console.log(error);
        });

        this.setState({
          duringOrder : true,
        })
        
     }


     renderCheckOutbtn = () => {
         return(
            <Box bg="white" p="xs">
            <TouchableOpacity onPress = {this.makeOrder}>
              <Box h={45} bg="green" center radius={6} position="relative">
                <Text bold color="white">
                  Checkout
                </Text>
    
                <Box
                  position="absolute"
                  bg="black"
                  radius={6}
                  center
                  p="xs"
                  style={{ right: theme.space.xs }}
                >
                  <Text color="white" size={10}>
                    {this.props.totalammount}
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
         )
     }


    state = {
      duringOrder : false,
      IsOverlay : false,
    };
    render(){

        console.log(this.state);
        // const emptycart = require('../../assets/img/emptycart.png');
        const emptyCart = require('../../assets/img/emptyCart1.png');
        const {cartItems , removedItems , total} = this.props;

        // const no = Math.round(Math.random()*10)%2;
        var img = emptyCart;
        // if(no == 1)
        // img = emptyCart;
         console.log(this.props);

         if(total == 0 && !this.state.IsOverlay)
         {
           return(
            <Box f={1} center>
            <Image style = {styles.imag} source = {img} />
             </Box>  
           );
 
         }

        if(total == 0 && this.state.IsOverlay)
        {
            return(

                    <Box>
          
            <Overlay
            isVisible={this.state.IsOverlay}
            windowBackgroundColor={theme.color.greyLight}
            overlayBackgroundColor="white"
            width={WIDTH - 50}
            height={HEIGHT - 150}
            >
              <Box position = "relative">
            <Box f={1} position = "absolute" center style = {{top:(HEIGHT - 150)/2 - 60 , left : (WIDTH - 50)/2 - 90}}>
              <Text color = "green">
                successfull
              </Text>
              <Text color = "greyLight">
                your order is created
              </Text>
              <Box mt = {20}>
              <Button
                icon={
                  <Icon
                  name="send"
                  size={15}
                  color="white"
                  />
                }
                title="  go to orders page  "
                onPress = {() => NavigationService.navigate('Order')}
              />
              </Box>
            </Box>
            <Box position = "absolute" style = {{top : 2 , right : 2}}>
            <Icon
            raised
            name='close'
            type='font-awesome'
            color='black'
            size = {15}
            onPress={() => this.setState({IsOverlay : false})} />
            </Box>
            </Box>
            </Overlay>     
                    </Box>
            );
        }

        if(this.state.duringOrder){
          return(
            <Box f = {1} center>
              <ActivityIndicator />
            </Box>
          )
        }
        
        return(
            <Box f = {1} bg = "backpage">
                 <FlatList 
                        data = {cartItems}
                        renderItem={this.renderItem}
                        keyExtractor = {this.keyExtractor}
                        numColumns = {1}
                        showsVerticalScrollIndicator = {false}
                    />
                    {this.renderCheckOutbtn()}
            </Box>
        )
    }
}

function mapStateToProps(state){
    return {
        cartItems : state.cartItems,
        total : state.total,
        totalammount : state.totalammount
    }
}

const styles = StyleSheet.create({
    imag : {
        flex : 1,
        width : 300,
        resizeMode : "contain",
    }
});

export default connect(mapStateToProps , {EmptyTheCart})(ShoppingCartScreen);
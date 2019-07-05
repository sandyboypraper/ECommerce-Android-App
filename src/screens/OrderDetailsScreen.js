import React , {Component} from 'react';
import {Box , Text} from 'react-native-design-utility';
import {FlatList , ActivityIndicator} from 'react-native';
import axios from 'axios';
import OrderDetailsCard from '../Components/OrderDetailsCard';
import Serverurl from '../ServerUrl';

class OrderDetailsScreen extends Component{

    // item_id , item_name , item_price , item_image , item_count

    constructor(props){
        super(props);
        this.state = {
            OrdersDetails : [],
            isLoading :  true,
        }
    }

    static navigationOptions = ({navigation}) => ({
        title : 'Order Details',
    })

    componentDidMount(){
        const serverLink = Serverurl();
        // console.log(this.props.navigation.getParam('order_id'));
		axios.post(serverLink + '/getfullorders', {
			order_id : this.props.navigation.getParam('order_id')
			})
			.then((response) => {
			  console.log(response);
			  this.setState({
                  OrdersDetails : response.data.orders,
                  isLoading : false,
			  })
			})
			.catch(function (error) {
			  console.log("aayi" + error);
			});
    }

    renderItem = ({item , index }) => {
			return(
						<OrderDetailsCard {...item} navigation = {this.props.navigation} />
				);
	}
	
	keyExtractor = item => String(item.order_id);
	
	separator = () => <Box h={2} bg="" />;


    render(){

        if(this.state.isLoading){
            return(
                <Box f = {1} center>
                    <ActivityIndicator />
                </Box>
            );
        }

        return(
            <Box f = {1} bg = "greyLightest" align = "center">
               	            <FlatList 
								data = {this.state.OrdersDetails}
								renderItem={this.renderItem}
								keyExtractor = {this.keyExtractor}
								numColumns = {1}
								ItemSeparatorComponent = {this.separator}
								showsVerticalScrollIndicator = {false}
							/>
            </Box>
        )
    }
}

export default OrderDetailsScreen;
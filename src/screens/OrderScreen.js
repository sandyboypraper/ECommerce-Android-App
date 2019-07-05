import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';
import {Image , StyleSheet , TouchableOpacity ,Dimensions , FlatList} from 'react-native';
import NavigationService from '../api/NavigationService';
import Serverurl from '../ServerUrl';
import OrderCard from '../Components/OrderCard';
import axios from 'axios';
const {width : WIDTH , height : HEIGHT} = Dimensions.get('window');
import {theme} from '../constraints/theme';
const RATIO = 1;
class OrderScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			noItems : false,
			allOrders : [],
		}
	  }

	componentDidMount(){

		const serverLink = Serverurl();
		axios.post(serverLink + '/getorders', {
			user_id : 1
			})
			.then((response) => {
			  console.log(response);
			  this.setState({
				  allOrders : response.data.orders,
			  })
			})
			.catch(function (error) {
			  console.log(error);
			});
	
		}


	//Flatlist
	renderItem = ({item , index }) => {

		let style = {};
	
		// let imgg = require('../../assets/img/' + item["image"]+'.png');
	
	
	
			return(
						<OrderCard {...item} navigation = {this.props.navigation} />
				);
	}
	
	keyExtractor = item => String(item.order_id);
	
	separator = () => <Box h={2} bg="" />;

	handlePress = () => {
		// NavigationService.navigate('Home');
		// or
		this.props.navigation.navigate('Home');
	};

	render(){

		const noorders = require('../../assets/img/noOrders.jpg');

			if(this.state.noItems){
				return(
					<Box f = {1} center bg = "white">
							<Image style = {styles.imag} source = {noorders} />
							<Text color = "greyLight" size = {50}>WOO!</Text>
							<Text color = "greyLight" size = {10}>Sorry , No orders yet</Text>
							<TouchableOpacity onPress = {this.handlePress}>
								<Box bg = "green" mt = {30} radius = {10} p={10} w = {WIDTH/2 + WIDTH/5} center>
									<Text color =  "white">
										Continue Shoping
									</Text>
								</Box>
							</TouchableOpacity>
					</Box>
		        );

				}
		   
		
		
		return(
			
			
			
				<Box>
							<FlatList 
								data = {this.state.allOrders}
								renderItem={this.renderItem}
								keyExtractor = {this.keyExtractor}
								numColumns = {RATIO}
								ItemSeparatorComponent = {this.separator}
								showsVerticalScrollIndicator = {false}
							/>
	            </Box>
			

		)
	}
}



const styles = StyleSheet.create({
	imag : {
		width: 150,
		height : 170,
		resizeMode : 'contain'
	}
})

export default OrderScreen;
import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';

import {FlatList ,Dimensions ,ActivityIndicator} from 'react-native';

import CategoryCard from '../Components/CategoryCard';
import DataCarosuel from '../Components/DataCarosuel';

import axios from 'axios';

import {theme} from '../constraints/theme';

const {width : WIDTH} = Dimensions.get('window');

const RATIO = 1;

import {fetchAllSellers} from '../Database';
import ProfileBtn from '../Components/ProfileBtn';
import Serverurl from '../ServerUrl';
// const categories = customData["sellers"]


class HomeScreen extends Component{
	
	
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			categories: null,
			isNetWorkError : false,
		}
	}


	componentDidMount(){

		console.log("hbsdzjk");
		let serverLink = Serverurl();
		axios.get(serverLink)
		.then((response) => {
			console.log(response.data.sellers);
			this.setState({
				isLoading : false,
				categories : response.data.sellers,
			})
		}).catch((e) => {
			console.log(e);
			this.setState({
				isNetWorkError : true,
			})
		})

	}

	


	static navigationOptions = {
		headerLeft: (
			<ProfileBtn />
		),
	  };


	renderItem = ({item , index }) => {

	let style = {};

	// let imgg = require('../../assets/img/' + item["image"]+'.png');



		return(
				<Box h = {100} center style = {style}>
					<CategoryCard {...item} navigation = {this.props.navigation} />
				</Box>
			)
    }

	keyExtractor = item => String(item.id);

	separator = () => <Box h={2} bg="" />;

	render(){

		console.log(this.state.categories);
		if(this.state.isLoading){
			return(
				
				<Box f={1} center>
					
					<ActivityIndicator />
				</Box>
			)
		}

		if(this.state.isNetWorkError){
			return(
				<Box f={1} center>
					<Text>Network Error</Text>
				</Box>
			)
		}
		
	
			return(
				<Box f = {1} bg = "backpage">
						<Box h = {130} bg="white">
							<DataCarosuel />
						</Box>

						<Box f={1} p = {10}>
							<FlatList 
								data = {this.state.categories}
								renderItem={this.renderItem}
								keyExtractor = {this.keyExtractor}
								numColumns = {RATIO}
								ItemSeparatorComponent = {this.separator}
								showsVerticalScrollIndicator = {false}
							/>
						</Box>
						
				</Box>
	);
		
		
	}

}

export default HomeScreen;
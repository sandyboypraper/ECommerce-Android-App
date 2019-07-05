import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';
import {StyleSheet} from 'react-native';
import Serverurl from '../ServerUrl';
import Onbordinglogo from '../commons/onbordinglogo';
import axios from 'axios';
const style = StyleSheet.create({
	imageStyle : {
		width:100,
		height:100,
		resizeMode:'contain',
	}
});
 
class SplashScreen extends Component{
	state ={};


	componentDidMount(){
		this.checkAuth();
	}

	checkAuth = () => {

		let serverLink = Serverurl();

		serverLink += '/checklogin'

		console.log(serverLink);

			axios.post(serverLink , {
				username : "jhsdjsn",
				password : "dfjhd",
			})
			.then((response) => {
				  console.log(response.data.status);
				  if(response.data.status == '200')
				   {
					this.props.navigation.navigate('Main');
				   }
				  else if(response.data.status == '502')
					{
						this.props.navigation.navigate('Auth');
					}
			})
			.catch((error) => {
				this.props.navigation.navigate('Auth');
				  console.log(error);
			});
	

		// setTimeout(()=>{
		// 	this.props.navigation.navigate('Auth');
		// },2000);
	};


	render(){
		return(
					<Box f = {1} center>
						<Onbordinglogo />
					</Box>
			);
	}

}

export default SplashScreen;
import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';

import {Alert , TouchableOpacity , Dimensions} from 'react-native';
import { Icon , Button } from 'react-native-elements';
import LoginButton from '../commons/LoginButton';
import Onbordinglogo from '../commons/onbordinglogo';
import { SocialIcon } from 'react-native-elements'
import NavigationService from '../api/NavigationService';
const {width : WIDTH} = Dimensions.get('window');



class LoginScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}

	onGooglePress = () => {
		Alert.alert('google Press');
	};

	sendTOLoginForm = (props) => {
		props.navigation.navigate('Loginform');
	}

	sendTOSignUpForm = (props) => {
		props.navigation.navigate('Signupform');
	}

	onFacebookPress = () => {
		Alert.alert('Facebook Press');
	};

	byPass = () => {
		NavigationService.navigate('Home');
	}

	render(){
		return(
						<Box f={1} center bg = "white">

						<Box position = "relative">
							<Box f = {1} center>
								<Onbordinglogo />
							</Box>

							<Box f = {0.9} w="100%" center>
								<LoginButton onPress = {() => this.sendTOSignUpForm(this.props)} bgcolor = "googleBlue" color = "white" type = "signup" > SIGN UP </LoginButton>
								
								<LoginButton onPress = {() => this.sendTOLoginForm(this.props)} bgcolor = "backpage" color = "black" type = "send" > SIGN IN </LoginButton>
							</Box>

							<Box position = "absolute" style = {{top : 10 , right : -30}}>
								
				
								<Button
									icon={
										<Icon
								name='x-circle'
								type='feather'
								color='grey'
								/>
									}
									title=" "
									type="clear"
									titleStyle = {{color : "black"}}
									onPress = {this.byPass}
									/>
								
							
								
							</Box>	

					   </Box>

					</Box>
			);
	}

}

export default LoginScreen;
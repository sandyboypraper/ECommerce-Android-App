import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';

import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Image,Dimensions} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');
import { images } from '../constraints/images';
import { Icon } from 'react-native-elements'
const bgColor = type => {
	switch (type) {
		case 'google':
		return 'googleBlue';
		case 'facebook':
		return 'facebookBlue';
		default:
		return 'white';
	}
}


const style = StyleSheet.create({
	imageStyle : {
		width:25,
		height:25,
		resizeMode:'contain',
	}
});

class LoginButton extends Component{

		render()
		{
			const {bgcolor , color} = this.props;
			return(

					<TouchableOpacity onPress = {this.props.onPress} style = {{width : WIDTH/1.3 , paddingTop : 10}}>
									<Box style = {styles.borderC} shadow={1}  dir = "row" center bg = {bgcolor} self = "center" w = "80%" p = "xs" radius={30} mb = "sm">
										
										<Box mr = {10}>
											<Box center>
												{this.props.type == 'google' && <Image style = {style.imageStyle} source={images.googleColorIcon}/>}
												{this.props.type == 'facebook' && <Image style = {style.imageStyle} source = {images.facebookColorIcon}/>}
												{this.props.type == 'send' && <Icon
													name='log-in'
													type='feather'
													color={color}
													size = {15}
													/>}
												{this.props.type == 'signup' && <Icon
													name='user-plus'
													type='font-awesome'
													color={color}
													size = {15}
													/>}
											</Box>
										</Box>

										<Box>
										<Text size = "md" color={color}>
										   {this.props.children}
										</Text>
									
									    </Box>

									</Box>
					</TouchableOpacity>

				);
		}

}

const styles = StyleSheet.create({
	borderC : {
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	}
})

export default LoginButton;
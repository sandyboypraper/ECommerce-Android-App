import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';
import {StyleSheet} from 'react-native';

import { images } from '../constraints/images';

import {Image} from 'react-native';



const style = StyleSheet.create({
	imageStyle : {
		width:100,
		height:100,
		resizeMode:'contain',
	}
});
 
class Onbordinglogo extends Component{
	state ={};

	render(){
		return(
						<Box f={1} center>
						   <Box mb = "sm">
							<Image style = {style.imageStyle} source={images.logo}/>
							</Box>
							<Text size = "md">B<Text color = "blue" size = "xl" >2</Text>B</Text>
						</Box>
			);
	}

}

export default Onbordinglogo;
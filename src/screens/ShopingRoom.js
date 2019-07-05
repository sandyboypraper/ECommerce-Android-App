import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';

import {Alert , TouchableOpacity} from 'react-native';

import {images} from '../constraints/images';


class Shoproom extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}


	render(){
		return(
						<Box f={1} center bg = "white">

							<Text>Shoping Room</Text>
							
						</Box>
			);
	}

}

export default Shoproom;
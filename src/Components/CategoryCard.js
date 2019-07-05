import React,{PureComponent} from 'react';
import {Box  , Text} from 'react-native-design-utility';
import {Image , TouchableOpacity , StyleSheet , Dimensions} from 'react-native';

import {Icon} from 'react-native-elements';

import {theme} from '../constraints/theme';
import { thisExpression } from '@babel/types';

const {width : WIDTH} = Dimensions.get('window');

class CategoryCard extends PureComponent {
	state = {}

	handlePress = () => {
		this.props.navigation.navigate('Category',{name : this.props.title , id : this.props.id});
	}

	render() {

		const {id ,title , image , tagline , address} = this.props;

		var tagLine = tagline;
		if(tagLine.length > 30)
		{
			tagLine = tagLine.substring(0,30);
			tagLine += '...'
		}

		const image1 = 'http://192.168.1.61:8000/ecommerce'+image;

		return (
			<TouchableOpacity onPress = {this.handlePress}>
				<Box bg = "white" w = {WIDTH/1.05} h = {90} f = {1} dir = "row"  >

					{
						image && (

								<Box style = {styles.item} radius = {10}>
									<Image source={{uri : image1}}  style = {styles.img}/>
								</Box>

							)
					}

					<Box f = {2} justify = "flex-start" ml = {10} mt = {10}>
					<Text color = "greyDarker" bold size = "lg" capitalizeEach>{title}</Text>
					<Text color = "grey" size = "sm" capitalizeEach>{tagLine}</Text>
					<Box f = {1} dir = "row">
					<Icon
					name='location-on'
					type='material'
					color='orange'
					size = {10}
					/>
					<Text color = "greenDark" size = "tabsm" capitalizeEach>
					{address}</Text>	
					</Box>				
					</Box>

				</Box>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	img : {
	flex: 1,
	width: 200,
	resizeMode : "contain"
	},
	item: {
		flex: 1,
		overflow: 'hidden',
		alignItems: 'center',
		backgroundColor: "white",
		position: 'relative',
		margin: 10,
		borderColor: "grey",
	  },
})

export default CategoryCard;
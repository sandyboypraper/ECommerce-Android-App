import React, {PureComponent} from 'react';
import {Box ,Text} from 'react-native-design-utility';
import {Image , TouchableOpacity , StyleSheet} from 'react-native';



import { tabBarIcons } from '../constraints/images';

class TabItem extends PureComponent{


	handlePress = () => {
		this.props.navigation.navigate(this.props.routeName);
	}

	render(){
		const {routeName , isActive} = this.props;

		const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];


		return(

			<Box f={1} pt = {5}>
				<TouchableOpacity onPress = {this.handlePress} style = {styles.button}>
			   <Box mb = {3} >
			   	<Image source = {icon} />
			   </Box>

			   <Box>
			   	<Text size = "tabsm" color = "greyDark" lowercase>{routeName}</Text>
			   </Box>
				</TouchableOpacity>
			</Box>

			)
	}
}

const styles = StyleSheet.create({
	button: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});


export default TabItem;
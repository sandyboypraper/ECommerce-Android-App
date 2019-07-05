import React, {PureComponent} from 'react';
import {Box} from 'react-native-design-utility';

import TabItem from './TabItem';

class TabBar extends PureComponent{

	render(){


		const { navigation } = this.props;

		const { routes , index} = navigation.state;


		return(

				<Box h = {50} bg ="white" dir = "row">
						{
							routes.map((route , i) => (<TabItem navigation = {navigation} key={route.routeName}  {...route} isActive={index == i}/>))
						}
				</Box>

			)
	}
}

export default TabBar;
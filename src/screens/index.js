import {createStackNavigator , createSwitchNavigator , createBottomTabNavigator , createAppContainer} from 'react-navigation';
import React , {Component} from 'react';

import {theme} from '../constraints/theme';
import CloseBtn from '../Components/Closebtn';

import TabBar from '../Components/Tabbar';
import ShopingCartIcon from '../Components/ShopingCartIcon';

const AuthNavigator = createStackNavigator(
	{
	    Login : {
	   			getScreen : () => require('./LoginScreen').default,
		},
	},
	{
		    headerMode: 'none',
			  navigationOptions: {
			    headerVisible: false,
			  }
	},
);

const LoginForm = createStackNavigator(

    {
	    Log : {
	   			getScreen : () => require('./LoginFormScreen').default,
		},
	},
	{
		    headerMode: 'none',
			  navigationOptions: {
			    headerVisible: false,
			  }
	},

);

const SignupForm = createStackNavigator(
	{
	    Signup : {
				   getScreen : () => require('./Signupform').default,
				   navigationOptions:{
					title : 'SIGN UP',
				
					headerStyle:{
						backgroundColor: "transparent",
					},
					headerTintColor: "black",
				},
		},
	},
)

// const Settings = createStackNavigator(
// 	{
// 		Setting : {
// 			getScreen : () => require('./SettingsScreen').default,
// 			navigationOptions:{
// 				title : 'Settings',
       			
// 			},
// 		}
// 	}
// )

const ProfileStack = createStackNavigator(
	{
		Profile:{
			getScreen: () => require('./ProfileScreen').default,
			navigationOptions:{
				// title : 'My Cart',
       			// headerLeft: <CloseBtn left size={25} onPress = {() => navigation.goBack(null)} />,
				headerStyle:{
					backgroundColor:"transparent",
				},
				headerTintColor: "black",
			},
		},
		Settings : {
			getScreen : () => require('./SettingsScreen').default,
			navigationOptions:{
				title : 'Settings',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		},
		About : {
			getScreen : () => require('./AboutScreen').default,
			navigationOptions:{
				title : 'About',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		},
		Help : {
			getScreen : () => require('./HelpScreen').default,
			navigationOptions:{
				title : 'Help',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		},
		Share : {
			getScreen : () => require('./InviteFriendsScreen').default,
			navigationOptions:{
				title : 'InviteYourFriends',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		},
		Address : {
			getScreen : () => require('./Address').default,
			navigationOptions:{
				title : 'Your Address',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		},
		Addaddress : {
			getScreen : () => require('./Addaddress').default,
			navigationOptions:{
				title : 'Add address',
				headerStyle:{
					backgroundColor: "transparent",
				},
				headerTintColor: "black",
			},
		}
	}
)




// const ShopingRoom = createStackNavigator(

//     {
// 	    room : {
// 	   			getScreen : () => require('./ShopingRoom').default,
// 		},
// 	},
// 	{
// 		    headerMode: 'none',
// 			  navigationOptions: {
// 			    headerVisible: false,
// 			  }
// 	},

// );

const primaryheader = (title) => {

	const temp = {	 defaultNavigationOptions: 
	 {
	 		title: title,
			 headerStyle: {
				backgroundColor: 'transparent'
			  },
		      headerTintColor: "black",
		      headerTitleStyle: 
		      {
		        fontWeight: 'thin',
			  },
			  headerRight : <ShopingCartIcon />
    }}

    return temp;
}



const Homestack = createStackNavigator({
	Home :  {
		getScreen : () => require('./HomeScreen').default,
	},
	Category : {
		getScreen : () => require('./CategoryScreen').default,
	}
},

{...primaryheader('Home')}
);


const ListStack = createStackNavigator({
	List : {
		getScreen : () => require('./ListScreen').default,
	},
},

{...primaryheader('Your Items List')})


const OrderStack = createStackNavigator({
	Order : {
		getScreen : () => require('./OrderScreen').default,
	},
	OrderDetails : {
		getScreen : () => require('./OrderDetailsScreen').default,
	}
},

{...primaryheader('Order')})

const StoreStack = createStackNavigator({
	Store : {
		getScreen : () => require('./StoreScreen').default,
	}
},

{...primaryheader('Manage Your Store')})



const TabNavigator = createBottomTabNavigator({
	Home : Homestack,
	Order : OrderStack,
	Store : StoreStack,
	List : ListStack
},
{
 
 	tabBarComponent: props => <TabBar {...props} />

});

const ShopingCartNavigator = createStackNavigator({
	ShoppingCart : {
		getScreen : () => require('./ShopingCartScreen').default,
		navigationOptions:{
			headerStyle: {
				backgroundColor: 'transparent'
			},
			headerTintColor: "black",
		},
	}
})

const MainNavigator = createStackNavigator({
	Tab : TabNavigator,
	ShoppingCart : ShopingCartNavigator,
	Profile : ProfileStack,
	Auth : AuthNavigator,
	Loginform : LoginForm,
	Signupform : SignupForm
},
{
			headerMode: 'none',
			  navigationOptions: {
			    headerVisible: false,
			  }
});


const AppNavigator = createSwitchNavigator({
	Splash : {
		getScreen : () => require('./SplashScreen').default,
	},
	Auth : AuthNavigator,
	Main : MainNavigator,
	Loginform : LoginForm,
	Signupform : SignupForm
},
{
	initialRouteName : 'Splash',
})

const Navigation = createAppContainer(AppNavigator);

// class Navigation extends Component{
// 	state = {};

// 	render(){
// 		return <AppNavigator />;
// 	}
// }

export default Navigation;

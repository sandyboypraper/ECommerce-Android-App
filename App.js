import React, {Component} from 'react';
import {UtilityThemeProvider , Box  , Text} from 'react-native-design-utility';
import Navigation from './src/screens/index';

import NavigationService from './src/api/NavigationService'

import { StatusBar ,ActivityIndicator} from 'react-native';
import {images} from './src/constraints/images';
// import {cacheImages} from './src/utils/cacheImages'; 

import {theme} from './src/constraints/theme';


class App extends Component<Props> {
  
  state = {
  	isReady: false,
  }

  render() {

  	if(this.state.isReady){
  		return(

  				<Box f={1} center bg="white">
  					<ActivityIndicator size = "large" />
  				</Box>

  			)
  	}
    return (
      
     <UtilityThemeProvider theme = {theme}>
       <StatusBar backgroundColor = "white"  barStyle="dark-content"  />
      <Navigation 
      
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      
      />
    </UtilityThemeProvider>
    
    );
  }
}

function mapStateToProps(state){
  return{
    cartItems
  }
}

export default App;
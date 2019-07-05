import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import {images} from '../constraints/images';
import {theme} from '../constraints/theme';
import axios from 'axios';
import {Box} from 'react-native-design-utility';
import Serverurl from '../ServerUrl';

export default class LoginView extends Component {

  constructor(props){
		super(props);
		this.state = {
			username : "username",
      password : "password",
      errormsg : "",
      iserror :false,
		}
	}

	handelUserName = (text) => {
      this.setState({
      	username:text
      });
	}

	handelPassword = (text) => {
		this.setState({
			password:text
		});
	}

	submitLogin = () => {
    // Alert.alert(this.state.username + "   " + this.state.password);
    
    let serverLink = Serverurl();
    axios.post(serverLink + '/login',{
      username : this.state.username,
      password : this.state.password
    })
		.then((response) => {
      console.log(response.data.status);
      if(response.data.status == '200')
        {console.log(this.props.navigation);
        this.props.navigation.navigate('Tab');}
      else
        this.setState({
          iserror : true,
          errormsg : "wrong email or password",
        })

		}).catch((e) => {
			console.log(e);
		})



	

	}
  // source = {images.bgimagelogin}
  render() {
    return (

    	<ImageBackground  style = {styles.backgroundContainer}>



      <View style={styles.container}>
     

        <View style={styles.inputContainer}>


        <Icon
          name='mail'
          type='feather'
          color='#517fa4'
          style={styles.inputIcon}
        />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.handelUserName(text)}/>
        </View>
        
        <View style={styles.inputContainer}>
        <Icon
          name='vpn-key'
          type='material'
          color='#517fa4'
          style={styles.inputIcon}
        />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.handelPassword(text)}/>
        </View>

        {this.state.iserror && (
           <Box mb = {20}>
              <Text style = {styles.errmsg}>{this.state.errormsg}</Text>
           </Box>
        )}
       

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.submitLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
	backgroundContainer:{
		flex : 1,
		justifyContent:'center',
    alignItems:'center',
    backgroundColor: theme.color.greyLightest,
	},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:50,
      marginBottom:20,
      paddingLeft: 20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      letterSpacing: 2,
      flex:1,
  },
  inputIcon:{
    width:35,
    height:20,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  errmsg : {
    color : "red"
  }
});
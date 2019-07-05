import React,{Component} from 'react';
import {StatusBar , ScrollView ,Image , StyleSheet , Alert} from 'react-native';
import {Box , Text} from 'react-native-design-utility';
import CloseBtn from '../Components/Closebtn';
import ListColumn from '../Components/ListColumn';
import {Icon} from 'react-native-elements';
import {theme} from '../constraints/theme';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Serverurl from '../ServerUrl';

const baseIconStyle = {
    size: 25,
    color: theme.color.grey,
  };

const LINKS = [
    {
      link: 'Share',
      title: 'Invite friends',
      icon: <Icon
      name='share-apple'
      {...baseIconStyle}
      type='evilicon'
        />
    },
    {
      link: 'Help',
      title: 'Help',
      icon: <Icon
      name='question'
      {...baseIconStyle}
      type='evilicon'
      />
    },
    {
      link: 'About',
      title: 'About this app',
      icon: <Icon
      name='exclamation'
      {...baseIconStyle}
      type='evilicon'
     />
    },
    {
      link: 'Settings',
      title: 'Your accounts settings',
      icon: <Icon
      name='gear'
      {...baseIconStyle}
      type='evilicon'
      />
    },
];

class ProfileScreen extends Component{
    state = {};
        static navigationOptions = ({navigation}) => ({
        title : 'My Profile',
        headerLeft: <CloseBtn left size={25} onPress = {() => navigation.goBack(null)} />
    })

    imag = require('../../assets/img/p2.png');

   
    logOut(){
        let ServerLink = Serverurl();

        axios.get(ServerLink + '/logout')
		.then((response) => {
			 Alert.alert("you are logged out");
		}).catch((e) => {
			Alert.alert("something went wrong");
		})
    }

    render(){
        return (
            <Box f={1} bg = "backpage">
                <ScrollView>
                   <ListColumn>
                       <ListColumn.Left>
                            <Box>
                                <Text mt={25} ml = {20} bold size = {30}>Hi, Sandeep</Text>
                            </Box>
                        </ListColumn.Left>
                        <ListColumn.Right>
                            <Box circle = {60} mt = {15} style = {styles.item}>
                                <Image source={this.imag} style = {styles.img} />
                            </Box>
                        </ListColumn.Right>
                   </ListColumn>

                   {LINKS.map(el => (
                    <ListColumn link={el.link} key={el.title}>
                    <ListColumn.Left>
                    <Box dir="row" align="center">
                        <Box f={0.2} mb = {15} mt = {15}>{el.icon}</Box>

                        <Box f={1}>
                            <Text size = {20} mb = {15} mt = {15}>{el.title}</Text>
                        </Box>
                        </Box>
                    </ListColumn.Left>
                    <ListColumn.Right>
                        
                        <Box mr = {20} mt = {15} mb = {15}>
                         <Icon
                        name='arrow-right'
                        {...baseIconStyle}
                        type='feather'
                        size = {20}
                        />
                        </Box>
                   
                    </ListColumn.Right>
                    </ListColumn>
                ))}

        
        <TouchableOpacity style={styles.logoutBtn} onPress = {this.logOut}>
            <Text bold color="green">
              Log out
            </Text>
          </TouchableOpacity>




                </ScrollView>
            </Box>
        )
    }
}


const styles = StyleSheet.create({
    img : {
        flex: 1,
        resizeMode : 'contain'
    },
    item : {
        flex: 1,
		overflow: 'hidden',
		alignItems: 'center',
		backgroundColor: "black",
        position: 'relative',
		margin: 10
    },
    logoutBtn: {
        borderWidth: 1,
        borderColor: theme.color.green,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        height: 40,
        marginTop: 20
      },
})


export default ProfileScreen;
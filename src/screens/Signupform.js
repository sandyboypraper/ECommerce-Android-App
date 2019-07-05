import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';


import { Input } from 'react-native-elements';
import {Alert , Dimensions , View , StyleSheet , TouchableOpacity , ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../constraints/theme';

import InputComponent from '../Components/InputComponent';
import CloseBtn from '../Components/Closebtn';
const {width : WIDTH} = Dimensions.get('window');

class Signupform extends Component{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }



    static navigationOptions = ({navigation}) => ({
        headerLeft: <CloseBtn left size={25} onPress = {() => navigation.navigate('Auth')} />
    })

    render(){
        return(
            <Box f = {1} bg = "backpage" >


           

            <ScrollView>
            <Box align = "center" mt = {40}>

            <Input
                placeholder='Seller Name'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='grey'
                    />
                }
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                leftIconContainerStyle = {styles.leftIconContainerStyle}
                inputStyle = {styles.inputStyle}
                />

                <Input
                placeholder='Shop Name'
                leftIcon={
                    <Icon
                    name='shopping-bag'
                    type = 'feather'
                    size={24}
                    color='grey'
                    />
                }
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                leftIconContainerStyle = {styles.leftIconContainerStyle}
                inputStyle = {styles.inputStyle}
                />	

                <Input
                placeholder='Address'
                leftIcon={
                    <Icon
                    name='address-book'
                    type = 'font-awesome'
                    size={24}
                    color='grey'
                    />
                }
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                leftIconContainerStyle = {styles.leftIconContainerStyle}
                inputStyle = {styles.inputStyle}
                />	

                <Input
                placeholder='Contact No'
                leftIcon={
                    <Icon
                    name='phone'
                    type = 'font-awesome'
                    size={24}
                    color='grey'
                    />
                }
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                leftIconContainerStyle = {styles.leftIconContainerStyle}
                inputStyle = {styles.inputStyle}
                />	

                <Input
                placeholder='Tag Line'
                leftIcon={
                    <Icon
                    name='tags'
                    type = 'font-awesome'
                    size={24}
                    color='grey'
                    />
                }
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                leftIconContainerStyle = {styles.leftIconContainerStyle}
                inputStyle = {styles.inputStyle}
                />	
            </Box>
                </ScrollView>
                <TouchableOpacity style = {styles.centerize}>
                    <Box center mt={10} bg = "green" w = {WIDTH/1.5} p = {10} radius = {20}>
                        <Text color = "white">save</Text>
                    </Box>
                </TouchableOpacity>
        
    </Box>
        )
    }
}

const styles = StyleSheet.create({
	containerStyle : {
		width: WIDTH - 60,
		borderWidth : 0.5,
		borderRadius: 20,
		borderColor: theme.color.greyLight,
		marginTop : 5,
		marginBottom: 5,
	},
	inputContainerStyle : {
		borderBottomWidth: 0
	},
	leftIconContainerStyle : {
		marginRight : 20
	},
	inputStyle: {
		letterSpacing : 2,
		fontSize : 12
	},
	centerize : {
		alignItems : "center",
		justifyContent : "center",
		marginBottom : 40,
	}
})


export default Signupform;
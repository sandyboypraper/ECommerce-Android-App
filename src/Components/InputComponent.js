import React,{Component} from 'react';
import {Box  , Text} from 'react-native-design-utility';

import { Avatar ,Input } from 'react-native-elements';
import {Alert , Dimensions , View , StyleSheet , TouchableOpacity , ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../constraints/theme';


const {width : WIDTH} = Dimensions.get('window');

class InputComponent extends Component{

   

    render(){

        const  {placeHolder , iconName , containerStyle , inputContainerStyle , leftIconContainerStyle , inputStyle} = this.props;
        return(
            <Input
            placeholder={placeHolder}
            leftIcon={
                <Icon
                name={iconName}
                type = 'feather'
                size={24}
                color='black'
                />
            }
            containerStyle = {containerStyle}
            inputContainerStyle = {inputContainerStyle}
            leftIconContainerStyle = {leftIconContainerStyle}
            inputStyle = {inputStyle}
            />	
        );
    }
}

export default InputComponent;
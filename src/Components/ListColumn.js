import React , {PureComponent} from 'react';

import {Box , Text} from 'react-native-design-utility';
import {Image , StyleSheet} from 'react-native';
import { theme } from '../constraints/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../api/NavigationService';

const Left = ({children}) => (
    <Box f={1} algin="start">
        {children}
    </Box>
);

const Right = ({children}) => (
    <Box align="end" bg="">{children}</Box>
);


class ListColumn extends PureComponent{

    static Left = Left;
    static Right = Right;

    state = {}

    handlePress = () => {
        NavigationService.navigate(this.props.link);
    }

    render() {
        return(
            <TouchableOpacity onPress = {() => this.handlePress()}>
        <Box dir = "row" bg = "" style = {{borderBottomWidth : StyleSheet.hairlineWidth , borderBottomColor: theme.color.greyLight}}>
            {this.props.children}
        </Box>
        </TouchableOpacity>
        )
    }
}

export default ListColumn
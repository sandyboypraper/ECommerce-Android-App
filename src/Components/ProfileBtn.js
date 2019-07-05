import React , {PureComponent} from 'react';
import {Icon} from 'react-native-elements';

import HeaderBtn from './Headerbtn';
import NavigationService from '../api/NavigationService';

class ProfileBtn extends PureComponent {
    state = {};

    onNavigate = () => {
        NavigationService.navigate('Profile');
    }

    render(){
        return(
            <HeaderBtn left onPress = {this.onNavigate}>
                          <Icon
                                name='user'
                                size = {40}
                                type='evilicon'
                                color='black'
                            />
            </HeaderBtn>
        )
    }
}

export default ProfileBtn;
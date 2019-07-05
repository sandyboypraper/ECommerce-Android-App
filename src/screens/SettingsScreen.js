import React , {Component} from 'react';
import {Box , Text} from 'react-native-design-utility';

import ListColumn from '../Components/ListColumn';
import {Icon} from 'react-native-elements';
import {theme} from '../constraints/theme';

import Serverurl from '../ServerUrl';

const baseIconStyle = {
    size: 25,
    color: theme.color.grey,
  };

const LINKS = [
    {
      link: 'namemailphone',
      title: 'Your name and email/phoneno',
      icon: <Icon
      name='user'
      {...baseIconStyle}
      type='evilicon'
        />
    },
    {
      link: 'Address',
      title: 'Address',
      icon: <Icon
      name='location'
      {...baseIconStyle}
      type='evilicon'
      />
    }
];

class SettingScreen extends Component{
    render(){
        return(
            <Box f={1}>
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
            </Box>
        );
    }
}

export default SettingScreen;
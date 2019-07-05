import React , {Component} from 'react';
import {Box , Text} from 'react-native-design-utility';
import { ListItem } from 'react-native-elements';
import serverUrl from '../ServerUrl';
import {Dimensions} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');
import {theme} from '../constraints/theme';
class OrderDetailsCard extends Component{


    static navigationOptions = ({navigation}) => ({
        title : 'My Cart',
        headerLeft: <CloseBtn left size={25} onPress = {() => navigation.goBack(null)} />
    })

    render(){

        const {item_id , item_name , item_price , item_image , count} = this.props;
        var imagelink = serverUrl() + item_image;
        var price = " count -  "+count+" ";
        console.log(this.props); 
        const subtitle =  item_price + '\u20A8 '
        return(
            <Box w = {WIDTH - 20} mt = {10}>
                <ListItem
                containerStyle = {{borderRadius : 20}}
                leftAvatar={{ source: { uri: imagelink } }}
                title={item_name}
                subtitle={subtitle}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                subtitleStyle={{ color:  theme.color.greyLight}}
                badge={{ value: price, textStyle: { color: 'white' }, containerStyle: { marginTop: -10 } }}
            />    
            </Box>
        )
    }
}

export default OrderDetailsCard;
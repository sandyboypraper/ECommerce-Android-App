import React , {Component} from 'react'
import {Box , Text} from 'react-native-design-utility';
import Serverurl from '../ServerUrl';
import ProductCard from '../Components/ProductCard';
import { Icon } from 'react-native-elements'
import {FlatList , ActivityIndicator , StyleSheet , TouchableOpacity , Dimensions} from 'react-native';
import axios from 'axios';
import {fetchProductsBySellerId} from '../Database/index';
import ProductCardGridView from '../Components/ProductCardGridView';
const {width : WIDTH} = Dimensions.get('window');
class CategoryScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            title : "",
            id : 0,
            isLoading : true,
            categories : [],
            serverLink: "",
            isGrid : false,
        }
    }

    toggleGrid = () => {
        this.setState({
            isGrid : !this.state.isGrid,
        })
    }

    renderItem = ({item , index}) => {
       return ( 
       <Box mb = {3}>
          
           <ProductCard {...item} sellername = {this.state.title} sellerid = {this.state.id} serverLink = {this.state.serverLink} />
           
        
       </Box> 
       );
    }

    renderItemGrid = ({item , index}) => {
        return (
            <Box>
          
            <ProductCardGridView {...item} sellername = {this.state.title} sellerid = {this.state.id} serverLink = {this.state.serverLink} />
            
         
             </Box> 
        );
    }


    static navigationOptions = ({navigation}) => ({
        title : navigation.getParam('name' , 'Instore'),
    })

    componentDidMount() {

        let serverLink = Serverurl();

        this.setState({
            title : this.props.navigation.getParam('name','InStore'),
            id : this.props.navigation.getParam('id',0),
            serverLink,
        })

       
        axios.post(serverLink + '/item', {
            id : this.props.navigation.getParam('id'),
          })
          .then((response) => {
            console.log(response.data.items);
			this.setState({
				isLoading : false,
				categories : response.data.items,
			})
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    keyExtractor = item => String(item.item_id);
    
    separator = () => <Box h={2} bg="" />;

    // <Box bg = "greyLightest" p={10} f={1} position = "relative">
    //             <Box position = "absolute" bg = "" f = {1} p = {20} dir = "row" w = {WIDTH} h ={30} style = {{top : 5 , left : 0 , zIndex : 99}} size = {20} >
    //                 <TouchableOpacity>
    //                 <Icon
    //                     name='g-translate'
    //                     color='#00aced' />
    //                 </TouchableOpacity>
    //             </Box>
    //             <Box mt = {45}>
    //             <FlatList 
	// 				data = {this.state.categories}
	// 				renderItem={this.renderItem}
	// 				keyExtractor = {this.keyExtractor}
	// 				numColumns = {1}
    //                 showsVerticalScrollIndicator = {false}
	// 			/>
    //             </Box>
    //         </Box>

    render(){

    
        if(this.state.isLoading){
			return(
				<Box f={1} center>
					<ActivityIndicator />
				</Box>
			)
		}

        return(
            <Box bg = "backpage" p={10} f={1} position = "relative">
                <Box position = "absolute" p = {10} ml = {10} radius = {20} align = "start" bg = "white" w = {WIDTH/1.1} style = {{top : 5 , left : 0 , zIndex : 99}} size = {20} >
                    <TouchableOpacity onPress = {this.toggleGrid}>
                        {this.state.isGrid ? (
                            <Icon
                            name='toggle-on'
                            type = "font-awesome"
                            color='#00aced' />
                        ):(
                            <Icon
                            name='toggle-off'
                            type = "font-awesome"
                            color='#00aced' />
                        )}
                    </TouchableOpacity>
                </Box>
                <Box mt = {43}>
            {console.log(this.state.isGrid)}
            {this.state.isGrid ? (
                <Box center>
                     <FlatList 
                     key = {0}
                data = {this.state.categories}
                renderItem={this.renderItemGrid}
                keyExtractor = {this.keyExtractor}
                numColumns = {2}
                showsVerticalScrollIndicator = {false}
            />
                </Box>
               
            // <Box><Text>hdbhn</Text></Box>
           ):
           (
               <Box>
                    <FlatList 
                    key = {1}
                    data = {this.state.categories}
                    renderItem={this.renderItem}
                    keyExtractor = {this.keyExtractor}
                    numColumns = {1}
                    showsVerticalScrollIndicator = {false}
                 />
               </Box>
           
           )}
               
                </Box>
            </Box>
        );
    }
}

const styles = StyleSheet.create({
    filter : {
        position : "absolute",
    }
})


export default CategoryScreen;
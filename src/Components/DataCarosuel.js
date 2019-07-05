import React,{PureComponent} from 'react';
import {Box  , Text} from 'react-native-design-utility';
import {Image ,StyleSheet , ScrollView , Dimensions} from 'react-native';

const images = [
	require('../../assets/img/food1.png'),
	require('../../assets/img/food2.png'),
	require('../../assets/img/food3.png'),
]

const {width:WIDTH} = Dimensions.get('window')

const DOT_SIZE = 8

const TIME = 3000;

class DataCarosuel extends PureComponent{


	constructor(props){
		super(props);

		this.state = {
			currentIndex : 0,
		};

		this.scrollView = React.createRef();
	}

	componentDidMount() {
		this.timer = setInterval(()=>{
			this.handleScroll()
		},TIME)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	onScroll = event => {
		const { contentOffset } = event.nativeEvent;

		const currentIndex = Math.round(contentOffset.x / WIDTH);

		if(this.state.currentIndex != currentIndex){
			this.setState({currentIndex});
		}
	}

	handleScroll = () => {
		const newIndex = this.state.currentIndex + 1;

		if (newIndex < images.length){
			this.scrollView.current.scrollTo({
				x: newIndex * WIDTH ,
				animated : true,
			})

			this.setState({currentIndex : newIndex});
		}else{

			this.scrollView.current.scrollTo({
				x: 0,
				animated : true,
			})
			this.setState({currentIndex : 0})
		}
	};

	render(){
		return(

			<Box>
				<ScrollView horizontal showsHorizontalScrollIndicator = {false} pagingEnabled ref={this.scrollView} onScroll = {this.onScroll}>
					{

						
						images.map((img,i) => (
   						<Box key={i} position = "relative">

							<Image source={img} key={i} style = {{width:WIDTH}}/>

							<Box position="absolute" dir="row"
							style={{height:130, width:WIDTH}}
							align="end"
							justify = "center"

							>
								{
									Array.from({length:images.length}).map((_,index) => (
											<Box key = {index}
											 bg={
											 	this.state.currentIndex == index 
											 	? 'black' 
											 	: 'transparent'
											 }
											style = {{borderWidth:1 , borderColor:"black"}}
											 circle={DOT_SIZE} 
											 mx={DOT_SIZE / 2} 
											 mb={DOT_SIZE / 2}
											 />
											
										))
								}
							</Box>

							</Box>

							))
					}
				</ScrollView>
			</Box>

			)
	}
}

export default DataCarosuel; 



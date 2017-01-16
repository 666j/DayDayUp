/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class AwesomeProject extends Component {
	constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this); 
  }
	componentDidMount() {
	    this.fetchData();
	  }
fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          movies: responseData.movies,
        }); 
      });
  }
  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  poster:{
   maxWidth :100,
   borderWidth :2,
   borderColor:'#f1f1f1',
   borderStyle:'solid',
   maxHeight :100,
  },
  name:{
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
    color:'#333',

  },
});

class MyImglist extends Component{
   render() {
      return (
        <ScrollView>
        <Text style = {styles.name}>张杰</Text>
        <Image style = {styles.poster} source = {require('./img/1.jpeg')}/>
         <Text style = {styles.name}>张学友</Text>
         <Image  style = {styles.poster} source = {require('./img/2.jpg')}/>
          <Text style = {styles.name}>张杰</Text>
          <Image  style = {styles.poster} source = {require('./img/3.jpg')}/>
           <Text style = {styles.name}>张柏芝t</Text>
           <Image  style = {styles.poster} source = {require('./img/5.jpg')}/>
            <Text style = {styles.name}>张靓颖</Text>
            <Image  style = {styles.poster} source = {require('./img/6.jpg')}/>
        </ScrollView>
      );
   }
}
class myListView extends Component{
  constructor(props) {
  super(props);
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  };
}
render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    />
  );
}
}

AppRegistry.registerComponent('AwesomeProject', () => myListView);

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export const Post = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.handler(props.url)}>
      <Image style={styles.image} source={{uri: props.url}} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>
          {props.desc ? props.desc : 'hmmm... maybe post?'}
        </Text>
        <Text style={styles.text}>Created by: </Text>
        <Text style={styles.author}>{props.user}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '47.5%',
    // width: (Dimensions.get('window').width/3) - 12,
    // height: (Dimensions.get('window').height/2) - 12,
    flexDirection: 'column',
    margin: 5,
    borderRadius: 15,
    backgroundColor: 'rgba(87,87,87,0.2)',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 11,
    height: Dimensions.get('window').height / 3 - 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // height: '100%',
    // resizeMode: 'stretch',
  },
  text: {
    color: '#303030',
    margin: '1%',
    // flex: 1,
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 15,
  },
  author: {
    marginBottom: '2%',
    // flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  textBlock: {
    justifyContent: 'center',
    // flex: 3,
  },
});

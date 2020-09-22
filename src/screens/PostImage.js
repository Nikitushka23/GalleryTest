import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const PostImage = (props) => { 
  const [imageSize, setImageSize] = useState(false)

  return (
    <TouchableOpacity onPress={() => setImageSize(!imageSize)}>
    <Image
      style={!imageSize ? styles.fullScreen : styles.fullImage}
      source={{
        uri: props.route.params.post,
      }}
    />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullScreen: {width: '100%', height: '100%'},
  fullImage: {width: '100%', height: '100%', resizeMode: 'contain',}
})
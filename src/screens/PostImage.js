import React from 'react';

import {Image} from 'react-native';

export const PostImage = (props) => { 
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: props.route.params.post,
      }}
    />
  );
};

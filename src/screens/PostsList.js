import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPosts} from '../reducer/actions';
import {FetchedPost} from '../components/FetchPosts';

export const PostsList = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const pressHandler = (post) => {
    props.navigation.navigate('SinglePost', {post});
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <View style={styles.galleryWrap}>
        {!loading ? (
          <FetchedPost handler={pressHandler} />
        ) : (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="#0000ff"
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  indicator: {justifyContent: 'center', marginTop: '60%', marginLeft: '45%'},
  galleryWrap: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
});

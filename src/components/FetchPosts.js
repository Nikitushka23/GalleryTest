import React from 'react';

import {Post} from './Post';

import { useSelector} from 'react-redux';

export const FetchedPost = (props) => {
    const posts = useSelector((state) => state.posts);
    return posts.map((post) => (
      <Post
        key={post.id}
        id={post.id}
        url={post.urls.regular}
        desc={post.alt_description}
        user={post.user.username}
        handler={props.handler}
      />
    ));
  };
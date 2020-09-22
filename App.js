import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {Navigator} from './src/routes/homeStack';
import {store} from './src/reducer/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Navigator style={{color: 'white'}}/>
      </Provider>
    </>
  );
};


export default App;

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Signin from './components/signin';

const App = () => {
  return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="root">
          <Scene key="pageSignIn" component={Signin} title="Sign In" initial={true} />
        </Scene>
      </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#0D47A1',
  },
  navBarTitle: {
    color: '#FFFFFF',
  },
  barButtonTextStyle:{
    color: '#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor: 'rgb(255,255,255)'
  }
}

export default App
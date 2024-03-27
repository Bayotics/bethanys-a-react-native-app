import * as React from 'react';
import { WebView } from 'react-native-webview';
/* @hide */
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
/* @end */

export default function Tube() {
  return (
    <View>
        <Text>TESTING</Text>
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<h1><center>Hello world</center></h1>' }}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

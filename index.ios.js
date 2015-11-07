/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var AudioManager = require('NativeModules').AudioManager;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var sccios = React.createClass({
  playClicked: function() {
    AudioManager.play();
  },
  stopClicked: function() {
    AudioManager.stop();
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Salut cest cool Radio
        </Text>
        <Text style={styles.instructions}>
          salutcestcool.com
      </Text>
        <Button style={styles.button} onPress={this.playClicked}>Play</Button>
        <Button style={styles.button} onPress={this.stopClicked}>Stop</Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
  },
  buttonText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('sccios', () => sccios);

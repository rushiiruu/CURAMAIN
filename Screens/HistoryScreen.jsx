import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SignScreen;

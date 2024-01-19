import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function IntroductionScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default IntroductionScreen;

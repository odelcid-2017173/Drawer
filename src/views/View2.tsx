import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';

const Vista2 = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Level Up</Text>
 
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg',
        }}
      />
    </View>
  );
};

export default Vista2;

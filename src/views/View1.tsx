import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';

const Vista1 = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Buenos Dias</Text>
      <Text style={styles.text}>Ejemplo Oscar Joel</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg',
        }}
      />
    </View>
  );
};

export default Vista1;

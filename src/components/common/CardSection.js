import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
return (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      //order horizontal(row) instead vertical(column)(default)
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
  }
};

export { CardSection };

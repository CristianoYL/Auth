import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { pressAction, buttonText } = props;
  return (
    <TouchableOpacity onPress={pressAction} style={buttonStyle}>
      <Text style={textStyle}>
        { buttonText }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export { Button };

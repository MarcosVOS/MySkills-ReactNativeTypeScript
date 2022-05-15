import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title:string
}

export function Button({title,...rest} : ButtonProps ){ 
    return (
        <TouchableOpacity 
        style={style.button} 
        {...rest}
        >
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight:'bold',
    },
  
  }
);
  
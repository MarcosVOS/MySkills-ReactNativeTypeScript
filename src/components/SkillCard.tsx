import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
  skill:string;
}

export function SkillCard({skill,...rest}: SkillCardProps){
    return(
        <TouchableOpacity 
          style={style.buttonSkill}
          {...rest}
        >
            <Text 
              style={style.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonSkill: {
      backgroundColor: '#1f1e25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10,
    },
    textSkill:{
      color:'#FFF',
      fontSize:18,
      fontWeight:'bold',   
    }
  });
  
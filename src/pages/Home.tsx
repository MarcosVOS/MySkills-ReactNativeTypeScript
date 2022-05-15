/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id:string;
    name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings,setGreeting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id:String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string){
      setMySkills(oldState=>oldState.filter(
        skill => skill.id !== id 
      ))
  }

  useEffect(()=>{
    const currentHour = new Date().getHours();
    if (currentHour < 12){
      setGreeting('Good morning');
    }
    else if (currentHour >= 12 && currentHour < 18){
      setGreeting('Good afternoon');
    }
    else {
      setGreeting('Good night');
    }

    },[mySkills]);

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome, Marcos</Text>
      <Text style={style.greetings}>
        {greetings}
      </Text>
      <TextInput style={style.input} placeholder="New Skill" placeholderTextColor="#555" onChangeText={setNewSkill} />
      <Button title='Add' onPress={handleAddNewSkill} activeOpacity={0.7}/>

      <Text style={[style.title, {marginVertical:50}]} >My Skills</Text>


      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(<SkillCard skill={item.name} onPress={()=>handleRemoveSkill(item.id)}/>)}
      />

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings:{
    color:'#FFF'
  }
});

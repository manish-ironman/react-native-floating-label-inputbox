import React,{useState} from 'react'
import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import InputBox from 'react-native-floating-label-inputbox'
import InputBox from './src/components/InputBox.js'
const App = () => {
  const [name,setName]=useState("Manish")

  const [name1,setName1]=useState("")

  
  console.log("Res",name)
  return (
     <View style={{padding:10,marginTop:200}}>
       {/* <InputBox
        //inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Email Address'}
        leftIcon={<Ionicons name={'person'} size={20}/>}
         isInvalid={true}
         alertText={"fdfd"}
       />

<InputBox
        //inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Email Address'}
        rightIcon={<Ionicons name={'person'} size={20}/>}
       //isInvalid={true}
       />

<InputBox
        inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Name'}
        //leftIcon={<Ionicons name={'person'} size={20}/>}
       isInvalid={true}
       />

<InputBox
        inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Name'}
        //leftIcon={<Ionicons name={'person'} size={20}/>}
       isInvalid={true}
       />

<InputBox
        //inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Name'}
        //leftIcon={<Ionicons name={'person'} size={20}/>}
       isInvalid={true}
       />

<InputBox
        inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Name'}
        leftIcon={<Ionicons name={'person'} size={20}/>}
       isInvalid={true}
       /> */}

<InputBox
        inputOutline
        value={name}
        onChangeText={(e)=>setName(e)}
        label={'Name'}
        required
        isInvalid={name?null:true}
       />

       <InputBox
        inputOutline
        value={name1}
        onChangeText={(e)=>setName1(e)}
        label={'Password'}
        rightIcon={<FontAwesome name={'eye'} size={20}/>}
        passHideIcon={<FontAwesome name={'eye-slash'} size={20}/>}
        required
        secureTextEntry
       />




     </View> 

    

  )
}

export default App

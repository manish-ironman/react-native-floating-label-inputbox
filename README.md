
# React Native Floating Label Input 

  In this TextInput included many  functionality  like floating placeholder, validation warning with custom alert text  and also added Left or Right icon set in Inputbox.
  ## Instalation
  To install just input the following command:
  
        
	 npm i react-native-floating-label-inputbox
or

	 yarn add react-native-floating-label-inputbox

## Screenshot
  


| inputOutline Style     | Default style| Required Field   |
| :----:        |    :----:   |          :----: |
|  [<img src="https://i.ibb.co/qC66P5N/ezgif-com-gif-maker.gif" width="250"/>](https://i.ibb.co/qC66P5N/ezgif-com-gif-maker.gif) |  [<img src="https://i.ibb.co/hgqS2hZ/ezgif-com-gif-maker-2.gif" width="250"/>](https://i.ibb.co/hgqS2hZ/ezgif-com-gif-maker-2.gif)| [<img src="https://i.ibb.co/kD12br5/ezgif-com-gif-maker-1.gif" width="250"/>](https://i.ibb.co/kD12br5/ezgif-com-gif-maker-1.gif)  |

 [<img src="https://i.ibb.co/gd7LJ2g/ezgif-com-gif-maker.gif" width="250"/>](https://i.ibb.co/gd7LJ2g/ezgif-com-gif-maker.gif)

## Props

| Props     | Type| Description     |
| :---        |    :----:   |          :--- |
|    label |  Text      | It is a placeholder and label.  |
|   required | boolean |Default false, when it is true then required red star show. 
|   isInvalid | boolean |Default false, when it is true then warning show. 
|   alertText | Text |  Set text for warning.
|   customLabelStyle | object|  For Styling of label.
|   inputboxStyle | object | For styling of inputbox .
|   warningStyle | object |  For Styling of warning.
|   inputOutline | boolean |  Default false,when it is true then Outline field show.
|   leftIcon | View Components |  Set left Icon.
|   rightIcon | View Components |  Set right Icon.
|   onChangeText| Fuction|  Callback function for set value of input box .
|   value| variable|  set value of input box.
|   secureTextEntry| boolean|Default is false When it is true then create password inputbox.
|   passHideIcon| View Components| set Password Hide icon. 

## Example of Default Inputbox

 ```js
     import  React,{useState} from  'react'
     import {View,Text} from  'react-native'
     import InputBox from 'react-native-floating-label-inputbox'
     
     const App = () => {
          const [name,setName]=useState("")
     
        return (
                <View style={{padding:10}}>
                  <InputBox
                    inputOutline
                    label={'Name'}
                    value={name}
                    onChangeText={(e)=>setName(e)}
                    />
                </View>            
       )
       }
     export  default  App
```    


## Example of  Password Inputbox with Show/Hide Password
When set icons in inputbox firstly install  react-native-vector-icons or other Libraries  and configure it .

      npm i react-native-vector-icons
 
  After that you can import that library

 ```js
     import  React,{useState} from  'react'
     import {View,Text} from  'react-native'
     import InputBox from 'react-native-floating-label-inputbox'
     import  FontAwesome  from  'react-native-vector-icons/FontAwesome'
     
     const App = () => {
          const [password,setPassword]=useState("")
     
        return (
                <View style={{padding:10}}>
                
                  <InputBox
                    inputOutline
                    label={'Password'}
                    value={password}
                    onChangeText={(e)=>setPassword(e)}
                    required
                    secureTextEntry
                    rightIcon={<FontAwesome  name={'eye'}  size={20}/>}
              passHideIcon={<FontAwesome  name={'eye-slash'} size{20}/>}
                    />
                    
                </View>            
       )
       }
     export  default  App
```   
 
    
    

 
## Important

Rest of props are same as of InputText


---


Thank-you ??????
Manish Kumar Choudhary





 

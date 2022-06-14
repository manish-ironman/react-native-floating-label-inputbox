import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  Animated,
  Text,
  TouchableOpacity
} from 'react-native';

const InputBox = (props) => {
  const [isFocused, setIsFocused] = useState(false)
  const { label, required, value, isInvalid, inputboxStyle, inputOutline, leftIcon, rightIcon,customLabelStyle,warningStyle,alertText,secureTextEntry,passHideIcon, ...prop } = props;
  const [passwordEnabled,setPasswordEnabled]=useState()
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => { value ? null : setIsFocused(false) };
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
  const [textBox, setTextbox] = useState()
  const handlePass = () => {
    setPasswordEnabled(!passwordEnabled)
    console.log("clicked")
  };
   
  const InputStyle = {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 0.60,
    borderBottomColor: isInvalid ? "red" : '#555',
    marginLeft: 10
  }

  const OutlineStyle = {
    fontSize: 16,
    color: '#000',
    borderWidth: 0.60,
    borderRadius: 8,
    borderColor: isInvalid ? "red" : '#555',
    padding: 10

  }



  useEffect(() => {
    Animated.timing(animatePress, {
      toValue: isFocused ? 1 : 0,
      useNativeDriver: false,
      duration: 200,
    }).start();
  })

  useEffect(() => {
    value ? setIsFocused(true) : setIsFocused(false)
    secureTextEntry?setPasswordEnabled(true):setPasswordEnabled(false)
  }, [])



  useEffect(() => {
    inputOutline ? setTextbox(OutlineStyle) : setTextbox(InputStyle)
  }, [isInvalid])

  useEffect(()=>{
    console.log("Pass",passwordEnabled)
  },[passwordEnabled])

  const labelStyle = {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 1,
    shadowColor: "white",
    position: "absolute",
    left: 30,

    top: animatePress.interpolate({
      inputRange: [0, 1],
      outputRange: [21, 0],
    }),
    fontSize: animatePress.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: animatePress.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };


  const RenderInputBox = () => {
      
    if (leftIcon) {
      return (
        <>
          <View style={{ paddingTop: 8, marginTop: 8, backgroundColor: "white" }}>

            <Animated.Text style={[labelStyle,customLabelStyle]}>
              {label}
              {required ? <Text style={{ color: "red" }}> * </Text> : null}
            </Animated.Text>
            <View style={[{ flexDirection: "row" }, textBox, { padding: 0 }, inputboxStyle]}>

              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                
                {
                  secureTextEntry?
                  <TouchableOpacity
                   onPress={handlePass}
                  >
                    { passwordEnabled?leftIcon:passHideIcon }
                    
                
                  </TouchableOpacity>:{leftIcon}
                 }
              </View>
              <View style={[{ flex: 10 }]}>

                <TextInput
                  {...prop}
                  //style={[textBox,style]}
                  secureTextEntry={passwordEnabled}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  blurOnSubmit
                  value={value}
                />
              </View>

            </View>


            {isInvalid ? <Text style={{ color: "red", marginTop: 8, marginLeft: 10 }}>{label} is required</Text> : null}

          </View>
        </>
      )
    } else if (rightIcon) {
      return (
        <>
          <View style={{ paddingTop: 8, marginTop: 8, backgroundColor: "white" }}>

            <Animated.Text style={[labelStyle, { marginLeft: -10 },customLabelStyle]}>
              {label}
              {required ? <Text style={{ color: "red" }}> * </Text> : null}
            </Animated.Text>
            <View style={[{ flexDirection: "row" }, textBox, { padding: 0 }, inputboxStyle]}>

              <View style={{ flex: 0.6 }}>

              </View>
              <View style={[{ flex: 10 }]}>

                <TextInput
                  {...prop}
                  //style={[textBox,style]}
                  secureTextEntry={passwordEnabled}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  blurOnSubmit
                  value={value}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                 {
                  secureTextEntry?
                  <TouchableOpacity
                   onPress={handlePass}
                  >
                     { passwordEnabled?rightIcon:passHideIcon }
                  </TouchableOpacity>: {rightIcon}
                 }
               
              </View>
            </View>


            {isInvalid ? <Text style={{ color: "red", marginTop: 8, marginLeft: 10 }}>{alertText?alertText:label+" is required" }</Text> : null}

          </View>
        </>
      )
    } else {
      return (
        <>
          <View style={{ paddingTop: 8, marginTop: 5, backgroundColor: "white" }}>

            <Animated.Text style={[labelStyle, { left: 0 },customLabelStyle]}>
              {label}
              {required ? <Text style={{ color: "red" }}> * </Text> : null}
            </Animated.Text>
            <TextInput
              {...prop}
              style={[textBox, inputboxStyle]}
              secureTextEntry={secureTextEntry?true:null}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
              value={value}
            />


            {isInvalid ? <Text style={[{color: "red", marginTop: 8, marginLeft: 10 },warningStyle]}>{label} is required</Text> : null}

          </View>
        </>
      )
    }

  }


  return (

    <>
      {
        RenderInputBox()
      }
    </>


  )
}

export default InputBox

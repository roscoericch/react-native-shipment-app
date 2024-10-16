import { StyleSheet, TextInput, Pressable, Animated, View, KeyboardAvoidingView, Platform, Text, Alert, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCallback, useContext, useState } from 'react';
import { FloatingLabelInput } from '@/components/FloatingLabelInput';
import { LoginValue } from '@/types';
import { router } from 'expo-router';
import { AppContext } from '@/context/AppContext';
import axios from '@/api/axios';



export default function LoginScreen() {
  const {setUsername} = useContext(AppContext);
  const [value, setValue] = useState<LoginValue>({usr:"", pwd:""});
  const [loading,setLoading] = useState(false);
  const onChangeText = useCallback((key:keyof LoginValue,value:string)=>{
    setValue((prev)=>({...prev, [key]:value}))
  },[]);
  const isFormValid = useCallback(() => {
    return value.usr !== "" && value.pwd !== "";
  }, [value]);
  const showErrorAlert = (message:string) => {
    Alert.alert(
      'Error',
      message,
      [
        { text: 'OK' },
      ],
      { cancelable: false }
    );
  };
  const handleLogin = () => {
    setLoading(true);
    axios.post("/login",value)
    .then((res)=>{
      setUsername(res?.data?.full_name);
      router.replace("/(tabs)");
    })
    .catch((err)=>{
      showErrorAlert(err?.message || err.data?.message || "Something went wrong")
    })
    .finally(()=>{
      setLoading(false);
    });
  };
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ThemedView style={styles.container}>
        <View style={styles.formView} >
          <ThemedText style={styles.headerText} type="title">Login</ThemedText>
          <ThemedText style={styles.formText} type="default">
          Please enter your First, Last name and your phone number in order to register
          </ThemedText>
          <FloatingLabelInput onChangeText={(value)=>onChangeText("usr",value)} value={value.usr} label='Username / Email' />
          <FloatingLabelInput onChangeText={(value)=>onChangeText("pwd",value)} value={value.pwd} label='Password' secureTextEntry />
        </View>
        <Pressable onPress={handleLogin} disabled={!isFormValid()} style={[styles.button, { backgroundColor: isFormValid() ? "#2F50C1" : "#EAE7F2" }]} >
          {loading?<ActivityIndicator size={"small"} />:<ThemedText style={[styles.buttonText, {color: isFormValid() ?"#FFFFFF":"#A7A3B3" }]}>Login</ThemedText>}
        </Pressable>
      </ThemedView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor:"#FFFF"
  },
  headerText: {
    color:"#000000",
    fontSize: 34,
    fontWeight: 800,
    marginBottom:"10%"
  },
  formText: {
    color:"#757281",
  },
  formView: {
    display:"flex",
    marginBottom:"auto",
    backgroundColor: "transparent",
    alignItems:"stretch",
    justifyContent:"center",
    width:"100%",
    gap:15
  },
  button: {
    width: "100%",
    borderRadius: 10,
    padding: 14,
    justifyContent:"flex-end",
    alignContent:"center",
    alignSelf:"flex-end",
    textAlign:"center"
  },
  buttonText: {
    textAlign:"center",
    fontSize:17,
    fontWeight:"bold"
  }
});

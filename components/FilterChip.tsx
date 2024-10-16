import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FilterChip = ({text, onToggle, active}:{text:string, onToggle:()=>void, active:boolean}) => {
  return (
    <TouchableOpacity onPress={()=>onToggle()}>
        <View style={[styles.container, {borderColor: active?"#6E91EC":"#F4F2F8"}]}>
            <Text style={[styles.text,{color: active?"#2F50C1":"#58536E"}]}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      fontWeight: "medium",
      textAlign:"center"
    },
    container: {
      borderRadius:10,
      height:40,
      width:93,
      padding:10,
      borderWidth:1,
      backgroundColor:"#F4F2F8",
      marginRight:30
    }
});

export default FilterChip
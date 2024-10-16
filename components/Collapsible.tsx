import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Checkbox from 'expo-checkbox';
import DropdownIcon from './icons/DropdownIcon';
import { StatusLabel } from './StatusLabel';
import ArrowIcon from './icons/ArrowIcon';
import { shipment } from '@/types';
import { AppContext } from '@/context/AppContext';

export function Collapsible({item}:{item:shipment}) {
  const [isOpen, setIsOpen] = useState(false);
  const {selectedItems, updateSelectedItems} = useContext(AppContext);
  return (
    <ThemedView style={styles.container}>
      <View style={styles.topContent}>
      <Checkbox value={selectedItems.includes(item?.name)} onValueChange={(value)=>{
        if(value){
          updateSelectedItems([...selectedItems,item?.name])
        } else {
          updateSelectedItems([...selectedItems.filter((e)=> e !== item?.name)])
        }
      }} />
      <Image style={styles.box} source={require("@/assets/images/box.png")} />
      <View style={styles.topGroup}>
        <Text style={styles.title}>AWB</Text>
        <Text style={styles.trackingNumber}>{item?.name}</Text>
        <View style={styles.destinationLayout}>
          <Text style={styles.destination}>{item?.origin_country}</Text>
          <ArrowIcon />
          <Text style={styles.destination}>{item?.destination_country}</Text>
        </View>
      </View>
      <StatusLabel item={item} />
      <TouchableOpacity
      onPress={() => setIsOpen((value) => !value)}
      activeOpacity={0.8}
      >
      <DropdownIcon open={isOpen} />
      </TouchableOpacity>
      </View>
      {isOpen && <ThemedView style={styles.bottomContent}>
        <View style={styles.destinationLayout}>
          <View style={styles.topGroup}>
          <Text>Origin</Text>
          <Text style={styles.trackingNumber}>{item?.origin_country}</Text>
          <Text style={styles.title}>{item?.origin_city}</Text>
          <Text style={styles.destination}>{item?.origin_address_line_1}</Text>
          </View>
          <ArrowIcon size={20} />
          <View style={styles.topGroup}>
          <Text>Destination</Text>
          <Text style={styles.trackingNumber}>{item?.destination_state}</Text>
          <Text style={styles.title}>{item?.destination_city}</Text>
          <Text style={styles.destination}>{item?.destination_address_line_1}</Text>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <Pressable style={[styles.pressableLayout, {backgroundColor:"#6e83f0"}]}>
            <Ionicons size={20} color={"white"} name='call' />
            <Text style={styles.btnText}>Call</Text>
          </Pressable>
          <Pressable style={[styles.pressableLayout, {backgroundColor:"#2ded6d"}]}>
            <Ionicons size={20} color={"white"} name='chatbubble' />
            <Text style={styles.btnText}>Whatsapp</Text>
          </Pressable>
          </View>
        </ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F4F2F8",
    borderRadius:10
  },
  topContent:{
    display:"flex",
    flexDirection:"row",
    padding:10,
    justifyContent:"space-between",
    alignItems:"center",
    alignContent:"space-between",
    backgroundColor:"#F4F2F8",
    borderRadius:10
  },
  topGroup:{
    display:"flex"
  },
  title: {
    color:"#3F395C",
    fontSize:13,
    fontWeight:"regular"
  },
  trackingNumber:{
    fontSize:18,
    fontWeight:"semibold",
    color:"#000000"
  },
  destination:{
    color:"#757281",
    fontSize:13,
    fontWeight:"regular"
  },
  destinationLayout:{
    display:"flex",
    gap:2,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
  bottomContent:{
    flex:1,
    padding:10,
    backgroundColor:"#F4F2F8",
    borderBottomEndRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    gap:5,
    borderTopWidth:2,
    borderTopColor:"#FFFFFF",
    borderStyle:"dashed"
  },
  box: {
    height:40,
    width:40
  },
  pressableLayout: {
    borderRadius:10,
    display:"flex",
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    alignItems:"center",
    height:44,
    paddingHorizontal:24,
    paddingVertical:6,
  },
  btnText: {
    color:"#FFFFFF",
    fontSize:16,
    fontWeight:"regular"
  },
  btnGroup:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    gap:10
  }
});

import React, { SetStateAction, useContext, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ThemedText } from './ThemedText';
import FilterChip from './FilterChip';
import { AppContext } from '@/context/AppContext';

const FilterPopup = ({modalVisible,setModalVisible, onQuery}:{modalVisible:boolean,setModalVisible:React.Dispatch<SetStateAction<boolean>>,onQuery:(filters:string[])=>void}) => {
  const {shipmentStatus} = useContext(AppContext);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
    >
    <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
        <View style={styles.headers}>
            <TouchableOpacity onPress={()=>{
                setModalVisible(false);
                setSelectedFilters([]);
                onQuery([])
            }}>
                <ThemedText type="link">Cancel</ThemedText>
            </TouchableOpacity>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={()=>{
                setModalVisible(false);
                onQuery(selectedFilters);
            }}>
                <ThemedText type="link">Done</ThemedText>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
        <Text style={styles.title}>Shipment Status</Text>
        <FlatList
          data={shipmentStatus}
          horizontal={false}
          numColumns={3}
          renderItem={({ item }) => <FilterChip text={item?.name} onToggle={()=>{
            if(selectedFilters.includes(item?.name)){
                setSelectedFilters((prev)=>([...prev.filter((e)=>e !== item?.name)]))
            } else {
                setSelectedFilters((prev)=>([...prev,item?.name]))
            }
          }} active={selectedFilters.includes(item?.name)} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={()=><View style={styles.seperator}></View>}
          showsHorizontalScrollIndicator={false}
        />
        </View>
        </View>
    </View>
    </Modal>
  );
};

export default FilterPopup;

const styles = StyleSheet.create({
    filterButton: {
      backgroundColor: '#2F50C1',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    headers:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        borderBottomWidth: 0.5,
        borderColor:"#000000",
        paddingVertical:15,
        paddingHorizontal:20
    },
    content: {
        padding:20,
        display:"flex",
        gap:5
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      backgroundColor: '#fff',
    //   padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom:5,
      color:"#58536E"
    },
    option: {
      paddingVertical: 10,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    closeButton: {
      marginTop: 20,
      alignItems: 'center',
    },
    closeText: {
      color: '#2F50C1',
      fontSize: 16,
    },
    seperator: {
        width:30,
        height:10
    },
});
  
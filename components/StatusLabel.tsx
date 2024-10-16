import { AppContext } from '@/context/AppContext';
import { shipment } from '@/types';
import { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export type StatusLabelProps = {
  item:shipment;
};

export function StatusLabel({
  item
}: StatusLabelProps) {
  const {shipmentStatus} = useContext(AppContext);
  const status = shipmentStatus.find((e) => e.name === item.status);
  return (
    <View style={[styles.container,{backgroundColor:"#D9E6FD"}
    ]}>
    <Text
      style={[
        styles.text,
        {color:status?.color??"#58536E"}
      ]}
    >{status?.name?.toLocaleUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign:"center",
    opacity:100,
    zIndex:1
  },
  container: {
    borderRadius:4,
    height:23,
    width:66,
    padding:4,
    opacity:0.4
  }
});

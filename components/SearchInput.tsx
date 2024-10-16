import { SearchInputProps } from '@/types';
import React, { useRef, useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import CancelIcon from './icons/CancelIcon';
import SearchIcon from './icons/SearchIcon';

const SearchInput = ({onQuery, value }:SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query,setQuery] = useState(value ?? "");
  const textInputRef = useRef<TextInput>(null);
  return (
    <View style={[styles.inputContainer,{borderColor: isFocused?"#6E91EC":"#A7A3B3"}]}>
        <TouchableOpacity onPress={()=>textInputRef?.current?.blur()} style={styles.searchIcon}>
            <SearchIcon color={isFocused?"#6E91EC":"#A7A3B3"} />
        </TouchableOpacity>
        <TextInput 
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
                setIsFocused(false);
                onQuery(query);
            }} 
            placeholder='Search'
            value={query}
            onChangeText={(value)=>setQuery(value)}
            style={styles.input}
            ref={textInputRef}
            placeholderTextColor={"#A7A3B3"}
            cursorColor={"#000000"}
        />
        {
            isFocused && (
            <TouchableOpacity onPress={()=>{
                onQuery("");
                setQuery("")
                textInputRef?.current?.blur();
                }} style={styles.cancelIcon}>
                <CancelIcon />
            </TouchableOpacity>
            )
        }
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      position: 'relative',
      paddingTop: 10,
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 40,
      height: 40,
      borderWidth:1
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#2F50C1',
      zIndex:0,
      height:40,
      paddingHorizontal:30,
      paddingBottom:10
    },
    searchIcon: {
        position:"absolute",
        left:10,
        zIndex:1
    },
    cancelIcon: {
        position:"absolute",
        right:10,
        zIndex:1
    }
});

export default SearchInput;
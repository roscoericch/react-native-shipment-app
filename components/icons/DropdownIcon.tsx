import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const DropdownIcon = ({open}:{open:boolean}) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Rect y="0.5" width="24" height="24" rx="12" fill={open?"#4561DB":"white"}/>
    <Path d="M13.4711 7.16675H17.3334M17.3334 7.16675V11.0288M17.3334 7.16675L12.8274 11.6725M10.5291 17.8334H6.66675M6.66675 17.8334V13.9713M6.66675 17.8334L11.1728 13.3277" stroke={open?"white":"#4561DB"} fill={"white"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default DropdownIcon
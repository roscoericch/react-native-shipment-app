import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowIcon = ({size=9}:{size?:number}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none">
    <Path d="M4.88889 1.58325L7.66667 4.49992M7.66667 4.49992L4.88889 7.41659M7.66667 4.49992L1 4.49992" stroke="#2F50C1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default ArrowIcon
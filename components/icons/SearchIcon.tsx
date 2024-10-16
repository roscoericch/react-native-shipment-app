import SVG, { Path } from "react-native-svg"

const SearchIcon = ({color}:{color:string}) => {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M16.927 17.0401L20.4001 20.4001M19.2801 11.4401C19.2801 15.77 15.77 19.2801 11.4401 19.2801C7.11019 19.2801 3.6001 15.77 3.6001 11.4401C3.6001 7.11019 7.11019 3.6001 11.4401 3.6001C15.77 3.6001 19.2801 7.11019 19.2801 11.4401Z" stroke={color} stroke-width="2" stroke-linecap="round"/>
    </SVG>
  )
}

export default SearchIcon
import SVG, { Path, Rect } from "react-native-svg";

const NotificationIcon = () => {
  return (
    <SVG width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Rect width="40" height="40" rx="20" fill="#F4F2F8"/>
    <Path d="M17.3333 28.0909C18.041 28.6562 18.9755 29 20 29C21.0245 29 21.959 28.6562 22.6667 28.0909M12.5076 25.1818C12.086 25.1818 11.8505 24.5194 12.1056 24.1514C12.6974 23.2975 13.2686 22.0451 13.2686 20.537L13.293 18.3517C13.293 14.2915 16.2958 11 20 11C23.7588 11 26.8058 14.3399 26.8058 18.4599L26.7814 20.537C26.7814 22.0555 27.3329 23.3147 27.9006 24.169C28.1458 24.5379 27.9097 25.1818 27.4933 25.1818H12.5076Z" stroke="#2F50C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SVG>
  )
}

export default NotificationIcon
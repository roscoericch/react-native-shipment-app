import { Image, Pressable, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function LandingScreen() {
  return (
      <ThemedView style={styles.container}>
        <ThemedView style={styles.logoContainer}>
            <Image
            source={require('@/assets/images/splash-white.png')}
            />
        </ThemedView>
        <Pressable onPress={()=>router.push("/login")} style={styles.button}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </Pressable>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F50C1",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  logoContainer: {
    alignSelf:"center",
    justifyContent:"center",
    flex:1,
    backgroundColor: "transparent"
  },
  button: {
    backgroundColor: "#FFFFFF",
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
    color:"#2F50C1",
    fontSize: 20
  }
});

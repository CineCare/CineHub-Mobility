import { Image, Pressable, StyleSheet, Text } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { HelloWave } from '@/components/HelloWave';
import { Button } from '@/components/Button';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/assortiment-elements-cinema-fond-rouge-espace-copie.webp')}
          style={styles.reactLogo}
          resizeMode='cover'
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenue !</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          On vous prépare une apppli aux petits oignons, sur mobiles et tablettes, cette fois !
        </ThemedText>
        <Link href="/streams" asChild>
          <Pressable style={styles.linkContent}>
            <Text style={styles.linkLabel}>Streams</Text>
          </Pressable>
            
        </Link>
      </ThemedView>
      
    </ParallaxScrollView>
  );
  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 220,
    width: 'auto'
  },
  linkContent: {
    width: 320,
    height: 68,
    marginHorizontal: 'auto',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  linkLabel: {
    color: '#000',
    fontSize: 16,
  }
});

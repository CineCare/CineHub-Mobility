import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export default function Stream() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                source={require('@/assets/images/assortiment-elements-cinema-fond-rouge-espace-copie.webp')}
                style={styles.headerImage}
                resizeMode='cover'
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Bienvenue !</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                Test nouvelle vue
                </ThemedText>
                <Link href="/" asChild>
                    <Pressable style={styles.linkContent}>
                        <Text style={styles.linkLabel}>Home</Text>
                    </Pressable>
                </Link>
                
            </ThemedView>
      
        </ParallaxScrollView>
    )
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
      headerImage: {
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
})
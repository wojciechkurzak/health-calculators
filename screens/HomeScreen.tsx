import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Witaj</Text>
            <NavigationButton text='BMI calculator' route='Bmi'/>
            <NavigationButton text='Promil calculator' route='Promil'/>
            <NavigationButton text='Calories calculator' route='Calories'/>
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1,
    },
    text:{
        textAlign: 'center',
        fontSize: 34,
        marginBottom: 60,
        color: '#000'
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
 
export default HomeScreen;
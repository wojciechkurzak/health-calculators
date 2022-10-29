import * as React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../App'
import { LinearGradient } from 'expo-linear-gradient'

type StackNavigation = StackNavigationProp<StackParamList>

enum Routes {
	Home = 'Home',
	Bmi = 'Bmi',
	Calories = 'Calories',
	Promil = 'Promil',
}

type PropsType = {
	text: string
	route: Routes
}

const NavigationButton = ({ text, route }: PropsType) => {
	const navigation = useNavigation<StackNavigation>()

	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate(route)}>
			<View style={styles.container}>
				<LinearGradient
					start={{ x: 1, y: 0 }}
					end={{ x: 0, y: 1 }}
					colors={['#4c669f', '#3b5998', '#192f6a']}
					style={styles.gradient}
				>
					<Text style={styles.text}>{text}</Text>
				</LinearGradient>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 50,
		backgroundColor: 'transparent',
		marginTop: 40,
	},
	gradient: {
		borderRadius: 4,
	},
	text: {
		textAlign: 'center',
		color: '#fff',
		lineHeight: 50,
		fontSize: 18,
	},
})

export default NavigationButton

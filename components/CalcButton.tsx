import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'

type PropsType = {
	text: string
	onPress(): void
}

const CalcButton = ({ text, onPress }: PropsType) => {
	return (
		<TouchableNativeFeedback onPress={() => onPress()}>
			<View style={styles.buttonContainer}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#eb1555',
		height: 40,
		borderRadius: 8,
		marginTop: 20,
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
	},
})

export default CalcButton

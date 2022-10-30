import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'

type PropsType = {
	text: string
	onPress: Function
}

const CalcButton = ({ text, onPress }: PropsType) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress()}>
			<View style={styles.buttonContainer}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#eb1555',
		height: 40,
		borderRadius: 8,
		marginTop: 20,
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		lineHeight: 40,
		fontWeight: '500',
	},
})

export default CalcButton

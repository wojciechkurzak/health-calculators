import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'

type PropsType = {
	text: string
	value: boolean
	onPress: Function
}

const GenderButton = ({ text, value, onPress }: PropsType) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress()}>
			<View style={[styles.buttonContainer, value && styles.checked]}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderWidth: 1,
		borderColor: '#111328',
		borderRadius: 8,
		height: 50,
		backgroundColor: '#111328',
		flexBasis: '48%',
	},
	checked: {
		borderColor: '#eb1555',
		backgroundColor: '#1d1e33',
	},
	text: {
		textAlign: 'center',
		lineHeight: 50,
		color: '#fff',
	},
})

export default GenderButton

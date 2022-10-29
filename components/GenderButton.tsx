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
		borderColor: '#000',
		borderRadius: 8,
		height: 50,
		backgroundColor: 'transparent',
		flexBasis: '48%',
	},
	checked: {
		backgroundColor: '#f00',
	},
	text: {
		textAlign: 'center',
		lineHeight: 50,
	},
})

export default GenderButton

import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from '@expo/vector-icons/Octicons'

type AddButtonProps = {
	onPress: Function
}

const AddButton = ({ onPress }: AddButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress()}>
			<View style={styles.buttonContainer}>
				<Icon name="plus" color="#fff" size={26} />
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 32,
		height: 32,
		backgroundColor: '#eb1555',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default AddButton

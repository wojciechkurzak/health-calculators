import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type PropsType = {
	title: string
	value: string
}

const DisplayValue = ({ title, value }: PropsType) => {
	return (
		<View style={styles.container}>
			<Text style={styles.upperText}>{title}</Text>
			<Text style={styles.bottomText}>{value}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 8,
		padding: 10,
		width: 150,
		alignItems: 'center',
	},
	upperText: {
		fontSize: 14,
	},
	bottomText: {
		fontSize: 22,
	},
})

export default DisplayValue

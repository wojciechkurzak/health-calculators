import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CalcButton from '../components/CalcButton'
import DisplayValue from '../components/DisplayValue'

const BmiScreen = () => {
	const [height, setHeight] = useState<string>('')
	const [weight, setWeight] = useState<string>('')
	const [bmi, setBmi] = useState<string>('')

	const CalculateBmi = (): void => {
		if (height.length === 0 || weight.length === 0) return
		const value =
			Math.round(
				(parseInt(weight) / Math.pow(parseInt(height) / 100, 2)) * 10
			) / 10
		setBmi(value.toString())
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={height}
				onChangeText={setHeight}
				keyboardType="numeric"
				placeholder="Wzrost"
			/>
			<TextInput
				style={styles.input}
				value={weight}
				onChangeText={setWeight}
				keyboardType="numeric"
				placeholder="Waga"
			/>
			<CalcButton text="Oblicz" onPress={CalculateBmi} />
			<View style={styles.values}>
				<DisplayValue title="BMI" value={bmi} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 8,
		marginTop: 20,
		padding: 10,
		width: '100%',
		height: 50,
	},
	values: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

export default BmiScreen

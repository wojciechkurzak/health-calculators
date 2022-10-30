import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { CaloriesItemType } from '../types/types'
import ItemsList from '../components/ItemsList'
import CaloriesCard from '../components/CaloriesCard'
import uuid from 'react-native-uuid'
import AddButton from '../components/AddButton'

const CaloriesScreen = () => {
	const [name, setName] = useState<string>('')
	const [calories, setCalories] = useState<string>('')
	const [items, setItems] = useState<CaloriesItemType[]>([])

	const addItem = (): void => {
		if (name.length === 0 || calories.length === 0) return
		const newItem = [
			...items,
			{
				id: uuid.v4().toString(),
				name: name,
				calories: calories,
			},
		]
		setItems(newItem)
	}

	const removeItem = (id: string): void => {
		const filteredItems = items.filter((item) => item.id !== id)
		setItems(filteredItems)
	}

	const renderItem = ({ item }: { item: CaloriesItemType }): JSX.Element => (
		<CaloriesCard item={item} removeItem={removeItem} />
	)

	const calculateCalories = (): string => {
		let totalCalories = 0
		items.forEach((item) => (totalCalories += parseInt(item.calories)))
		return totalCalories.toString()
	}

	return (
		<View style={styles.constainer}>
			<Text style={styles.topText}>{calculateCalories()} kcal</Text>
			<View style={styles.itemContainer}>
				<TextInput
					style={[styles.input, styles.nameInput]}
					value={name}
					onChangeText={setName}
					placeholder="name"
					placeholderTextColor={'#fff'}
				/>
				<TextInput
					style={[styles.input, styles.caloriesInput]}
					value={calories}
					onChangeText={setCalories}
					keyboardType="numeric"
					placeholder="kcal"
					placeholderTextColor={'#fff'}
				/>
				<AddButton onPress={addItem} />
			</View>
			<ItemsList items={items} renderItem={renderItem} maxHeight={420} />
		</View>
	)
}

const styles = StyleSheet.create({
	constainer: {
		flex: 1,
		backgroundColor: '#0a0e21',
		paddingHorizontal: 20,
	},
	topText: {
		marginTop: 20,
		color: '#fff',
		alignSelf: 'center',
		fontSize: 30,
	},
	itemContainer: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		borderRadius: 8,
		padding: 10,
		height: 50,
		backgroundColor: '#1d1e33',
		color: '#fff',
	},
	nameInput: {
		width: '55%',
	},
	caloriesInput: {
		width: '25%',
	},
})

export default CaloriesScreen

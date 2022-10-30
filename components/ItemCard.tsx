import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { ItemType } from '../screens/PromilScreen'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

type PropsType = {
	id: string | number[]
	mililiters: string
	percentage: string
	removeItem: Function
}

const ItemCard = ({ id, mililiters, percentage, removeItem }: PropsType) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{mililiters}ml</Text>
			<Text style={styles.text}>{percentage}%</Text>
			<TouchableWithoutFeedback onPress={() => removeItem(id)}>
				<Icon name="close" color="#fff" size={24} />
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 40,
		backgroundColor: '#1d1e33',
		marginTop: 10,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	text: {
		color: '#fff',
	},
})

export default ItemCard

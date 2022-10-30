import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ItemType } from '../screens/PromilScreen'
import ItemCard from './ItemCard'

type ItemListProps = {
	items: ItemType[]
	removeItem: Function
}

const ItemsList = ({ items, removeItem }: ItemListProps) => {
	const renderItem = ({ item }: { item: ItemType }) => (
		<ItemCard
			mililiters={item.mililiters}
			percentage={item.percentage}
			id={item.id}
			removeItem={removeItem}
		/>
	)

	return (
		<>
			{items.length !== 0 ? (
				<FlatList
					data={items}
					renderItem={renderItem}
					style={styles.list}
				/>
			) : null}
		</>
	)
}

const styles = StyleSheet.create({
	list: {
		marginTop: 10,
		maxHeight: 170,
		flexGrow: 0,
	},
})

export default ItemsList

import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

type PropsType = {
	items: Array<object>
	renderItem(item: object): JSX.Element
}

const ItemsList = ({ items, renderItem }: PropsType) => {
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

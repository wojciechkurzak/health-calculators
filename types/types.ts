import { StackNavigationProp } from '@react-navigation/stack'

export type StackParamList = {
	Home: undefined
	Bmi: undefined
	Promil: undefined
	Calories: undefined
}

export type StackNavigation = StackNavigationProp<StackParamList>

export type PromilItemType = {
	id: string
	mililiters: string
	percentage: string
}

export type CaloriesItemType = {
	id: string
	name: string
	calories: string
}

export type GenderType = {
	male: boolean
	female: boolean
}

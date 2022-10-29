import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import BmiScreen from './screens/BmiScreen'
import PromilScreen from './screens/PromilScreen'
import CaloriesScreen from './screens/CaloriesScreen'

export type StackParamList = {
	Home: undefined
	Bmi: undefined
	Promil: undefined
	Calories: undefined
}

const Stack = createStackNavigator<StackParamList>()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Bmi">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Bmi" component={BmiScreen} />
				<Stack.Screen name="Promil" component={PromilScreen} />
				<Stack.Screen name="Calories" component={CaloriesScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App

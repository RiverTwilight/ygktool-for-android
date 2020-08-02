import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
	return (
		// eslint-disable-next-line react-native/no-inline-styles
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate('Details', {
				data: 123
			})} />
		</View>
	);
}

function DetailsScreen({ route, navigation }) {
	const { data } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>{ data }</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push('Details')}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="云极客工具beta" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

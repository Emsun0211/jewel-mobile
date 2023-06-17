import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signup } from "../screens/SignupScreen";
import { TabNavigation } from "./TabNavigatios";
import { LoginScreen } from "../screens/LoginScreen";
import EmailConfrimationScreen from "../screens/EmailConfrimationScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import HomeScreen from "../screens/HomeScreen";
import ChartScreen from "../screens/ChartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Signup' component={Signup} />
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Confirm-email' component={EmailConfrimationScreen} />
			<Stack.Screen name='Welcome' component={WelcomeScreen} />
			<Stack.Screen name='Tabs' component={TabNavigation} />
		</Stack.Navigator>
	);
};

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeTab' component={HomeScreen} />
			<Stack.Screen name='FavouriteTab' component={FavouriteScreen} />
			<Stack.Screen
				name='ProductDetailsHome'
				component={ProductDetailsScreen}
			/>
			<Stack.Screen name='CartTab' component={ChartScreen} />
		</Stack.Navigator>
	);
};

const FavouriteStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeTab' component={HomeScreen} />
			<Stack.Screen name='FavouriteTab' component={FavouriteScreen} />
			<Stack.Screen name='CartTab' component={ChartScreen} />
		</Stack.Navigator>
	);
};
const CartStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeTab' component={HomeScreen} />
			<Stack.Screen name='FavouriteTab' component={FavouriteScreen} />
			<Stack.Screen name='CartTab' component={ChartScreen} />
		</Stack.Navigator>
	);
};

export { MainStack, HomeStack, FavouriteStack, CartStack };

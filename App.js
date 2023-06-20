import { StatusBar } from "expo-status-bar";
import React, { lazy, Suspense } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { TabNavigation } from "./navigations/TabNavigatios";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./navigations/StackNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
	const LoadingIndicator = () => {
		return <ActivityIndicator />;
	};
	return (
		<NavigationContainer>
			<Provider store={store}>
				<MainStack />
			</Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F1D6",
		alignItems: "center",
		justifyContent: "center",
	},
});

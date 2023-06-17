import { StatusBar } from "expo-status-bar";
import React, { lazy, Suspense } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { TabNavigation } from "./navigations/TabNavigatios";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./navigations/StackNavigation";

export default function App() {
	const LoadingIndicator = () => {
		return <ActivityIndicator />;
	};
	return (
		<NavigationContainer>
			<MainStack />
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

import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => navigation.navigate("Tabs"), 3000);
	}, []);
	return (
		<SafeAreaView
			className='flex-1 justify-center bg-[#F4F1D6]'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='items-center mb-10 '>
				<Text className='text-[20px] mb-12 font-[500]'>Welcome to</Text>
				<Image source={require("../assets/jewels_logo.png")} />
			</View>
		</SafeAreaView>
	);
};

export default WelcomeScreen;

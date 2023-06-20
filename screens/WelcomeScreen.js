import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const WelcomeScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			if (authUser) {
				navigation.replace("Tabs");
			}
		});

		return unsubscribe;
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

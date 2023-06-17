import {
	View,
	Text,
	SafeAreaView,
	Image,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Button,
} from "react-native";
import React, { useState } from "react";
// import { Signup } from "../components/Signup";
import { LoginScreen } from "./LoginScreen";
import EmailConfrimationScreen from "./EmailConfrimationScreen";
import WelcomeScreen from "./WelcomeScreen";
import { Feather, Entypo } from "@expo/vector-icons";
import MiniProductCard from "../components/MiniProductCard";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className=' mt-2  border-b-[2px] border-b-gray-400 pb-2'>
				<View className='w-[90%] mx-auto flex-row justify-between items-center '>
					<Image source={require("../assets/Jewels_mobile.png")} />
					<View className='flex-row space-x-5 items-center'>
						<TouchableOpacity>
							<Feather name='search' size={24} color='gray' />
						</TouchableOpacity>
						<TouchableOpacity>
							<Entypo name='menu' size={30} color='black' />
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<ScrollView>
				<View className='mt-5 w-[90%] mx-auto'>
					<Text className='text-[20px] font-[700] text-[#989898]'>
						Popular demand
					</Text>

					<View className='flex-row flex-wrap space-y-4 justify-between'>
						<MiniProductCard
							onPress={() => navigation.navigate("ProductDetailsHome")}
						/>
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
					</View>
				</View>
				<View className='mt-10 mb-5 w-[90%] mx-auto'>
					<Text className='text-[20px] font-[700] text-[#989898]'>
						Suggested
					</Text>

					<View className='flex-row flex-wrap space-y-4 justify-between'>
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

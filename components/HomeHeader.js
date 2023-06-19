import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const HomeHeader = () => {
	return (
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
	);
};

export default HomeHeader;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MiniProductCard = ({ onPress }) => {
	return (
		<View className='mt-5'>
			<TouchableOpacity
				onPress={onPress}
				className='relative h-[180px] w-[165px] bg-[#D5D5D5] items-center justify-center'>
				<Image source={require("../assets/jewelimg1.png")} />
				<TouchableOpacity className='absolute top-2 right-2'>
					<Feather name='heart' size={24} color='gray' />
				</TouchableOpacity>
			</TouchableOpacity>
			<View className='mt-3 pr-2'>
				<Text className='text-[14px] font-[500]'>REVER</Text>
				<Text className='text-[14px] font-[500] text-[#969696]'>
					Fived 18K Gold Necklace
				</Text>
				<Text className='text-[14px] font-[500] text-[#969696] mb-2'>
					w. Lab-Grown Diamonds
				</Text>
				<Text className='text-[14px] font-[500] '>$1200.00</Text>
			</View>
		</View>
	);
};

export default MiniProductCard;

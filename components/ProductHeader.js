import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const ProductHeader = ({ text }) => {
	return (
		<View className=' mt-2  border-b-[2px] border-b-gray-400 pb-4'>
			<TouchableOpacity className='flex-row mt-5 space-x-4 pl-4 '>
				<Feather name='arrow-left' color='gray' size={30} />
				<Text className='text-[20px] font-[600] text-[#1C1B1F]/60'>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProductHeader;

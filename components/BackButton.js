import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const BackButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity className='flex-row mt-5 space-x-4 pl-4 '>
			<Feather name='arrow-left' color='gray' size={24} />
			<Text className='text-[16px] font-[600] text-[#1C1B1F]/60'>{text}</Text>
		</TouchableOpacity>
	);
};

export default BackButton;

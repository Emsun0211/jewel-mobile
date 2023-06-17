import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ title, onPress, className }) => {
	return (
		<TouchableOpacity
			className='text-center flex items-center mb-2 w-full py-3 px-4 bg-[#000000FF] text-[hsla(0,0%,100%,1)] text-sm font-semibold'
			onPress={onPress}
			activeOpacity={0.5}>
			<Text className='text-white font-[700] text-[14px]'>{title}</Text>
		</TouchableOpacity>
	);
};

export default AppButton;

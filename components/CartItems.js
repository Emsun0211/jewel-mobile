import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const CartItems = () => {
	return (
		<View className='w-[351px] h-[173px] mx-auto  pt-5 flex-row px-2  '>
			<View className='w-[80px] h-[80px] bg-[#969696]/30 items-center mr-4 justify-center'>
				<Image
					source={require("../assets/jewelimg2.png")}
					className='w-[60px] h-[60px]'
				/>
			</View>

			<View className='w-[]'>
				<View className=' pr-2 '>
					<Text className='text-[16px] font-[500] text-black/60'>REVER</Text>
					<Text className='text-[14px] font-[500] text-[#969696] w-[200px] '>
						Fived 18K Gold Necklace w. Lab-Grown Diamonds
					</Text>
					<Text className='text-[14px] font-[500] '>$1200.00</Text>
				</View>
				<View className=' flex-row justify-between items-center flex-1'>
					<Text className='text-[16px] font-[500] text-bg/80'>Quantity:</Text>
					<View className=' flex-row w-[100px] p-1 border-[1px] border-[#969696]  space-x-2 items-center justify-between'>
						<TouchableOpacity>
							<Feather name='minus' color='gray' size={18} />
						</TouchableOpacity>
						<TextInput placeholder='1' />
						<TouchableOpacity>
							<Feather name='plus' color='gray' size={18} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<TouchableOpacity>
				<Image source={require("../assets/delete.png")} />
			</TouchableOpacity>
		</View>
	);
};

export default CartItems;

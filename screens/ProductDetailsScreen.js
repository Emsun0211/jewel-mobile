import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import AppButton from "../components/Button";

const ProductDetailsScreen = () => {
	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<ScrollView>
				<View className='flex-row mt-5 space-x-4 pl-4 '>
					<Feather name='arrow-left' color='gray' size={24} />
					<Text className='text-[16px] font-[600] text-[#1C1B1F]/60'>
						Products
					</Text>
				</View>
				<View className='w-[347px] h-[500px] bg-[#D5D5D5] mx-auto mt-5 items-center  relative'>
					<Image
						source={require("../assets/jewelimg2.png")}
						className='w-[250px] mt-12'
					/>
					<View className='flex-row space-x-4 mt-10'>
						<TouchableOpacity className='w-[80px] h-[80px] bg-[#E9E9E9] border-[#969696] items-center justify-center'>
							<Image
								source={require("../assets/jewelimg1.png")}
								className='w-[60px] h-[60px]'
							/>
						</TouchableOpacity>
						<TouchableOpacity className='w-[80px] h-[80px] bg-[#E9E9E9] border-[#969696] items-center justify-center'>
							<Image
								source={require("../assets/jewelimg2.png")}
								className='w-[60px] h-[60px]'
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View className='  w-[347px] mx-auto mt-6'>
					<Text className='font-[700] text-[16px] mb-5'>Quantity:</Text>
					<View className='flex-row space-x-5 '>
						{/* <AppButton title='Add to bag' /> */}
						<TouchableOpacity className='text-center flex-1 items-center   py-3 px-4 bg-[#000000FF] text-[hsla(0,0%,100%,1)] text-sm font-semibold'>
							<Text className='text-white font-[700] text-[14px]'>
								Add to bag
							</Text>
						</TouchableOpacity>
						<View className=' flex-row w-[100px] p-2 border-[1px] border-[#969696] ml-2 space-x-2 justify-between'>
							<TouchableOpacity>
								<Feather name='minus' color='gray' size={24} />
							</TouchableOpacity>
							<TextInput placeholder='1' />
							<TouchableOpacity>
								<Feather name='plus' color='gray' size={24} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProductDetailsScreen;

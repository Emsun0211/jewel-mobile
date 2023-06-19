import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import HomeHeader from "../components/HomeHeader";
import BackButton from "../components/BackButton";
import { Feather } from "@expo/vector-icons";
import CartItems from "../components/CartItems";
import { useNavigation } from "@react-navigation/native";

const BagScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<HomeHeader />
			<ScrollView>
				<BackButton text='Shopping bag ' />
				<View className='mt-8'></View>
				<View className='w-[90%]  mx-auto border-2 pt-5   border-[#969696]/60 '>
					<CartItems />
					<CartItems />
				</View>
				<View className='w-[90%] mt-10  mx-auto border-2 pt-5  px-2 border-[#969696]/60 mb-10 '>
					<Text className='text-[20px] font-[700] text-[#989898]'>
						Product Summary
					</Text>
					<View>
						<View className=' pr-2   justify-between my-2'>
							<Text className='text-[16px] font-[500] text-black/60'>
								REVER
							</Text>
							<View className='flex-row justify-between'>
								<View className='w-[70%]'>
									<Text
										className='text-[14px] font-[500] text-[#969696]  '
										numberOfLines={1}>
										Fived 18K Gold Necklace w. Lab-Grown Diamonds
									</Text>
								</View>
								<Text className='text-[14px] font-[500] text-black/60'>
									$1200.00
								</Text>
							</View>
						</View>

						<View className=' pr-2   justify-between my-2  '>
							<Text className='text-[16px] font-[500] text-black/60'>
								REVER
							</Text>
							<View className='flex-row justify-between'>
								<View className='w-[70%]'>
									<Text
										className='text-[14px] font-[500] text-[#969696]  '
										numberOfLines={1}>
										Fived 18K Gold Necklace w. Lab-Grown Diamonds
									</Text>
								</View>
								<Text className='text-[14px] font-[500] text-black/60'>
									$1200.00
								</Text>
							</View>
						</View>
					</View>
					<View className='border-t-2 border-t-[#969696]/60 border-b-2 border-b-[#969696]/60 py-4 my-5'>
						<View className='flex-row   justify-between my-2 pr-2 '>
							<Text className='text-[14px] font-[500] text-black/60 '>
								Shipping:
							</Text>
							<Text className='text-[14px] font-[500] text-black/60'>
								$00.00
							</Text>
						</View>
						<View className='flex-row   justify-between my-2 pr-2 '>
							<Text className='text-[14px] font-[500] text-black/60 '>
								VAT:
							</Text>
							<Text className='text-[14px] font-[500] text-black/60'>
								$5.00
							</Text>
						</View>
					</View>
					<View className='mb-5 border-b-2 border-b-[#969696]/60 '>
						<View className='flex-row   justify-between pr-2 py-3 '>
							<Text className='text-[14px] font-[500] text-black/60 '>
								Total:
							</Text>
							<Text className='text-[14px] font-[500] text-black/60'>
								$2405.00
							</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("CheckoutTab")}
						className='text-center flex-1 items-center   py-3 px-4 bg-[#000000FF] text-[hsla(0,0%,100%,1)] text-sm font-semibold mb-5'>
						<Text className='text-white font-[700] text-[14px]'>
							Proceed to checkout
						</Text>
					</TouchableOpacity>
					<View className='mb-4'>
						<View className='flex-row items-center space-x-4 mb-3 '>
							<View>
								<Image
									source={require("../assets/local_shipping.png")}
									className=' '
								/>
							</View>
							<View>
								<Text className='text-[14px] font-[500] text-black/60 '>
									Free Shipping:
								</Text>
								<Text className='text-[14px] font-[500] text-[#969696]  '>
									for purchase over $1000
								</Text>
							</View>
						</View>
						<View className='flex-row items-center space-x-4 mb-3'>
							<View>
								<Image source={require("../assets/verified_user.png")} />
							</View>
							<View>
								<Text className='text-[14px] font-[500] text-black/60 '>
									100% insured delivery
								</Text>
								<Text className='text-[14px] font-[500] text-[#969696]  '>
									All shipments are insured
								</Text>
							</View>
						</View>
						<View className='flex-row items-center space-x-4 mb-3 '>
							<Image source={require("../assets/military_tech.png")} />
							<View>
								<Text className='text-[14px] font-[500] text-black/60 '>
									Top rated on trustpilot
								</Text>
								<Text className='text-[14px] font-[500] text-[#969696]  '>
									Our customers rate us above others
								</Text>
							</View>
						</View>
						<View className='flex-row items-center space-x-4 mb-3'>
							<Image source={require("../assets/support_agent.png")} />
							<View>
								<Text className='text-[14px] font-[500] text-black/60 '>
									Ask our Jewelry experts
								</Text>
								<Text className='text-[13px] font-[500] text-[#969696]  '>
									Have you got any questions? we are happy to help
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default BagScreen;

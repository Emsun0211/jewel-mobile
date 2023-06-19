import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import ProductHeader from "../components/ProductHeader";
import { Formik } from "formik";
import AppButton from "../components/Button";

const CheckoutSummaryScreen = () => {
	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<ProductHeader text={"Product Summary"} />
			<ScrollView>
				<View className='w-[90%] mt-10  mx-auto border-2 pt-5  px-2 border-[#969696]/60 mb-5 '>
					<View className='mb-2 flex-row items-center'>
						<Text className='text-[20px] font-[700] text-[#989898] flex-1'>
							Product Summary
						</Text>
						<View>
							<Image source={require("../assets/edit_square.png")} />
						</View>
					</View>
					<View className='pr-2'>
						<View className=' pr-2   justify-between my-2 flex-row space-x-2'>
							<View className='w-[40px] h-[40px] bg-[#969696] items-center justify-center'>
								<Image
									source={require("../assets/jewelimg1.png")}
									className='w-[30px] h-[30px]'
								/>
							</View>
							<View>
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
						<View className=' pr-2   justify-between my-2 flex-row space-x-2'>
							<View className='w-[40px] h-[40px] bg-[#969696] items-center justify-center'>
								<Image
									source={require("../assets/jewelimg1.png")}
									className='w-[30px] h-[30px]'
								/>
							</View>
							<View>
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
					<View className='mb-5  '>
						<View className='flex-row   justify-between pr-2 py-3 '>
							<Text className='text-[14px] font-[500] text-black/60 '>
								Total:
							</Text>
							<Text className='text-[14px] font-[500] text-black/60'>
								$2405.00
							</Text>
						</View>
					</View>
				</View>

				{/* Customer details */}

				<View className='w-[90%] mx-auto border-2 border-[#969696] px-2 py-4 my-5'>
					<View className='flex-row items-center mb-5'>
						<Text className='text-[20px] font-[500] flex-1 text-black/50'>
							Customer's Details
						</Text>
						<View>
							<Image source={require("../assets/edit_square.png")} />
						</View>
					</View>
					<View className='gap-y-5 mb-4'>
						<View className='flex-row gap-x-28'>
							<View className='gap-y-2'>
								<Text className='text-[#969696]'>First Name</Text>
								<Text className='font-[500]'>Emmanuel</Text>
							</View>
							<View className='gap-y-2'>
								<Text className='text-[#969696]'>Last Name</Text>
								<Text className='font-[500]'>Emmanuel</Text>
							</View>
						</View>
						<View>
							<Text className='text-[#969696]'>Email</Text>
							<Text className='font-[500]'>example@example.com</Text>
						</View>
						<View>
							<Text className='text-[#969696]'>Phone Number</Text>
							<Text className='font-[500]'>+2347032342132</Text>
						</View>
						<View>
							<Text className='text-[#969696]'>Home Address</Text>
							<Text className='font-[500]'>123 Jade West Street</Text>
						</View>
						<View>
							<Text className='text-[#969696]'>City</Text>
							<Text className='font-[500]'>Surulere</Text>
						</View>
						<View>
							<Text className='text-[#969696]'>State/Region</Text>
							<Text className='font-[500]'>Lagos</Text>
						</View>
					</View>
					<AppButton title='Pay with Flutterwaves' />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CheckoutSummaryScreen;

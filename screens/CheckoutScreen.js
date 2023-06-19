import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Image,
	TextInput,
} from "react-native";
import React from "react";
import ProductHeader from "../components/ProductHeader";
import AppButton from "../components/Button";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<ProductHeader text={"Checkout"} />
			<ScrollView>
				<View className='w-[90%] mt-10  mx-auto border-2 pt-5  px-2 border-[#969696]/60 mb-5 '>
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

				<View className='w-[90%] mx-auto'>
					<Text className='text-[20px] font-[500] mb-5 text-black/50'>
						Customer's Details
					</Text>
					<Formik
						initialValues={{
							email: "",
							password: "",
							name: "",
							confirmPassword: "",
						}}
						onSubmit={(values) => console.log(values)}>
						{({ handleChange, handleBlur, handleSubmit, values }) => (
							<View className='mb-10'>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									First Name(required)
								</Text>
								<TextInput
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.name}
									placeholder='John'
									className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Last Name(required)
								</Text>
								<TextInput
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.name}
									placeholder='Doe'
									className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Email Address(required)
								</Text>
								<TextInput
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									placeholder='example@example.com'
									className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								<View className='relative'>
									<Text className='text-sm font-semibold text-[#00000099] mb-2'>
										Phone Number
									</Text>
									<View className='flex-row space-x-2 '>
										<TextInput
											onChangeText={handleChange("password")}
											onBlur={handleBlur("email")}
											value={values.password}
											type='password'
											placeholder='+234'
											className='w-[20%] mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
										/>
										<TextInput
											onChangeText={handleChange("password")}
											onBlur={handleBlur("email")}
											value={values.password}
											type='password'
											placeholder='07034321234'
											className='w-[78%] mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
										/>
									</View>
								</View>
								<View>
									<Text className='text-sm font-semibold text-[#00000099] mb-2'>
										Home Address(required)
									</Text>
									<TextInput
										onChangeText={handleChange("confirmpassword")}
										onBlur={handleBlur("confirmpassword")}
										value={values.confirmPassword}
										placeholder='Ajao Estate, Ikeja'
										className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
									/>
								</View>
								<View>
									<Text className='text-sm font-semibold text-[#00000099] mb-2'>
										State/Region(required)
									</Text>
									<TextInput
										onChangeText={handleChange("confirmpassword")}
										onBlur={handleBlur("confirmpassword")}
										value={values.confirmPassword}
										placeholder='Lagos'
										className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
									/>
								</View>
								<View>
									<Text className='text-sm font-semibold text-[#00000099] mb-2'>
										City(required)
									</Text>
									<TextInput
										onChangeText={handleChange("confirmpassword")}
										onBlur={handleBlur("confirmpassword")}
										value={values.confirmPassword}
										placeholder='Lagos'
										className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
									/>
								</View>

								<AppButton
									title={"Review Details"}
									onPress={() => navigation.navigate("CheckoutSummaryTab")}
								/>
							</View>
						)}
					</Formik>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CheckoutScreen;

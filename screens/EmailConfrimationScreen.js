import {
	View,
	Text,
	TextInput,
	SafeAreaView,
	StatusBar,
	Image,
} from "react-native";
import React from "react";
import AppButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const EmailConfrimationScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView
			className='flex-1 justify-center bg-[#F4F1D6]'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='items-center mb-10 '>
				<Image source={require("../assets/jewels_logo.png")} />
			</View>
			<View className='w-[90%] mx-auto'>
				<View className='mt-10 '>
					<View className='mb-[60px]'>
						<Text className='text-[24px] text-[#1C1B1FCC] font-[700] mb-2'>
							Confirm OTP
						</Text>
						<Text className='text-[16px] text-[#454547cc] font-bold'>
							Enter the code sent to 080******1234
						</Text>
					</View>
					<View className='flex-row space-x-2 items-center justify-center mb-12'>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
						<TextInput
							className='w-[50px] mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
						/>
					</View>
					<AppButton
						title={"Confirm OTP"}
						onPress={() => navigation.navigate("Welcome")}
					/>
					<View className='items-center '>
						<Text className='mb-10 mt-10 text-[#989898]'>
							Didn't get it?{" "}
							<Text className='font-[700] text-[#1C1B1FCC]'> Resend</Text>
						</Text>
						<Text className='font-[500] text-[#1C1B1FCC]'>
							Use email instead
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default EmailConfrimationScreen;

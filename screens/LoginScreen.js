import React, { useState } from "react";
import {
	Button,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { Formik } from "formik";
import AppButton from "../components/Button";
import { Feather } from "@expo/vector-icons";

export const LoginScreen = (props) => {
	const [showpassword, setShowpassword] = useState(false);
	return (
		<SafeAreaView
			className='flex-1 justify-center bg-[#F4F1D6]'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='items-center mb-10 '>
				<Image source={require("../assets/jewels_logo.png")} />
			</View>
			<View className='w-[90%] mx-auto'>
				<Formik
					initialValues={{
						email: "",
						password: "",
						name: "",
						confirmPassword: "",
					}}
					onSubmit={(values) => console.log(values)}>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<View>
							<Text className='text-sm font-semibold text-[#00000099] mb-2'>
								Email
							</Text>
							<TextInput
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
								className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
							/>
							<View className='relative'>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Password
								</Text>
								<TextInput
									onChangeText={handleChange("password")}
									onBlur={handleBlur("email")}
									value={values.password}
									type='password'
									className='w-full mb-4 bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								<View className='absolute top-11 right-2'>
									{showpassword ? (
										<Feather
											name='eye'
											size={24}
											color='#989898'
											onPress={() => setShowpassword(!showpassword)}
										/>
									) : (
										<Feather
											name='eye-off'
											size={24}
											color='#989898'
											onPress={() => setShowpassword(!showpassword)}
										/>
									)}
								</View>
							</View>

							<AppButton title={"Login"} onPress={handleSubmit} />
						</View>
					)}
				</Formik>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	button: {
		textAlign: "center",
		marginBottom: 10,
		width: "100%",
		backgroundColor: "#0000ff",
		padding: 5,
	},
});
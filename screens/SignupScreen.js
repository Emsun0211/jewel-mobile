import React, { useState } from "react";
import {
	Button,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Field, Formik } from "formik";
import AppButton from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signUpValidationSchema } from "../constants/Validations";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export const Signup = (props) => {
	const [isSecureConfirm, setisSecuredConfirm] = useState(true);
	const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
	const navigation = useNavigation();

	const register = ({ name, email, password }) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				await updateProfile(auth.currentUser, {
					displayName: name, // Set the user's name
				})
					.then(() => {
						// Profile updated successfully
						console.log("User profile updated");

						// Additional actions after successful registration and profile update
					})
					.catch((error) => {
						// An error occurred while updating the profile
						console.error("Error updating user profile:", error);
					});
				// console.log(auth.currentUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				alert(errorMessage);
			});
	};
	return (
		<SafeAreaView
			style={{ paddingTop: StatusBar.currentHeight }}
			className='flex-1 justify-center bg-[#F4F1D6]'>
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
					validationSchema={signUpValidationSchema}
					onSubmit={({ name, password, email }) =>
						register({ name, password, email })
					}>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						isValid,
						touched,
					}) => (
						<View>
							<View className='mb-4'>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Full Name
								</Text>
								<TextInput
									onChangeText={handleChange("name")}
									onBlur={handleBlur("name")}
									value={values.name}
									name='name'
									placeholder='Emmanuel Emmanuel'
									className='w-full  bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] '
								/>
								{errors.name && touched.name && (
									<Text style={{ fontSize: 10, color: "red" }}>
										{errors.name}
									</Text>
								)}
							</View>
							<View className='mb-4 '>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Email
								</Text>
								<TextInput
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									name='email'
									placeholder='example@example.com'
									className='w-full bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								{errors.email && touched.email && (
									<Text style={{ fontSize: 10, color: "red" }}>
										{errors.email}
									</Text>
								)}
							</View>
							<View className='relative mb-4'>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Password
								</Text>
								<TextInput
									onChangeText={handleChange("password")}
									onBlur={handleBlur("email")}
									value={values.password}
									placeholder='*********'
									name='password'
									secureTextEntry={isSecureTextEntry}
									className='w-full bg-transparent border-[1.5px] border-[#989898] py-3 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								{errors.password && touched.password && (
									<Text style={{ fontSize: 10, color: "red" }}>
										{errors.password}
									</Text>
								)}
								<View className='absolute top-11 right-2'>
									<TouchableOpacity
										onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
										<Feather
											name={isSecureTextEntry ? "eye-off" : "eye"}
											size={24}
											color='#989898'
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View className='mb-4 relative'>
								<Text className='text-sm font-semibold text-[#00000099] mb-2'>
									Comfirm Password
								</Text>
								<TextInput
									onChangeText={handleChange("confirmPassword")}
									onBlur={handleBlur("confirmPassword")}
									value={values.confirmPassword}
									secureTextEntry={isSecureConfirm}
									name='confirmPassword'
									className='w-full  bg-transparent border-[1.5px] border-[#989898] py-2 px-4 focus:ring-0 
        focus:border-[#00000099] focus:bg-transparent font-semibold text-sm text-[#00000099] sm:text-lg'
								/>
								{errors.confirmPassword && touched.confirmPassword && (
									<Text style={{ fontSize: 10, color: "red" }}>
										{errors.confirmPassword}
									</Text>
								)}
								<View className='absolute top-11 right-2'>
									<TouchableOpacity
										onPress={() => setisSecuredConfirm(!isSecureConfirm)}>
										<Feather
											name={isSecureConfirm ? "eye-off" : "eye"}
											size={24}
											color='#989898'
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View className='mt-5'>
								{/* <AppButton
									title={"Create account"}
									// onPress={() => navigation.navigate("Confirm-email")}
									onPress={handleSubmit}
								/> */}
								<Button
									title='Login'
									onPress={handleSubmit}
									disabled={!isValid}
									color={!isValid ? "#969696" : "#000000"}
								/>
							</View>
						</View>
					)}
				</Formik>
				<Text
					className='mt-8 text-center text-[12px]'
					onPress={() => navigation.navigate("Login")}>
					Have an account already?<Text className='font-[700]'>login</Text>
				</Text>
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

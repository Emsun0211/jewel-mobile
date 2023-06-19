import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import HomeHeader from "../components/HomeHeader";
import MiniProductCard from "../components/MiniProductCard";

const ProductDetailsScreen = () => {
	const [rating, setRating] = useState(0);
	const data = [
		"Material: Gold.",
		"Karat: 18K.",
		"Dimensions: .",
		"Stone: Lab-Grown Diamond.",
		"Number of Stones: 5.",
		"Stone Carat: 5 x 0.05cts.",
		"Stone Setting Type: 4 prongs.",
		"Type: Colour: G-H Clarity: SI1+.",
		"Stone Shape: Brilliant.",
		"Length of chain: 450mm include 3 adjusters: 400mm, 420mm and 450mm]",
	];
	const ListItem = ({ item }) => {
		return (
			<View className='flex-row'>
				<Entypo name='dot-single' size={24} color='#969696' />
				<Text className='text-[#969696]'>{item}</Text>
			</View>
		);
	};

	return (
		<SafeAreaView
			className='flex-1  bg-[#F4F1D6] '
			style={{ paddingTop: StatusBar.currentHeight }}>
			<HomeHeader />
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
					<Text className='font-[700] text-[20px] mb-5 text-black/70'>
						Quantity:
					</Text>
					<View className='flex-row space-x-5 '>
						<TouchableOpacity className='text-center flex-1 items-center   py-3 px-4 bg-[#000000FF] text-[hsla(0,0%,100%,1)] text-sm font-semibold'>
							<Text className='text-white font-[700] text-[14px]'>
								Add to bag
							</Text>
						</TouchableOpacity>
						<View className=' flex-row w-[100px] p-2 border-[1px] border-[#969696] items-center ml-2 space-x-2 justify-between'>
							<TouchableOpacity>
								<Feather name='minus' color='gray' size={24} />
							</TouchableOpacity>
							<TextInput placeholder='1' />
							<TouchableOpacity>
								<Feather name='plus' color='gray' size={24} />
							</TouchableOpacity>
						</View>
					</View>
					<View className='mt-3 space-y-2 mb-10'>
						<Text className='text-[20px] font-[500] text-black/70'>REVER</Text>
						<Text className='text-[14px] font-[500] text-[#969696]'>
							Fived 18K Gold Necklace w. Lab-Grown Diamonds
						</Text>
						<View className='flex-row items-center'>
							<StarRating
								rating={rating}
								onChange={setRating}
								starSize={26}
								color='#FCA82B'
							/>
							<Text className='text-black/60 font-[500]'>156 ratings</Text>
						</View>
						<Text className='text-[18px] font-[500] text-black/70'>
							$1200.00
						</Text>
					</View>
					<View className='mb-10 border-t-[#969696]/60 border-t-2 border-b-[#969696]/60 border-b-2 py-8'>
						<Text className='text-[#969696]'>
							Bring shine to your look with our Fived Necklace from The Bright
							Side. Made with brilliant cut diamonds, it is the perfect
							essential for everyday. You can wear it alone or mix it with our
							necklaces selection for a maxi style.
						</Text>
						<View className='mt-5'>
							{data.map((list, id) => (
								<ListItem item={list} key={id} />
							))}
						</View>
					</View>
				</View>
				<View className='mt-2 mb-5 w-[90%] mx-auto'>
					<Text className='text-[20px] font-[700] text-[#989898]'>
						Suggested
					</Text>

					<View className='flex-row flex-wrap space-y-4 justify-between'>
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
						<MiniProductCard />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProductDetailsScreen;

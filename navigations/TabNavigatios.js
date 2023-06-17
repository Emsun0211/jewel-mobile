import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BagScreen from "../screens/BagScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import HomeScreen from "../screens/HomeScreen";
import {
	Feather,
	Octicons,
	EvilIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { HomeStack } from "./StackNavigation";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "grey",
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#F4F1D6",
					borderColor: "red",
				},
				tabBarLabelStyle: {
					fontSize: 12,
				},
			}}>
			<Tab.Screen
				name='Home'
				component={HomeStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"home"}
							size={25}
							color={focused ? "#000000" : "gray"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Favourite'
				component={FavouriteScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"heart"}
							size={25}
							color={focused ? "#000000" : "gray"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Bag'
				component={BagScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<SimpleLineIcons
							name={"bag"}
							size={25}
							color={focused ? "#000000" : "gray"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

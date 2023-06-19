import { SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import { StatusBar } from "react-native";

export class ChartScreen extends Component {
	render() {
		return (
			<SafeAreaView
				className='flex-1  bg-[#F4F1D6] '
				style={{ paddingTop: StatusBar.currentHeight }}></SafeAreaView>
		);
	}
}

export default ChartScreen;

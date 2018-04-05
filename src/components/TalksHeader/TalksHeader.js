import React from 'react';
import { Image, View } from "react-native";
import { Text } from "react-native-zero-ui";
import images from "../../../assets/images";
import styles from "./TalksHeader.style";

export default () => (
	<View style={styles.root}>
		<Image
			style={styles.image}
			resizeMode="center"
			source={images.infinumLogo()}
		/>
		<Text style={styles.title}>
			Android talks #29
		</Text>
	</View>
);

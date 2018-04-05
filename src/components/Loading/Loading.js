import React from 'react';
import { ActivityIndicator, View } from "react-native";
import styles from "./Loading.style";
import { Text } from "react-native-zero-ui";

export default ({ color, message }) => (
	<View style={styles.root}>
		<ActivityIndicator
			size="large"
			color={color}
		/>
		<Text style={styles.title}>
			{message}
		</Text>
	</View>
);

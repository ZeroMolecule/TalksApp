/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import SomeScreen from "./containers/SomeScreen/SomeScreen";
import TalksHeader from "./components/TalksHeader/TalksHeader";

export default class App extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TalksHeader />
				<SomeScreen />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

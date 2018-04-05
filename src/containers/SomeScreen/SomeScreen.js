import React, { PureComponent } from 'react';
import { sleep } from "../../utils/common";
import Loading from "../../components/Loading/Loading";
import { Button, View } from "react-native-zero-ui";
import styles from "./SomeScreen.style";

/**
 * I know I've used `Component` instead of `PureComponent` in my presentation. However, if you don't need to override
 * `shouldComponentUpdate` method, you are better off using `PureComponent` which is much more performance efficient.
 * I've used `Component` in my presentation because I didn't want to add more complexity
 */
export default class SomeScreen extends PureComponent {
	state = {
		shouldLoad: false,
	};

	async onClick() {
		this.setState({ shouldLoad: true });
		await sleep(2000); // or do some other stuff
		this.setState({ shouldLoad: false });
	}

	render() {
		if (this.state.shouldLoad) {
			return (
				<Loading
					message="Still learning..."
					color="#ED1C24"
				/>
			);
		}
		return (
			<View style={styles.root}>
				<Button
					style={styles.button}
					title="DO IT!"
					onPress={() => this.onClick()}
				/>
			</View>
		);
	}

}

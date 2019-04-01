import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	title: {
		fontWeight: 'bold',
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 50,
	}
}

class Trait extends PureComponent {
	static propTypes = {
		level: PropTypes.number.isRequired,
		diceType: PropTypes.number.isRequired,
		dicePlus: PropTypes.number,
		onUpdateTrait: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired,
	}

	static defaultProps = {
		dicePlus: 0,
	}

	constructor(props) {
		super(props);

		this.state = {
			level: props.level,
			diceType: props.diceType,
			dicePlus: props.dicePlus,
		};
	}

	onUpdateLevel = (event) => {
		this.setState({ level: event.target.value })
	}

	onUpdateDiceType = (event) => {
		this.setState({ diceType: event.target.value })
	}

	onUpdateDicePlus = (event) => {
		this.setState({ dicePlus: event.target.value })
	}

	render() {
		return (
			<div style={styles.container}>
				<span style={styles.title}>{this.props.title}</span>
				<div style={styles.content}>
					<input type="text"
						value={this.state.level}
						onChange={this.onUpdateLevel}
						onBlur={this.props.onUpdateTrait}
					/>
					<span>d</span>
					<input type="text"
						value={this.state.diceType}
						onChange={this.onUpdateDiceType}
						onBlur={this.props.onUpdateTrait}
					/>
					<span>+</span>
					<input type="text"
						value={this.state.dicePlus}
						onChange={this.onUpdateDicePlus}
						onBlur={this.props.onUpdateTrait}
					/>
				</div>
			</div>
		);
	}

}

export default Trait;

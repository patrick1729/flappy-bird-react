import React from "react";
import { v4 } from "uuid";
import $ from "jquery";

import Pillars from "../components/Pillars";

export default class PillarContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pillars: [] };
		this.leftMargin = 200;
		this.windowHeight = $(document).height() - $("body").offset().top - 80;
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.updatePillars(), 1000);
		this.moveLeft();
	}

	// Moves the pillars to the left
	moveLeft() {
		let self = this;
		if (!this.props.isGameOver) {
			$("[id^=pillar]").animate(
				{
					left: "-=40px" // Move the pillars to left
				},
				250,      // Perform the animation every 250ms
				"linear", // For smooth transition of animation
				() => {
					self.moveLeft();
				}
			);
		} else $("[id^=pillar]").stop(true);
	}

	// Removes the old pillar and add new ones
	updatePillars() {
		if (!this.props.isGameOver) {
			let oldPillars = this.state.pillars;
			if (oldPillars.length <= 10) {
				// Total number of pillars are less than 10, add new pillars
				const topHeight = Math.floor(Math.random() * 250) + 80;
				const bottomHeight = this.windowHeight - topHeight - 60;
				const abovePillarId = "pillar" + v4();
				const belowPillarId = "pillar" + v4();
				oldPillars.push(
					<div
						style={{
							position: "absolute",
							height: topHeight,
							// marginBottom: "100px",
							left: this.leftMargin + "px",
							width: "50px",
							backgroundColor: "white"
						}}
						key={v4()}
						id={abovePillarId}
						className="pillar"
					/>
				);
				oldPillars.push(
					<div
						style={{
							position: "absolute",
							height: bottomHeight,
							top: topHeight + 120,
							left: this.leftMargin + "px",
							width: "50px",
							backgroundColor: "white"
						}}
						key={v4()}
						id={belowPillarId}
						className="pillar"
					/>
				);
			} else {
				// Pillar count has exceeded 10, remove the old pillars from the front
				oldPillars.shift();   // remove first top pillar
				oldPillars.shift();   // remove first bottom pillar
			}
			this.setState({
				pillars: oldPillars
			},
				function () {
					// console.log("pillars: " + this.state.pillars.length);
				}
			);
		} else clearInterval(this.timerID);
	}

	componentWillMount() {
		let initPillars = [];
		const windowHeight = $(window).height() - $("body").offset().top - 80;
		for (let i = 0; i < 10; i = i + 2) {
			let topHeight = Math.floor(Math.random() * 250) + 80;
			let bottomHeight = windowHeight - topHeight - 60;
			let abovePillarId = "pillar" + i;
			let belowPillarId = "pillar" + (i + 1);
			initPillars.push(
				<div
					style={{
						position: "absolute",
						height: topHeight,
						// marginBottom: "100px",
						left: this.leftMargin + "px",
						width: "50px",
						backgroundColor: "white"
					}}
					key={i}
					id={abovePillarId}
					className="pillar"
				/>
			);

			initPillars.push(
				<div
					style={{
						position: "absolute",
						height: bottomHeight,
						top: topHeight + 120,
						left: this.leftMargin + "px",
						width: "50px",
						backgroundColor: "white"
					}}
					key={i + 1}
					id={belowPillarId}
					className="pillar"
				/>
			);
			if (i <= 8) this.leftMargin += 250;
			else this.leftMargin -= 400;
		}
		this.setState({
			pillars: initPillars
		});
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		// if (this.props.isGameOver) {
		//   this.setState({
		//     pillars: []
		//   });
		// }
		return <Pillars pillars={this.state.pillars} />;
	}
}

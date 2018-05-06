import React from "react";
import $ from "jquery";

import Bird from "../components/Bird";
import "../css/main.css";

var oldPillar;

export default class BirdContainer extends React.Component {

	constructor(props) {
		super(props);

		this.score = 0;

		// Current height of the document minus the offset
		this.height = $(window).height() - 100;

		// Tracks when the space bar is clicked so as to make the bird fly
		this.isSpaceBarClicked = false;

		// In JavaScript, class methods are not bound by default.
		// If you forget to bind this.fallDown and pass it to onClick, this will be undefined when the function
		// is actually called. 
		this.fallDown = this.fallDown.bind(this);

		// Call the 'fallDown()' function every 109ms
		this.intervalID = setInterval(this.fallDown, 109);
	}

	componentDidMount() {
		// No need to bind the handleKeyPress() in constructor as we are using arrow function
		$("body").keypress((e) => this.handleKeyPress(e));
	}

	handleKeyPress(e) {
		let self = this;
		if (e.keyCode === 32 && !this.props.isGameOver) {
			// Spacebar clicked and game is not yet over
			this.isSpaceBarClicked = true;
			let birdHeight = $("#bird").position().top;
			if (birdHeight > 40) {
				// Bird is below roof
				$("#bird").animate(
					{
						top: "-=50px" // Subtract from the top on the click of spacebar to elevate the bird
					},
					120, 		// Perform the animation every 120ms
					"linear", 	// For smooth transition of animation
					() => {
						// After animation is completed
						self.isSpaceBarClicked = false;
						let elements = document.getElementsByClassName("pillar");
						if (self.collisionOccurred($("#bird"), $(elements[0]), $(elements[1]))) {
							// self.isGameOver = true;
							self.props.handleGameOver(true);
						} else {
							let rect = elements[0].getBoundingClientRect();
							if ((oldPillar !== elements[0]) && $("#bird").position().left > rect.left) {
								self.score++;
								self.props.handleScore(self.score);
								oldPillar = elements[0];
							}
							// console.log(rect.left + " " + Math.round(rect.width));
						}
					}
				);
			} else {
				// this.isGameOver = true; 
				self.props.handleGameOver(true);	// The bird touched the roof, game over!
				this.isSpaceBarClicked = false;
			}
		}
	}
	// Function that keeps the bird falling
	fallDown() {
		let self = this;
		if (!this.isSpaceBarClicked) {
			let birdHeight = $("#bird").position().top; // Current height of the bird
			if (birdHeight < this.height) {
				// Bird is above the ground
				$("#bird").animate(
					{
						top: "+=25px" // Add to the current 'top' attribute value of the bird
					},
					110, // Perform the animation every 110ms
					"linear", // For smooth transition of animation
					() => {
						let elements = document.getElementsByClassName("pillar");
						if (self.collisionOccurred($("#bird"), $(elements[0]), $(elements[1]))) {
							// this.isGameOver = true;
							self.props.handleGameOver(true);
							// console.log("collided....");
						}
					}
				);
				this.isSpaceBarClicked = false;
			} else {
				// this.isGameOver = true; 
				self.props.handleGameOver(true);	// The bird touched the ground, game over!
				clearInterval(this.intervalID); // Stop the timer set for 'fallDown()' calling
			}
		}
	}

	collisionOccurred(bird, upperDiv, lowerDiv) {
		// width
		var x1 = bird.offset().left;
		var w1 = bird.width();
		// height
		var y1 = bird.offset().top;
		var h1 = bird.height();

		var finalHeight = y1 + h1;
		var finalWidth = x1 + w1;

		var x2 = upperDiv.offset().left;
		var w2 = upperDiv.width();

		var y2 = upperDiv.offset().top;
		var h2 = upperDiv.height();

		var finalHeight2 = y2 + h2;
		var finalWidth2 = x2 + w2;

		var x3 = lowerDiv.offset().left;
		var w3 = lowerDiv.width();

		var finalHeight3 = lowerDiv.offset().top;
		var finalWidth3 = x3 + w3;

		if ((y1 > finalHeight2 || finalWidth < x2 || x1 > finalWidth2) &&
			(finalHeight < finalHeight3 || y1 < finalHeight3 || finalWidth < x3 || x1 > finalWidth3)) return false;
		return true;
	}

	render() {
		return <Bird />;
	}
}

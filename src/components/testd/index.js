import React, { Component } from "react";
import "./test.css";
import { AppButton } from "../../helpers/buttons";
export default class index extends Component {
	render() {
		return (
			<div>
				<div className="centerT">
					<div>{AppButton("HIRE ME", "190px", "50px", "red", "black")}</div>
				</div>
			</div>
		);
	}
}

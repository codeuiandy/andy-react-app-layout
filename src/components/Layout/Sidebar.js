import React, { Component } from "react";
import "./layout.css";
export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div
					className={`${
						this.props.sidebarShow === "showSidebar"
							? "showSidebar"
							: "hideSidebar"
					} ${this.props.SidebarDefault}`}
				>
					<div className={`sidebar`}>
						<ul className="sidebarList">
							<li>DAta</li>
							<li>DATA</li>
							<li>DATA</li>
							<li>DATA</li>
							<li>DATA</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

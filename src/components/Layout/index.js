import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SidebarDefault: "SidebarDefault",
			sidebarShow: "",
			showBar: false,
		};
	}
	toggleSideBar = () => {
		let showBar = this.state.showBar;
		if (this.state.showBar === false) {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "showSidebar",
				showBar: !showBar,
			});
		} else {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "hideSidebar",
				showBar: !showBar,
			});
		}
	};
	render() {
		let { SidebarDefault, sidebarShow } = this.state;
		return (
			<div>
				<div>
					<Navbar handleSideBar={this.toggleSideBar} />
					<Sidebar sidebarShow={sidebarShow} SidebarDefault={SidebarDefault} />
					<div className="centra-margin">{this.props.children}</div>
				</div>
			</div>
		);
	}
}

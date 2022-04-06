import React from "react";
import "../../app.css";

export default function TeamCard(props) {
	return (
		<section className="teamCard">
			<div className="cardTop">
				<p className="cardDesignation">{props.props.designation}</p>
				<hr className="teamCardDivider" />
			</div>
			<div className="cardMiddle">
				<div className="cardBlock1" />
				<img src={"/Images/team/" + props.props.img} />
				<div className="cardBlock2" />
			</div>
			<div className="cardName">{props.props.name}</div>
		</section>
	);
}

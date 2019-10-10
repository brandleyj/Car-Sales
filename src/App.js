import React from "react";
import { connect } from "react-redux";
import { addFeature } from "./Actions/index";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
	const removeFeature = item => {
		// dispatch an action here to remove an item
	};

	const buyItem = item => {
		// dipsatch an action here to add an item
		props.addFeature(item);
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.parts.car} />
				<AddedFeatures car={props.parts.car} />
			</div>
			<div className="box">
				<AdditionalFeatures store={props.parts.store} buyItem={buyItem} />
				<Total
					car={props.parts.car}
					additionalPrice={props.parts.additionalPrice}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		parts: state.partsReducer
	};
};

export default connect(
	mapStateToProps,
	{ addFeature }
)(App);

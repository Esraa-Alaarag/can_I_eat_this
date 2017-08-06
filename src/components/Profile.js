import React, { Component } from 'react';

console.log('Profile.js is working.');

class Profile extends Component {
	constructor(props) {
		super(props)
		// console.log(this.props.issues);
		this.userPreferences = this.userPreferences.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}

	// When user click save button:
	userPreferences(event) {
		event.preventDefault();

		// If user is saving information for first time (meaning that have no userid):
		if (this.props.userid === undefined) {

			// Then, generates a random userid.
			let userid = Math.floor((Math.random() * 99999999) + 1);
			console.log("User id: " + userid);

			// Creating an array of true/false results, in alphabetical order.
			// True means checked, while false is not checked.
			let issues =
				[this.refs.egg.checked, this.refs.fish.checked,
				this.refs.milk.checked, this.refs.peanuts.checked,
				this.refs.sesame.checked, this.refs.shellfish.checked,
				this.refs.soy.checked, this.refs.treenuts.checked,
				this.refs.wheat.checked]
			console.log(issues);

			// Passing the array "issues" to the addCheckboxes method.	
			this.props.addCheckboxes(userid, issues, true);
		}

		// Else, if user have an already userid:
		else {
			// Passing the current state (basically no change in userid.)
			let userid = this.props.userid;
			console.log("User id: " + userid);

			let issues =
				[this.refs.egg.checked, this.refs.fish.checked,
				this.refs.milk.checked, this.refs.peanuts.checked,
				this.refs.sesame.checked, this.refs.shellfish.checked,
				this.refs.soy.checked, this.refs.treenuts.checked,
				this.refs.wheat.checked]
			console.log(issues);

			// Passing the array "issues" to the updateCheckboxes method.	
			this.props.updateCheckboxes(userid, issues, true);
		}
	}

	findUserID(event) {
		let userid = this.refs.findUserID.value;
		console.log("Getting information from the user id: " + userid);
		this.props.readAllergies(userid);
	}

	// Call the method that turns readOnly false.
	handleEdit() {
		// console.log('User press the edit button.');
		this.props.changeState(false);
	}

	renderSave() {
		if (this.props.readOnly === false) {
			return (
				<button className="savePreferences">Save</button>
			)
		}
	}

	renderEdit() {
		if (this.props.readOnly === true) {
			return (
				<button className="editPreferences" onClick={this.handleEdit}>Edit</button>
			)
		}
	}

	render() {
		const images = [
			"/can_I_eat_this/images/icons/egg-color.png",
			"/can_I_eat_this/images/icons/fish-color.png",
			"/can_I_eat_this/images/icons/milk-color.png",
			"/can_I_eat_this/images/icons/icons-blackandwhite/peanut-bw.png",
			"/can_I_eat_this/images/icons/sesame-color.png",
			"/can_I_eat_this/images/icons/shellfish-color.png",
			"/can_I_eat_this/images/icons/soy-color.png",
			"/can_I_eat_this/images/icons/treenut-color.png",
			"/can_I_eat_this/images/icons/wheat-color.png",
		];
		// console.log(this.props.issues[0]);
		return (
			<div className="profile">
				<h2 className="title">User Preferences</h2>
				<p className="paragraph">Please, click edit to change the allergens that you would like to avoid. When You finish click save</p>
				<div className="buttons">
					{this.renderEdit()}
				</div>
				<form onSubmit={this.userPreferences}>
				<div className="buttons">
						{this.renderSave()}
				</div>
					<div className="row">
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="egg" ref="egg"
								checked={this.props.issues[0]} readOnly={this.props.readOnly} />Egg</h3>
							<span className="icons"><img src={images[0]} alt="egg-allergen-icon" /></span>
							<h6>
								Egg<br />
								Mayonnaise<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="sesame" ref="sesame"
								checked={this.props.issues[4]} readOnly={this.props.readOnly} />Sesame</h3>
							<span className="icons"><img src={images[4]} alt="sesame-allergen-icon" /></span>
							<h6>
								Sesame <br />
								Tahini <br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="wheat" ref="wheat"
								checked={this.props.issues[8]} readOnly={this.props.readOnly} />Wheat</h3>
							<span className="icons"><img src={images[8]} alt="wheat-allergen-icon" /></span>
							<h6>
								Breed crumbs<br />
								Bulgur<br />
								Cereal extract<br />
								Club wheat<br />
								Couscous<br />
								Cracker meal<br />
								Durun<br />
								Einkorn<br />
								Emmer<br />
								Farina<br />
								Flour<br />
								Hydrolyzed wheat protein<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="peanuts" ref="peanuts"
								checked={this.props.issues[3]} readOnly={this.props.readOnly} />Peanuts</h3>
							<span className="icons"><img src={images[3]} alt="peanuts-allergen-icon" /></span>
							<h6>
								nuts<br />
								Peanut <br />
							</h6>
						</div>
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="fish" ref="fish"
								checked={this.props.issues[1]} readOnly={this.props.readOnly} />Fish</h3>
							<span className="icons"><img src={images[1]} alt="fish-allergen-icon" /></span>
							<h6>
								Anchovies<br />
								Bass<br />
								Catfish<br />
								Cod<br />
								Flounder<br />
								Grouper<br />
								Haddock<br />
								Hake<br />
								Halibut<br />
								Herring<br />
								Mahi Mahi<br />
								Perch<br />
								Pike<br />
								Pollock<br />
								Salmon<br />
								Swordfish<br />
								Sole<br />
								Snapper<br />
								Tilapia<br />
								Trout<br />
								Tuna<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="treenuts" ref="treenuts"
								checked={this.props.issues[7]} readOnly={this.props.readOnly} />Tree nuts</h3>
							<span className="icons"><img src={images[7]} alt="treenut-allergen-icon" /></span>
							<h6>
								Almond<br />
								Cashew<br />
								Chestnut<br />
								Hazelnut<br />
								Macadamia<br />
								Pecan<br />
								Pesto<br />
								Pistachio<br />
								Walnut<br />
							</h6>
						</div>
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="milk" ref="milk"
								checked={this.props.issues[2]} readOnly={this.props.readOnly} />Milk</h3>
							<span className="icons"><img src={images[2]} alt="milk-allergen-icon" /></span>
							<h6>
								Butter<br />
								Cheese<br />
								Cream<br />
								Ghee<br />
								Milk<br />
								Whey<br />
								Yogurt<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="shellfish" ref="shellfish"
								checked={this.props.issues[5]} readOnly={this.props.readOnly} />Shell Fish</h3>
							<span className="icons"><img src={images[5]} alt="shellfish-allergen-icon" /></span>
							<h6>
								Barnacle<br />
								Crab<br />
								Crawfish<br />
								Krill<br />
								Lobster<br />
								Prawns<br />
								Shrimp<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="soy" ref="soy"
								checked={this.props.issues[6]} readOnly={this.props.readOnly} />Soy</h3>
							<span className="icons"><img src={images[6]} alt="soy-allergen-icon" /></span>
							<h6>
								Edamame<br />
								Miso<br />
								Soy<br />
								Tofu<br />
							</h6>
						</div>
					</div>
					
				</form>
			</div>
		);
	}
}

export default Profile;
import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Container = () => {
	return (
		<React.Fragment>
			<Home title="Hello" image={rigoImage} />
			<Home
				title="Second Hello"
				image={
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5HKvZ8puTuFmDRyALrSmjlIhonjV0z261A&usqp=CAU"
				}
			/>
			<Home
				title="Third Hello"
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlwJRgFjsLre-AP66xe1vr4HnnYBIgCyONg&usqp=CAU"
			/>
		</React.Fragment>
	);
};
function Home(props) {
	return (
		<div className="text-center mt-5">
			<h1>{props.title}</h1>
			<p>
				<img
					src={
						props.image === ""
							? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQsLPvR8rSuqUhZlzexUmpk1qzfaGcdwGAQ&usqp=CAU"
							: props.image
					}
				/>
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
Home.propTypes = {
	title: PropTypes.string,
	image: PropTypes.image
};

export default Container;

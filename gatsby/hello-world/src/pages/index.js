import React from "react"
import Header from '../components/header';
import { Link } from 'gatsby';

export default () =>
(
	<div  style = {{ color: 'purple'}}>
		<Header headerText="This is the home page" />
		<Link to ="/about/">About </Link>
		<br />
		<Link to ="/contact/">contact </Link>
		<p>What a world.</p>
		<img src="https://images.pexels.com/photos/266403/pexels-photo-266403.jpeg?cs=srgb&dl=action-adult-fast-266403.jpg&fm=jpg" alt ="pressure washing"/>
		<button>Click me</button>
	</div>
)

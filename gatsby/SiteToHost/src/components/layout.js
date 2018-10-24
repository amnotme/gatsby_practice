import React from 'react';
import { Link } from 'gatsby';


const ListLink = (props) =>
(
	<li style={{display: 'inline', margin: '0 1.25rem 1.25rem 0'}}>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

export default ({children}) =>
(
	<div style={{maxWidth: 1200, margin: '0 auto', backgroundColor: '#00dd22'}}>
		<h3>Cande's Power Washer</h3>

		<ul style={{textShadow: 'none', listStyle: 'none'}}>
			<ListLink to="/">Home</ListLink>
			<ListLink to="/contact/">Contact Us</ListLink>
			<ListLink to="/about/">About Us</ListLink>
		</ul>
		{children}
	</div>
);

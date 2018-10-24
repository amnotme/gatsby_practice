import React from 'react';
import { Link } from 'gatsby';


const ListLink = props =>
(
	<li style={{ display: 'inline-block	', marginRight: '1rem'}}>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

export default ({children}) =>
(
	<div style={{ margin: '0 auto', maxWidth: 900, padding: '1.25rem 1rem' }}>
		<header>
			<Link to="/" style={{textShadow: 'none', backgroundImage: 'none'}}></Link>
			<h3 style={{ color: 'red', display: 'inline'}}>My awesome site</h3>
				<ul style={{listStyle: 'none', float: 'right'}}>
					<ListLink to ="/">Home</ListLink>
					<ListLink to ="/contact/">Contact Us</ListLink>
					<ListLink to ="/about/">About Us</ListLink>
				</ul>
		</header>
		{children}
	</div>
);

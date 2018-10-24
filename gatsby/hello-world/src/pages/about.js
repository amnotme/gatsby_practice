import React from 'react';
import Header from '../components/header';
import { Link } from  'gatsby';

export default () =>
(
		<div style={{color: 'teal'}}>
			<Header headerText="About Gatsby"/>
			<p>Such wow. Very react </p>
			<Link to ="/index/">Home</Link>
		</div>
)

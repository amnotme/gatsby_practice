import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import styles from '../components/about.module.css';
import pic1 from '../images/ocean.jpg';

const User = (props) =>
(
	<div className = {styles.user}>
		<img src = {props.avatar} className ={styles.avatar} alt="" />
		<div className={styles.description}>
			<h2 className={styles.username}>{props.username}</h2>
			<p className ={styles.excerpt}>{props.excerpt}</p>
		</div>
	</div>
);

export default () =>
(
	<div>
	<Layout>
		<div style={{backgroundColor: 'orange'}}>
			<h1 style={{color: 'red'}}>About page</h1>
			<Container>
			</Container>
			<Container>
				<h2>This is some other chit</h2>
			</Container>
		</div>
		<img src ={pic1} alt=""  />
	</Layout>
		<User
			username= "leo"
			avatar = "https://cdn.intra.42.fr/users/medium_lhernand.jpg"
			description = "Super cool dude"
			excerpt = "Nothing really"
			/>
		<User
			username = "stephen"
			avatar = "https://cdn.intra.42.fr/users/medium_sgardner.jpg"
			description = "something cool"
			excerpt = "he could be cooler"
			/>

		<User
			username = "Alex"
			avatar = "https://cdn.intra.42.fr/users/medium_asarandi.jpg"
			description = "even cooler"
			excerpt = "he's already too cool"
			/>
		<div>
		</div>
</div>
);

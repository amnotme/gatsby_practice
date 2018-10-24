module.exports = {
  // plugins: [`gatsby-plugin-typography`],
	plugins:
	[
	 {
		 resolve: `gatsby-plugin-typography`,
		 options: {
			 pathToConfigModule: 'src/utils/typography.js',
		 },
	 },
 ],
}

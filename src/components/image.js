import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const Image = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allFile(filter: {name: {regex: "/image-[0-9]/g"}}) {
				edges {
					node {
						name
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH)
						}
					}
				}
			}
		}
		
	`)

	const images = withArtDirection(getImage(data.largeImage), [{
		media: "(max-width: 1024px)",
		image: getImage(data.smallImage),
	}])

	return <GatsbyImage image={images} />
}

export default Image

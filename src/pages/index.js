import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div>
        <p>Explore {" "}
          <Link to="/parks">all national parks</Link> or {" "}
          <Link to="/states">parks in each state</Link>.
        </p>
        <StaticImage src="../images/acadia.jpg" height={600} alt="Acadia's rocky coastline - NPS / Kristi Rugg"></StaticImage>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage

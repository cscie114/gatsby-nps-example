import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div>
        Explore <Link to="/parks">all national parks</Link> or <Link to="/states">parks by state</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage

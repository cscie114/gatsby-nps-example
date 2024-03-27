import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

const LighthousesPage = (props) => {
    const data = props.data;
    const parks = data.allParksJson.nodes;
    return (
        <Layout pageTitle="Parks with Lighthouses">
            <ul>
                {parks.map((park) => {
                    return (
                        <li key={park.jsonId}>
                            <Link to={"/parks/"+park.parkCode}>{park.name}</Link>
                        </li>)
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allParksJson(filter: {topics: {elemMatch: {name: {eq: "Lighthouses"}}}}) {
            nodes {
                id
                parkCode
                name
            }
        }
    }
`

export const Head = () => <Seo title="Parks with Lighthouses"></Seo>

export default LighthousesPage
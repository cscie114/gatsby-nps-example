import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

const ParksPage = ({ data }) => {
    const parks = data.allParksJson.nodes;
    return (
        <Layout pageTitle="All Parks">
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
    query ParksPageQuery {
        allParksJson {
            nodes {
                id
                jsonId
                fullName
                name
                states
                parkCode
            }
        }
    }
`

export const Head = () => <Seo title="Parks"></Seo>

export default ParksPage
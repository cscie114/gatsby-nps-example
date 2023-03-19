import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import Park from '../../components/park'


const StatePage = ({ pageContext, data }) => {
    const stateAbbrev = pageContext.abbreviation;
    const stateParks = data.allParksJson.nodes;
    return (
        <Layout title={stateAbbrev}>
            <h2>{stateAbbrev} Parks</h2>
            <Link to="/states">Return to list of states</Link>
            {stateParks.map(park => <Park park={park}></Park>)}
        </Layout>
    );
  };

  export const query = graphql`
    query ($abbreviation: String) {
        allParksJson(filter: {states: {glob: $abbreviation}}) {
            nodes {
                id
                jsonId
                fullName
                name
                states
                parkCode
                description
                images {
                    title
                    credit
                    url
                    caption
                    }
                url
                activities {
                    name
                }
                designation
            }
        }
    }
  `

  export default StatePage
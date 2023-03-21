import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Park from '../../components/park'


const StatePage = ({ pageContext, data }) => {
    console.log("State", pageContext);
    const parks = data.allParksJson.nodes;
    const state = data.allStatesJson.nodes[0];
    return (
        <Layout pageTitle={state.name}>
            <p>{parks.length} parks in list</p>
            {parks.map(park => <Park key={park.id} park={park}></Park>)}
            <Link to="/states">Return to list of states</Link>
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
        allStatesJson(filter: {abbreviation: {eq: $abbreviation}}) {
            nodes {
              name
              abbreviation
            }
          }
    }
  `

  export const Head = () => <Seo title="State Parks"></Seo>

  export default StatePage
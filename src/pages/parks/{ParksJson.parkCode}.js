import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Park from '../../components/park'


const ParkPage = ({ data }) => {
    const park = data.allParksJson.nodes[0];
    return (
        <Layout title={park.name}>
            <Park park={park}></Park>
        </Layout>
    );
  };

  export const query = graphql`
      query ParkPageQuery ($parkCode: String) {
          allParksJson(filter: {parkCode: {eq: $parkCode}}) {
              nodes {
                  id
                  jsonId
                  fullName
                  name
                  designation
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
              }
          }
      }
  `

  export default ParkPage
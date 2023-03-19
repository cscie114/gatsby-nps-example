import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
    content,
    footer,
    heading,
    navLinks,
    navLinkItem,
    siteTitle,
} from './layout.module.css'

const Layout = (props) => {
    // Extract properties passed into this component directly
    const children = props.children;   // React passes in any child elements
    const pageTitle = props.pageTitle; // custom property: page title

    // Get the site title (data from gatsby-config.js)
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                title
            }
        }
        }
    `)

    // Return the Layout component
    return (
        <div className={content}>
            <header className={siteTitle}>
                <h1>{data.site.siteMetadata.title}</h1>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2 className={heading}>{pageTitle}</h2>
                {children}
            </main>
            <footer className={footer}>
                Example developed for CSCI E-114, Spring 2023.
            </footer>
        </div>
    )
}

export default Layout
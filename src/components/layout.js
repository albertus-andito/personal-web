/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  @media (max-width: 480px) {
    margin: 0;
  }
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  flex: 1;
`;

const GatsbyLink = styled.a`
  margin-left: 5px;
  color: rgb(255, 255, 255);
  background-image: none;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  margin-top: 20px;
  padding-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
          <p>
              © {new Date().getFullYear()}, Built with
              {` `}
          </p>
          <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
        </Footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 1000px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`;

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const SiteHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-content: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: hsl(168, 100%, 97%);
`;

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/dissertation">Dissertation</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </p>
    </Content>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header

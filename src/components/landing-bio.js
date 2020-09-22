import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import profile from "../images/profile.jpg"

const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

const ProfileImage = styled.img`
  max-width: 30%;
`;

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <ProfileImage src={profile} alt="author's profile picture" title="author's profile picture"/>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <Description>I am a final year Computer Science student at the <a href="https://sussex.ac.uk">University of Sussex </a>, Brighton, UK, <br />
            with a year of experience in industry. <br />
            I hail from <a href="https://en.wikipedia.org/wiki/Bandung">Bandung</a>, Indonesia. <br />
            I always embrace the rapid changes of technology and am not afraid to learn.
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
};

export default LandingBio

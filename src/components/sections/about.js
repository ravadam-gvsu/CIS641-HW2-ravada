import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Angular',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Microservices',
    'Event sourcing',
    'AWS',
    'Docker',
    'Jenkins',
    'Azure, CI/CD',
    'SQL',
    'MongoDB',
    'MySQL',
    '.Net',
    'C#',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I enjoy creating things that live on the internet. My journey into the world of
              technology began over a decade ago, and it's been an exciting ride ever since. I am a
              versatile full-stack developer with a broad skill set that encompasses backend,
              frontend, database management, DevOps, and CI/CD.
            </p>
            <p>
              In addition to my passion for coding, I have several other interests that make me who
              I am. I absolutely love to paint, as it allows me to express my creativity in a
              different way. Nature has always been a great source of inspiration for me, and I find
              solace in the serenity it offers and maintains balance through yoga. My vegetarian
              palate enjoys exploring diverse cuisines, and spirituality guides my quest for inner
              peace and meaning, shaping both my personal and professional life.
            </p>
            {/* <p>
              Speaking of my professional life, I am currently pursuing my master's in applied
              computer science at <a href="https://www.gvsu.edu/">GVSU</a>. With a strong background
              in web development and a desire to explore various architectural styles and cloud
              technologies, I have had the privilege of working with a range of technologies and
              platforms.
            </p>

            <p>Here are some of the technologies on which I've worked:</p> */}
          </div>

          {/* <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul> */}
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
      <br />
      <div>
        <StyledText>
          <div>
            <p>
              Speaking of my professional life, I am currently pursuing my master's in applied
              computer science at <a href="https://www.gvsu.edu/">GVSU</a>. With a strong background
              in web development and a desire to explore various architectural styles and cloud
              technologies, I have had the privilege of working with a range of technologies and
              platforms.
            </p>

            <p>Here are some of the technologies on which I've worked:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;

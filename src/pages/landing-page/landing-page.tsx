import React, { useState, useRef, useEffect } from 'react'
import * as inputData from 'src/assets/conf.json'
import './landing-page.scss';
import DisplayName from 'src/shared/components/display-name/display-name.component';
import ProjectStrip from 'src/shared/components/project-strip/project-strip.component';
import AboutSection from './sections/about/about.component';


interface Props {
  children: any
}

const LandingPage = (props: Props) => {
  const mediaListItems = inputData.mediaListItems; 
  const name = inputData.name; 
  const [centerHeight, setCenterHeight] = useState('100vh');
  const centerPageRef = useRef<any>(null);

  useEffect(() => {
    function handleResize() {      
      centerPageRef.current.scrollHeight >  window.innerHeight ? setCenterHeight(''): setCenterHeight('100vh')
    }
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="center" ref={centerPageRef} style={{height: centerHeight}}>
      <DisplayName
        name={name}
        subtitle={''}
        mediaListItems={mediaListItems} 
      />
      <AboutSection>
        <h3>Some of my latest work</h3>
        <ProjectStrip></ProjectStrip>
      </AboutSection>
    </div>
  )
}

export default LandingPage

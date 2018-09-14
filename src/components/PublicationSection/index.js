import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import whyImportReact from '../../assets/images/publications/whyimportreact.jpeg'
import customHeader from '../../assets/images/publications/customHeader.jpeg'
import bundleBuddy from '../../assets/images/publications/bundleBuddy.png'
import errorBoundaries from '../../assets/images/publications/errorBoundaries.png'
import componentReduxStore from '../../assets/images/publications/componentReduxStore.png'

class PublicationSection extends React.Component {
  render() {
    return (
      <Section title="Publications">
        <div className="row">
          <ExperienceUnit
            logo={whyImportReact}
            colour="#FFFFFF"
            title="Why import React from “react” in a functional component?"
            link="https://hackernoon.com/why-import-react-from-react-in-a-functional-component-657aed821f7a"
            timeperiod="2017"
            subtitle="An article to help anyone who is starting with React understand why import React from react is needed."
          />
          <ExperienceUnit
            logo={customHeader}
            colour="#FFFFFF"
            title="How to use a Custom Header and Custom bottom tab bar for React Native with React Navigation?"
            link="https://hackernoon.com/how-to-use-a-custom-header-and-custom-bottom-tab-bar-for-react-native-with-react-navigation-969a5d3cabb1"
            timeperiod="2017"
            subtitle="An article to explain how to use a Custom Header and Custom bottom tab bar for React Native with React Navigation?"
          />
          <ExperienceUnit
            logo={bundleBuddy}
            colour="#FFFFFF"
            title="Faster, smaller bundles using Bundle Buddy and webpack’s CommonsChunkPlugin"
            link="https://medium.com/webpack/bundle-buddy-and-webpack-commons-chunk-101da29166bf"
            timeperiod="2017"
            subtitle="Article explaining how bundle buddy can help you remove duplicate code and in better chunking of
            your webpack bundles"
          />
          <ExperienceUnit
            logo={errorBoundaries}
            colour="#FFFFFF"
            title="Error Boundaries in React 16"
            link="https://hackernoon.com/error-boundaries-in-react-16-32fb8e185a3"
            timeperiod="2017"
            subtitle="Article explaining how and when to use Error boundaries in React 16"
          />
          <ExperienceUnit
            logo={componentReduxStore}
            colour="#FFFFFF"
            title="Component State vs Redux Store"
            link="https://medium.com/netscape/component-state-vs-redux-store-1eb0c929277"
            timeperiod="2017"
            subtitle="Article explaining when to choose component state and when to choose Redux store."
          />
        </div>
      </Section>
    )
  }
}

export default PublicationSection

import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import GraphQL from '../../assets/images/courses/GraphQL.jpg'
import nodeAdvanced from '../../assets/images/courses/nodeAdvanced.jpg'
import react from '../../assets/images/courses/react.jpg'
import reactAdvanced from '../../assets/images/courses/reactAdvanced.jpg'
import reactNative from '../../assets/images/courses/reactNative.jpg'
import reactRedux from '../../assets/images/courses/reactRedux.jpg'
import ssr from '../../assets/images/courses/ssr.jpg'

class CoursesSection extends React.Component {
  render() {
    return (
      <Section title="Courses">
        <div className="row">
          <ExperienceUnit
            logo={GraphQL}
            colour="#F9D26B"
            title="GraphQL with React: The Complete Developers Guide"
            link="https://www.udemy.com/graphql-with-react-course/"
            timeperiod="2017"
            subtitle="GraphQL with React: The Complete Developers Guide"
          />
          <ExperienceUnit
            logo={nodeAdvanced}
            colour="#F9D26B"
            title="Node JS: Advanced Concepts"
            link="https://www.udemy.com/advanced-node-for-developers/"
            timeperiod="2017"
            subtitle="Node JS: Advanced Concepts"
          />
          <ExperienceUnit
            logo={react}
            colour="#FFFFFF"
            title="Modern React with Redux"
            link="https://www.udemy.com/react-redux/"
            timeperiod="2017"
            subtitle="Modern React with Redux"
          />
          <ExperienceUnit
            logo={reactAdvanced}
            colour="#FFFFFF"
            title="Advanced React and Redux: 2018 Edition"
            link="https://www.udemy.com/react-redux-tutorial/"
            timeperiod="2017"
            subtitle="Advanced React and Redux: 2018 Edition"
          />
          <ExperienceUnit
            logo={reactNative}
            colour="#FFFFFF"
            title="React Native: Advanced Concepts"
            link="https://www.udemy.com/react-native-advanced/"
            timeperiod="2017"
            subtitle="React Native: Advanced Concepts"
          />
          <ExperienceUnit
            logo={reactRedux}
            colour="#FFFFFF"
            title="The Complete React Native and Redux Course"
            link="https://www.udemy.com/the-complete-react-native-and-redux-course/"
            timeperiod="2017"
            subtitle="The Complete React Native and Redux Course"
          />
          <ExperienceUnit
            logo={ssr}
            colour="#FFFFFF"
            title="Server Side Rendering with React and Redux"
            link="https://www.udemy.com/server-side-rendering-with-react-and-redux/"
            timeperiod="2017"
            subtitle="Server Side Rendering with React and Redux"
          />
        </div>
      </Section>
    )
  }
}

export default CoursesSection

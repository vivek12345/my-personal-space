import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zalandoLogo from '../../assets/images/experience/zalando.png'
import trustingSocialLogo from '../../assets/images/experience/trustingSocial.jpeg'
import hotstarLogo from '../../assets/images/experience/Hotstar.svg'
import craftsvillaLogo from '../../assets/images/experience/craftsvilla.png'
import housingLogo from '../../assets/images/experience/housing.png'
import ivpLogo from '../../assets/images/experience/ivp.jpg'
import qoalaLogo from '../../assets/images/experience/qoala.png'



class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
        <ExperienceUnit
            logo={qoalaLogo}
            colour='#fff'
            title='Zalando'
            link='https://qoala.my/my-en'
            timeperiod='2021 - Present'
            subtitle='Working as an Engineering manager with South-east asia"s largest Insurance Tech. Building a team for the B2C app. Hiring, mentoring and helping drive GWP for the company.'
          />  
          <ExperienceUnit
            logo={zalandoLogo}
            colour='#fff'
            title='Zalando'
            link='https://en.zalando.de'
            timeperiod='2019 - 2021'
            subtitle='Working as a senior software engineer building a price steering ui using React and state machine. 
            Also working on creating a component library using emotion and styled-system'
          />  
          <ExperienceUnit
            logo={trustingSocialLogo}
            colour='#fff'
            title='Trusting Social'
            link='https://trustingsocial.com/'
            timeperiod='2017 - 2018'
            subtitle='Currently Working as an UI Engineer creating lending platforms and 
            digital jouney for our banks in Indonesia, Vietnam and India'
          />  
          <ExperienceUnit
            logo={hotstarLogo}
            colour='#122434'
            title='Hotstar'
            link='https://www.hotstar.com/'
            timeperiod='2017 - 2017'
            subtitle='Worked as an SDE-2, converting our angular platform into a react platform.
            Integrated mixpanel analytics into our entire system'
          />
          <ExperienceUnit
            logo={craftsvillaLogo}
            colour='#fff'
            title='Craftsvilla'
            link='https://www.craftsvilla.com/'
            timeperiod='2015 - 2017'
            subtitle='Learnt the ins and outs of product development and
              built various features including revamping the entire website'
          />
          <ExperienceUnit
            logo={housingLogo}
            colour='#FFFFFF'
            title='Housing'
            link='https://housing.com/'
            timeperiod='2015-2015'
            subtitle='Built the platform for renting and buying houses with a kick-ass UI to show houses on google maps
            and to search a house based on the distance and time you wish to travel'
          />
          <ExperienceUnit
            logo={ivpLogo}
            colour='#FFFFFF'
            title='Indus Valley Partners'
            link='https://www.ivp.in/'
            timeperiod='2014-2015'
            subtitle='Contributing in the development process of Bridge, a Partnership Accounting Software developed for a Private Equity firm, stationed at New York.
            Furthered my knowledge on Finance, Hedge Funds and Private Equities'
          />
          
        </div>
      </Section>
    )
  }
}

export default ExperienceSection

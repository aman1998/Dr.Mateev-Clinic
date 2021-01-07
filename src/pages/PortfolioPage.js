import PageTemplate from "../components/Template/PageTemplate2"

import Section1 from '../components/PortfolioPage/Section-1'
import Section2 from '../components/PortfolioPage/Section-2'
// import Section3 from '../components/PortfolioPage/Section-3'
// import Section4 from '../components/PortfolioPage/Section-4'
// import Section5 from '../components/PortfolioPage/Section-5'
// import Section6 from '../components/PortfolioPage/Section-6'

const PortfolioPage = () => {
  return (
    <PageTemplate>
      <div className='portfolioPage'>
        <Section1 />
        <Section2 />
        {/* <Section3 /> */}
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        {/* <Section6 /> */}
      </div>
    </PageTemplate>
  )
}

export default PortfolioPage
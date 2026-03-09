import banner from '../../assets/images/banner.png'
import { BannerContainer, Title } from './styles'

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Title>Italiana</Title>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </BannerContainer>
  )
}

export default Banner

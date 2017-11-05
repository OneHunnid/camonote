import Link from 'next/link'

const Hero = () => (
  <div className="hero container--large">
    <div className="hero__left">
      <div className="hero__title">Chat Anonymously</div>
      <div className="hero__description">No account required. All messages delete after 24 hours.</div>
      <div className="hero__button-group">
        <div className="button button--primary">Start or Find A Chat</div>
        <div className="button button--secondary">Learn More</div>
      </div>
    </div>
    <div className="hero__right"></div>
    <div className="graphic-ball"></div>
  </div>
)

export default Hero

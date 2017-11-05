import Link from 'next/link'

const About = () => (
  <div className="about container">

    <div className="about__title">Whats the deal?</div>
    <div className="about__description">We’ve built an open-source, anonymous conversation platform.</div>

    <div className="about__grid">
      <div className="about__item">
        <div className="about__item__title">No User Accounts</div>
        <div className="about__item__description">We don’t require you to sign up with Facebook, Twitter or an email address.</div>
      </div>

      <div className="about__item">
        <div className="about__item__title">No Tracking</div>
        <div className="about__item__description">We don’t use cookies or other scripts that track and identify users so you stay private.</div>
      </div>

      <div className="about__item">
        <div className="about__item__title">Message Deletion</div>
        <div className="about__item__description">Once a message is 24 hours old, it’s automatically deleted. Forever and ever.</div>
      </div>

      <div className="about__item">
        <div className="about__item__title">Open Sourced</div>
        <div className="about__item__description">We’ve open sourced our code to the world. No tricks or backdoors up our sleeves.</div>
      </div>

      <div className="about__item">
        <div className="about__item__title">Emojis</div>
        <div className="about__item__description">To keep messages anonymous, each one is assigned a random emoji. Screen names were so early 2000s.</div>
      </div>

      <div className="about__item grid-align-1">
        <div className="about__item__title">Delightful Surprises</div>
        <div className="about__item__description">Find secret conversations, plan a surprise party, share your favorite gifs, music and videos, discover fun chat backgrounds and more!</div>
      </div>

      <div className="about__item grid-align-image about__item--shadow">
        <img src="../static/chat-ui.png" />
      </div>
    </div>
  </div>
)

export default About

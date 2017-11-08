import Search from './Search.js'
import Link from 'next/link'

const Hero = () => (
  <div className="hero container--large">
    <div className="hero__left">
      <div className="hero__title">Chat Anonymously</div>
      <div className="hero__description">No account required. All messages delete after 24 hours.</div>
      <div className="hero__button-group">
        <Search />
        <div className="button button--secondary">Learn More</div>
      </div>
    </div>
    <div className="hero__right">
      <div className="chat">
        <div className="chat__wrapper">
          <div className="chat__item">
            <div emoji="grinning-face" className="chat__emoji">&#x1F600;</div>
            <div className="chat__message">I love dipping my pizza in ranch. Its so tasty!</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F601;</div>
            <div className="chat__message">I love doing that too</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Ewwww! Thats so gross.. why would you ruin a perfectly good pizza with adding ranch to it?!</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Uhhh... its actually super tasty...</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Ranch pizza is the best pizza! omg I can't believe you don't like it!</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Who likes ham and pineapple pizza? Thats my go to favorite pizza order from the place down the street.</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Yummmm!!! That sweet warm pineapple tho!</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Anything going on this weekend in NYC? I have some friends visiting and they want to go do stuff but idk what...</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">haha Im not a fan of the pineapple... just cheese</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Theres a bunch of stuff going on this weekend in the city. There are some food festivals if you want to stuff your faces</div>
          </div>

          <div className="chat__item">
            <div className="chat__emoji">&#x1F602;</div>
            <div className="chat__message">Why not go see a concert or go clubbing? Williamsburg has a bunch of venues with great music.</div>
          </div>
        </div>
      </div>


    </div>
    <div className="graphic-ball"></div>
    <div className="graphic-bar-group">
      <div className="graphic-bar__item"></div>
      <div className="graphic-bar__item"></div>
    </div>
  </div>
)

export default Hero

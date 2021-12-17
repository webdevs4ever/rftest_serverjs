import cardstyles from './Card.module.css';

const Card = (props) => (
    <div className={cardstyles.card}>
      <div className={cardstyles.front}>
        <img src="/crypto_new.jpg" alt="crypto small hero" className={cardstyles.cardImage} />
        <div className={cardstyles.container}>
          <h3>New hodl price <span className={cardstyles.price}>$99.99</span></h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices.</p>
        </div>
      </div>
    </div>
  );

export default Card;

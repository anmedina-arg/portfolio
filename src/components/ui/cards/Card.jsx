import styles from "./card.module.css";

const Card = ({ id, image, title, github, demo, description, skillArr }) => {
  return (
    <>
      <article className={styles.portfolio__item} key={id}>
        <div className={styles.adentro}>
          <img
            className={styles.card__image}
            src={image}
            alt="imagen de proyecto"
          />
          <h3>{title}</h3>
          {/* <p>{ description}</p> */}
          <ul>
            {skillArr?.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <div className={styles.portfolio__item_cta}>
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
          <div>
            <a href={demo} className="btn" target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;

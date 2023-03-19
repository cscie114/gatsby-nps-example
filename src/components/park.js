import * as React from "react"
import * as styles from './park.module.css'

const Park = ({ park }) => {
  return (
    <div className={styles.park}>
        <h2>{park.fullName}</h2>
        <p>{park.description}</p>
        <p>More information at <a href={park.url}>nps.gov/{park.parkCode}</a></p>
        <div className={styles.images}>
            {park.images.map((img) => (
                <figure key={img.url}>
                    <img src={img.url} alt={img.altText } />
                    <figcaption>
                        {img.caption}<br/>
                        <i>{img.credit}</i>
                    </figcaption>
                </figure>
            ))}
        </div>
    </div>
  );
};

export default Park;

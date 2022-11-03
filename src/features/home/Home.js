import React from 'react';

import Navbar from '../../components/Navbar';

import styles from './Home.module.scss'

const Home = () => {

    return (
        <div>
            <div className={styles.sectionTop}>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.title1}>
                        Random <br /> NFT <br /> Name
                    </div>
                    <div className={styles.desc1}>
                        This is random message.
                    </div>
                    <div className={styles.btnBuy}>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className={styles.nft}></div>
            <div className={styles.sectionBottom}>
                <div className={styles.container}>
                    <div className={styles.title2}>UNIQUE DIGITAL COLLECTABLES</div>
                    <div className={styles.desc2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea diam morbi non
                        egestas placerat elit. Mauris sociis dignissim bibendum vivamus.
                        Viverra ac dolor amet, id tortor pretium pulvinar ut. Sit accumsan vitae
                        at sit tellus. Fermentum blandit mi amet ullamcorper porta lacus lacinia
                        dignissim malesuada. Elit nam orci ornare at rhoncus sit ullamcorper et.
                        Ullamcorper magna
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;

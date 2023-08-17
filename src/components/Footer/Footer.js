import React from 'react';
import styles from '../Footer/Footer.module.css';
import logo from "../../assests/navlogo.png";
import image from "../../assests/Group.png";
import image1 from "../../assests/Group1.png";
import image2 from "../../assests/Group2.png";
import image3 from "../../assests/Subtract.png";


function Footer() {
    return (
        <>
            <div className={styles.contact}>
                <div className={styles.contact1}>
                    <p>GET IN TOUCH</p>
                    <div>
                        <input
                            type="text"
                            placeholder="ENTER EMAIL ADDRESS"
                        />
                        <button>Contact Now</button>
                    </div>

                </div>
            </div>
            <div className={styles.Footer}>
                <div className={styles.left}>
                    <div className={styles.flex}>
                        <img src={logo} alt="Logo" className={styles.logoimg} />
                        <div className={styles.content}>
                            <p className={styles.bold}>GOLDEN ROYCE DESIGN</p>
                            <p className={styles.thin}>BUISNESS MADE SMART</p>
                        </div>
                        <div className={styles.icons}>
                            <div>
                                <img src={image} alt='img' className={styles.img} />
                            </div>
                            <div>
                                <img src={image1} alt='img' className={styles.img} />
                            </div>
                            <div>
                                <img src={image2} alt='img' className={styles.img} />
                            </div>
                            <div>
                                <img src={image3} alt='img' className={styles.img} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.box}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <h3>What We Do</h3>
                                <p>Cyber Security</p>
                                <p>Buzz - Y - Bee</p>
                                <p>IT Services and Solutions</p>
                            </div>
                            <div className={styles.column}>
                                <h3>Company</h3>
                                <p>About Us</p>
                                <p>Verticals</p>
                                <p>Projects</p>
                                <p>Blogs</p>
                                <p>Gallery</p>
                            </div>
                            <div className={styles.column}>
                                <h3>Support</h3>
                                <p>FAQ</p>
                                <p>Policy</p>
                                <p>Business</p>
                            </div>
                            <div className={styles.column}>
                                <h3>Contact</h3>
                                <p>WhatsApp</p>
                                <p>Support 24</p>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
import CountUp from "react-countup";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* Left side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="hero-description flexColStart secondaryText">
            <span>
              Find a variety of properties that suites you very easily.
            </span>
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>
          <div className="flexCenter search-bar ">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button ">search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat ">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter  stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <motion.div
          className="flexCenter hero-right"
          initial={{ y: "7rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "tween" }}
        >
          <div className="image-container">
            <img src="./hero-image.png" alt="hero left image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;

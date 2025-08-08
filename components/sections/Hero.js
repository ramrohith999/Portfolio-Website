import { motion } from 'framer-motion'
import styles from '../../styles/components/Hero.module.css'

const Hero = () => {
  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Frontend Developer & <br />
            <motion.span 
              className={styles.gradient}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Design Enthusiast
            </motion.span>
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I craft digital experiences that blend beautiful design with powerful functionality.
            Currently building amazing products at the intersection of technology and creativity.
          </motion.p>
          
          {/* Education Badge */}
          <motion.div 
            className={styles.educationBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className={styles.educationContent}>
              <img 
                src="data:image/png;base64,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" 
                alt="UCO Logo" 
                className={styles.ucoLogo}
              />
              <div className={styles.educationText}>
                <span className={styles.degree}>Master's Degree in Computer Science</span>
                <span className={styles.school}>University of Central Oklahoma</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a 
              href="#work" 
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href={""}
              className={styles.ctaResume}
              whileHover={{ 
                scale: 1.05,
                // boxShadow: "0 20px 40px rgba(240, 147, 251, 0.4)"
                boxShadow: "0 20px 40px rgba(22, 186, 236, 0.4)"
                
              }}
              whileTap={{ scale: 0.95 }}
              download="Ram_Rohith_Resume.pdf"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              Download Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className={styles.ctaSecondary}
              whileHover={{ x: 10 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.heroPhoto}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={styles.heroPhotoWrapper}>
            <img 
              src="https://avatars.githubusercontent.com/u/88133157?v=4" 
              alt="Ram Rohith - Professional Photo"
              className={styles.heroProfileImage}
            />
            <motion.div 
              className={styles.heroPhotoBorder}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

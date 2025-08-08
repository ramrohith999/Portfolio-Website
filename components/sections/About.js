import { motion } from 'framer-motion'
import styles from '../../styles/components/About.module.css'

const About = () => {
  return (
    <motion.section 
      id="about" 
      className={styles.about}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.aboutContent}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className={styles.aboutContainer}>
          <motion.div 
            className={styles.aboutPhoto}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://avatars.githubusercontent.com/u/88133157?v=4" 
              alt="Ram Rohith - Professional Photo"
              className={styles.profileImage}
            />
          </motion.div>
          
          <div className={styles.aboutText}>
            <motion.p 
              className={styles.aboutParagraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, 
              I bring ideas to life through clean code and intuitive interfaces.
            </motion.p>
            <motion.p 
              className={styles.aboutParagraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open source projects, or experimenting with the latest 
              web technologies.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

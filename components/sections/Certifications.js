import { motion } from 'framer-motion'
import { certifications } from '../../data/portfolio'
import styles from '../../styles/components/Certifications.module.css'

const Certifications = () => {
  return (
    <motion.section 
      id="certifications" 
      className={styles.certifications}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications & Achievements
      </motion.h2>
      
      <div className={styles.certificationsGrid}>
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            className={styles.certificationCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className={styles.certificationImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={cert.image} alt={cert.title} />
              <div className={styles.certificationBadge}>
                <span className={styles.badgeIcon}>{cert.badge}</span>
              </div>
              <motion.div 
                className={styles.certificationOverlay}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className={styles.certificationContent}>
              <motion.h3
                className={styles.certificationTitle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {cert.title}
              </motion.h3>
              <motion.div 
                className={styles.certificationMeta}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.date}>{cert.date}</span>
              </motion.div>
              <motion.a
                href={cert.link}
                className={styles.certificationLink}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ x: 5 }}
              >
                View Certificate →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications

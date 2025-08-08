import { motion } from 'framer-motion'
import { experience } from '../../data/portfolio'
import styles from '../../styles/components/Experience.module.css'

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className={styles.experience}
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
        Experience
      </motion.h2>
      
      <div className={styles.timeline}>
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <motion.div 
              className={styles.timelineDot}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
            />
            <motion.div 
              className={styles.experienceCard}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={styles.experienceHeader}>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <span className={styles.experiencePeriod}>{exp.period}</span>
              </div>
              <h4 className={styles.experienceCompany}>{exp.company}</h4>
              <p className={styles.experienceDescription}>{exp.description}</p>
              <div className={styles.experienceSkills}>
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill}
                    className={styles.experienceSkillTag}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + skillIndex * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience

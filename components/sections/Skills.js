import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import styles from '../../styles/components/Skills.module.css'

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className={styles.skills}
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
        Skills & Technologies
      </motion.h2>
      
      <div className={styles.skillsGrid}>
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            <h3 className={styles.skillCategoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.skillHeader}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills

import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import styles from '../../styles/components/Projects.module.css'

const Projects = () => {
  return (
    <motion.section 
      id="work" 
      className={styles.work}
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
        Projects
      </motion.h2>

      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ 
              y: -12,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
              <div className={styles.projectOverlay} />
            </div>

            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div 
        className={styles.moreProjectsContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a
          href="https://github.com/ramrohith999"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreProjectsButton}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.69.25 2.94.12 3.25.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .33.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z"/>
          </svg>
          <span>More Projects on GitHub</span>
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default Projects
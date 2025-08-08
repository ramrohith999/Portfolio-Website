import { motion } from 'framer-motion'
import styles from '../../styles/components/Navigation.module.css'

const Navigation = () => {
  return (
    <motion.nav 
      className={styles.nav}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.a
        href="#top"
        className={styles.logo}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Ram Rohith
      </motion.a>
      <div className={styles.navLinks}>
        {['About', 'Contact'].map((item, i) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.a>
        ))}
        <motion.a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + 2 * 0.1 }}
          whileHover={{ y: -2 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navigation

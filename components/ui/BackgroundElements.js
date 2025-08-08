import { motion } from 'framer-motion'
import styles from '../../styles/components/BackgroundElements.module.css'

const BackgroundElements = () => {
  return (
    <div className={styles.backgroundElements}>
      {/* Night Sky Background */}
      <motion.div 
        className={styles.nightSky}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Stars */}
        <motion.div 
          className={styles.stars}
          animate={{
            transform: ["translateX(0px)", "translateX(-50px)", "translateX(0px)"]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Shooting Stars */}
        <motion.div 
          className={styles.shootingStars}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.shootingStar}
              style={{
                top: `${Math.random() * 50}%`
              }}
              initial={{ x: "-100px", opacity: 0 }}
              animate={{
                x: "100vw",
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 8 + Math.random() * 5,
                repeat: Infinity,
                repeatDelay: 15,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* Moon */}
        <motion.div 
          className={styles.moon}
          animate={{
            rotate: [0, 360],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            },
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>
    </div>
  )
}

export default BackgroundElements

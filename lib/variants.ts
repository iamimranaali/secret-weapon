export const fadeIn =  (direc: string, delay: number) => {
    return {
        active: {
            x : 0,
            y : 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration:1.2,
                delay: delay,
                ease: [[0.175, 0.885, 0.320, 1.275],
                        [0.175, 0.885, 0.320, 1.275]]
            }
        },
        inactive: {
            y: direc === 'up' ? 100 : direc === 'down' ? -40 : 0,
            x: direc === 'left' ? 120 : direc === 'right' ? -40 : 0,
            opacity:0
        }
      }
}
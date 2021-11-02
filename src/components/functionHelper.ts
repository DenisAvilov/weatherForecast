export const firstUpperCase = (value = 'Weather'): string => value.charAt(0).toUpperCase() + value.substring(1)
export const everyN = (arr: any, n: number): any => arr.filter((e: any, i: number) => i % n === 0)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const giveColor = (n:number) => {
  const colors = [
    'rgba(200,240, 225, 0.1)',
    'rgba(200,230, 215, 0.2)',
    'rgba(200,220, 205, 0.2)',
    'rgba(200,210, 195, 0.2)',
    'rgba(200,200, 185, 0.2)',
    'rgba(200,190, 175, 0.2)',
    'rgba(200,180, 165, 0.2)',
    'rgba(200,170, 155, 0.2)',
    'rgba(200,150, 145, 0.2)',
    'rgba(225,0, 0, 0.3)',
    'rgba(230,0, 0, 0.3)',
    'rgba(235,0, 0, 0.3)',
    'rgba(245,0, 0, 0.3)',
    'rgba(250,0, 0, 0.3)',
    'rgba(255,0, 0, 0.3)',
    'rgba(265,0, 0, 0.3)',
    'rgba(260,0, 0, 0.3)',
    'rgba(265,0, 0, 0.3)',
    'rgba(270,0, 0, 0.4)',
    'rgba(225,0, 0, 0.4)',
    'rgba(230,0, 0, 0.4)',
    'rgba(235,0, 0, 0.4)',
    'rgba(240,0, 0, 0.4)',
    'rgba(245,0, 0, 0.4)',
    'rgba(250,0, 0, 0.4)',
    'rgba(255,0, 0, 0.4)',
    'rgba(260,0, 0, 0.4)',
    'rgba(265,0, 0, 0.5)',
    'rgba(2,0, 0, 0.5)',
    'rgba(230,0, 0, 5)',
    'rgba(250,0, 0, 0.5)',
    'rgba(250,0, 0, 0.5)',
    'rgba(250,0, 0, 0.5)',
    'rgba(250,0, 0, 0.5)',
    'rgba(250,0, 0, 0.5)',
    'rgba(250,0, 0, 0.6)',
    'rgba(250,0, 0, 0.7)',
    'rgba(250,0, 0, 0.8)',
    'rgba(250,0, 0, 0.9)',
    'rgba(250,0, 0, 1)',
  ]
  const colorsNegative = [
    'rgba(66, 130, 255, 1)',
    'rgba(66, 130, 255, 0.1)',
    'rgba(66, 130, 255, 0.2)',
    'rgba(66, 130, 255, 0.3)',
    'rgba(66, 130, 255, 0.4)',
    'rgba(66, 130, 255, 0.5)',
    'rgba(66, 130, 255, 0.6)',
    'rgba(66, 130, 255, 0.7)',
    'rgba(66, 130, 255, 0.8)',
    'rgba(66, 130, 255, 0.9)',
    'rgba(66, 150, 255, 1)',
    'rgba(66, 150, 255, 0.1)',
    'rgba(66, 150, 255, 0.2)',
    'rgba(66, 150, 255, 0.3)',
    'rgba(66, 150, 255, 0.4)',
    'rgba(66, 150, 255, 0.5)',
    'rgba(66, 150, 255, 0.6)',
    'rgba(66, 150, 255, 0.7)',
    'rgba(66, 150, 255, 0.8)',
    'rgba(66, 150, 255, 0.9)',
    'rgba(66, 170, 255, 1)',
    'rgba(66, 170, 255, 0.1)',
    'rgba(66, 170, 255, 0.2)',
    'rgba(66, 170, 255, 0.3)',
    'rgba(66, 170, 255, 0.4)',
    'rgba(66, 170, 255, 0.5)',
    'rgba(66, 170, 255, 0.6)',
    'rgba(66, 170, 255, 0.7)',
    'rgba(66, 170, 255, 0.8)',
    'rgba(66, 170, 255, 0.9)',
  ]
  let rez = ''
  if (n >= 40) {
    rez = 'rgba(250,0, 0, 1)'
  } else if (n > 0 || n > 40) {
    rez = colors[n]
  } else if (n === 0) {
    rez = 'rgba(0, 153, 153, 1)'
  } else if (n > -29) {
    const z = Math.abs(n)
    rez = colorsNegative[z]
  } else if (n <= -30) {
    rez = 'rgba(135, 206, 250, 1)'
  }
  return rez
}

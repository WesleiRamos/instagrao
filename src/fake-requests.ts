import Posts from './assets/posts.json'
import Stories from './assets/stories.json'
import Suggestions from './assets/suggestions.json'

declare global {
  interface Window {
    request: (url: string) => any[]
  }
}

const shuffleArray = (arr: any[]): any[] => {
  const newArr = [ ...arr ]
  for (let i = 0; i < newArr.length; i++) {
    const randomIndex = Math.floor(Math.random() * newArr.length)
    const temp = newArr[i]
    newArr[i] = newArr[randomIndex]
    newArr[randomIndex] = temp
  }
  return newArr
}

window.request = (url: string): any[] => {
  switch (url.replace('https://api.instagrao.com/', '')) {
    case 'posts':
      return shuffleArray(Posts)
    case 'stories':
      return shuffleArray(Stories)
    case 'suggestions':
      return shuffleArray(Suggestions)
  }

  return []
}
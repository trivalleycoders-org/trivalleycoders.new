// logo-data.js
import iHTML from './images/html-5.01.svg'
import iCSS from './images/css-3.01.svg'
import iJS from './images/javascript.svg'
import iMongo from './images/mongodb.svg'
import iExpress from './images/express.svg'
// import iExpress from './images/edit/express1.svg' // resized
import iReact from './images/react.svg'
import iNode from './images/nodejs.on-green.svg'

export const basicsLogos = [
  {
    name: 'HTML 5',
    image: iHTML,
    style: "smallImage",
  },
  {
    name: 'CSS 3',
    image: iCSS,
    style: "smallImage",
  },
  {
    name: 'JavaScript',
    image: iJS,
    style: "smallImage",
  },
]

export const mernLogos = [
  {
    name: 'MongoDB',
    image: iMongo,
    style: 'wideImage',
  },
  {
    name: 'Express',
    image: iExpress,
    style: 'expressImage',
  },
  {
    name: 'React',
    image: iReact,
    style: "smallImage",
  },
  {
    name: 'Node',
    image: iNode,
    style: "smallImage",
  },
]

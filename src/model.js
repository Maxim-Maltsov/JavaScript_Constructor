
import image from './assets/constructor.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks.js'
import {css} from './utils.js'

export const model = [

  new TitleBlock ('Конструктор сайтов, на чистом Java Script, с которым справится каждый.', {
    tag: 'h5',
    styles: css({
      background: 'linear-gradient(to right, #40273E, #A33FBF)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
      'margin-top': '0.5rem',
    })
   
  }),
  new ImageBlock (image, {
    alt: 'constructor',
    styles: css({
      display: 'flex',
      padding: '1.5rem 0',
      'justify-content': 'center',
    }),
    imageStyles: css({
      width: '800px',
      hieght: 'auto',
      'box-shadow': '3px 3px 6px 4px #888',
    })
  }),
  new TextBlock ('Конструктор сайтов – это система из набора инструментов, которая позволяет создавать сайты и администрировать их без каких-либо специализированных знаний. ... Мы подготовили для вас лучший инструмент для создания идеального сайта с учётом ваших желаний и потребностей.', {
    styles: css({
      padding: '1rem',
      'padding-bottom': '2rem',
      'font-size': '15px',
      'line-height': '1.7',
    })
  }),
  new TextColumnBlock ([
    'Простой и удобный конструкторы сайтов поможет сделать сайт-визитку, лендинг, личный блог или даже онлайн-магазин.',
    'Подойдёт как новичкам, так и опытным пользователям, которым необходимо куда больше возможностей.',
    'Удобный интерфейс, интуитивный редактор и бесплатный хостинг помогут вам в создании вашего проекта.'
  ], {
    styles: css({
      background: 'linear-gradient(45deg, #A33FBF, #403C59)',
      color: 'white',
      display: 'flex',
      padding: '2.5rem 1.5rem 2rem 1.5rem',
      'justify-content': 'space-around',
      'margin-bottom': '1rem; font-size: 16px; line-height: 2',
    })
  }),
]

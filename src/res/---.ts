// import { ReactComponent as Dog } from './media/icons/dog.svg'
// import { ReactComponent as Cat } from './media/icons/cat.svg'
// import { ReactComponent as Rabbit } from './media/icons/rabbit.svg'
// import { ReactComponent as Fish } from './media/icons/fish.svg'
// import Fish from './media/icons/fish.svg'
// import Rabbit from './media/icons/rabbit.svg'
// import Cat from './media/icons/cat.svg'
import Dog from './media/icons/dog.svg'
console.log({ Dog })
const config = {
  tests: [
    {
      id: '0',
      name: 'Тест для иконок',
      defaultQuestion: 'Выберите название иконки',
      exersises: [
        {
          id: '0',
          illustration: Dog,
          typeOfIllustration: 'svg',
          customStyles: '',
          answer: 'Собака',
        },
        // {
        //   id: '1',
        //   illustration: Cat,
        //   typeOfIllustration: 'svg',
        //   customStyles: '',
        //   answer: 'Кот',
        // },
        // {
        //   id: '2',
        //   illustration: Rabbit,
        //   typeOfIllustration: 'svg',
        //   customStyles: '',
        //   answer: 'Кролик',
        // },
        // {
        //   id: '3',
        //   illustration: Fish,
        //   typeOfIllustration: 'svg',
        //   customStyles: '',
        //   answer: 'Рыба',
        // },
      ],
      config: {
        numberOfOptions: 4,
        optionList: ['Собака', 'Рыба', 'Кот', 'Кролик'],
        optionStyle: {},
      },
    },
    // {
    //   id: '1',
    //   name: 'Тест на знание видов животных',
    //   defaultQuestion: 'Выберите тип животного',
    //   exersises: [
    //     {
    //       id: '0',
    //       illustration: { Dog },
    //       typeOfIllustration: 'svg',
    //       customStyles: '',
    //       answer: 'Млекопитающее',
    //     },
    //     {
    //       id: '1',
    //       illustration: { Cat },
    //       typeOfIllustration: 'svg',
    //       customStyles: '',
    //       answer: 'Млекопитающее',
    //     },
    //     {
    //       id: '2',
    //       illustration: { Rabbit },
    //       typeOfIllustration: 'svg',
    //       customStyles: '',
    //       answer: 'Млекопитающее',
    //     },
    //     {
    //       id: '3',
    //       illustration: { Fish },
    //       typeOfIllustration: 'svg',
    //       customStyles: '',
    //       answer: 'Водоплавающее',
    //     },
    //   ],
    //   config: {
    //     numberOfOptions: 2,
    //     optionList: ['Млекопитающее', 'Водоплавающее'],
    //     optionStyle: {},
    //   },
    // },
  ],
}
export default config

const config = {
  tests: [
    {
      id: '0',
      name: 'Тест на знание степенных помет',
      defaultQuestion: 'Выберите степенную помету знамени',
      exersises: [
        {
          id: '1',
          illustration: "<span class='red'>ì</span>k(",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Фа',
        },
        {
          id: '2',
          illustration: "<span class='red'>ö</span>SN",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ми',
        },
        {
          id: '3',
          illustration: "<span class='red'>Ö</span>A",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ми низкое',
        },
        {
          id: '4',
          illustration: "<span class='red'>í</span>w",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ре',
        },
        {
          id: '5',
          illustration: "<span class='red'>Í</span>L=4",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ре низкое',
        },
        {
          id: '6',
          illustration: "<span class='red'>Ã</span>Q",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ут низкое',
        },
        {
          id: '7',
          illustration: "<span class='red'>ã</span>B",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ут',
        },
        {
          id: '8',
          illustration: "<span class='red'>ï</span>e",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Соль',
        },
        {
          id: '9',
          illustration: "<span class='red'>âá</span>SK(",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ля',
        },
        {
          id: '10',
          illustration: "<span class='red'>Î</span>RА",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Фа высокое',
        },
        {
          id: '11',
          illustration: "<span class='red'>Ï+</span>DJ:?2",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Соль высокое',
        },
        {
          id: '12',
          illustration: "<span class='red'>Âá</span>88K:0",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Ля высокое',
        },
      ],
      config: {
        numberOfOptions: 4,
        optionList: ['Ут', 'Ре', 'Ми', 'Фа', 'Соль', 'Ля'],
        optionStyle: {},
      },
    },
    {
      id: '1',
      name: 'Единородныи Сын, глас 5',
      defaultQuestion: 'Как поется этот крюк?',
      exersises: [
        {
          // стопица Фа
          id: '1',
          illustration: "<span class='red'>ì</span>c",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '1 звук в 1/2',
        },
        {
          // стопица Фа c очком
          id: '2',
          illustration: "<span class='red'>ì</span>c1",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '2 звука вниз по 1/4',
        },
        {
          // статья светлая Ля
          id: '3',
          illustration: "<span class='red'>â</span>SN",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '1 звук в 4/4',
        },
        {
          // крюк соль
          id: '4',
          illustration: "<span class='red'>ï</span>Б(",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '1 звук в 1/2',
        },
        {
          // Скамейца Соль высокое
          id: '5',
          illustration: "<span class='red'>Ï</span>L>\\",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '2 звука вверх по 1/4',
        },
        {
          // Чашка
          id: '6',
          illustration: "<span class='red'>â</span>H",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: '2 звука вниз по 1/4',
        },
      ],
      config: {
        numberOfOptions: 4,
        optionList: [
          '2 звука вниз по 1/4',
          '1 звук в 1/2',
          '2 звука вверх в 1/2',
          '1 звук в 1/4',
          '3 звука вниз по 1/8',
          '3 звука вверх по 1/2',
        ],
        optionStyle: {},
      },
    },
    {
      id: '1',
      name: 'Тест на знание указательных помет',
      defaultQuestion: 'Выберите указательную помету знамени',
      exersises: [
        {
          id: '1',
          illustration: "<span class='red'>Îá</span>88J:4",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Борзая',
        },
        {
          id: '2',
          illustration: "<span class='red'>â+</span>SK(?",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Тихая',
        },
        {
          id: '3',
          illustration: "<span class='red'>öê</span>D6",
          typeOfIllustration: 'html',
          customStyles: {
            illustration: 'kruk krukIllustration',
            result: 'kruk krukResult',
          },
          answer: 'Купная',
        },
        // {
        //   id: '4',
        //   illustration: "<span class='red'>Öë</span>H",
        //   typeOfIllustration: 'html',
        //   customStyles: { illustration: 'kruk krukIllustration', result: 'kruk krukResult' },
        //   answer: 'Ломка'
        // },
        // {
        //   id: '5',
        //   illustration: "<span class='red'>î</span>H",
        //   typeOfIllustration: 'html',
        //   customStyles: { illustration: 'kruk krukIllustration', result: 'kruk krukResult' },
        //   answer: 'Скобка'
        // },
        // {
        //   id: '5',
        //   illustration: "<span class='red'>öó</span>BK",
        //   typeOfIllustration: 'html',
        //   customStyles: { illustration: 'kruk krukIllustration', result: 'kruk krukResult' },
        //   answer: 'Ударка'
        // }
      ],
      config: {
        numberOfOptions: 4,
        optionList: ['Тихая', 'Борзая', 'Ломка', 'Скобка', 'Ударка', 'Купная'],
        optionStyle: {},
      },
    },
  ],
}

export default config

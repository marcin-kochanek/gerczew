const menu_data = [
  {
    id: 1,
    title: 'Strona główna',
    link: '/',
  },
  {
    id: 2,
    title: 'Usługi',
    link: '/uslugi',
    dropdown_menus: [
      { title: 'Stomatologia zachowawacza', link: '/stomatologia-zachowawcza' },
      { title: 'Leczenie kanałowe', link: '/leczenie-kanalowe' },
      { title: 'Protetyka', link: '/protetyka' },
      { title: 'Periodontologia', link: '/periodontologia' },
      {
        title: 'Diagnostyka stomatologiczna',
        link: '/diagnostyka-stomatologiczna',
      },
      { title: 'Profilaktyka', link: '/profilaktyka' },
      {
        title: 'Metamorfoza w jeden dzień',
        link: '/metamorfoza-w-jeden-dzien',
      },
      {
        title: 'Bonding i Flow Injection',
        link: '/bonding-flow-injection',
      },
      { title: 'Wybielanie zębów', link: '/wybielanie-zebow' },
      { title: 'Implanty zębowe', link: '/implanty-zebowe' },
    ],
  },
  {
    id: 3,
    title: 'Cennik',
    link: '/cennik',
  },
  {
    id: 4,
    title: 'Metamorfozy',
    link: '/metamorfozy',
  },
  {
    id: 5,
    title: 'O nas',
    link: '/o-nas',
  },
  {
    id: 6,
    title: 'Kontakt',
    link: '/kontakt',
  },
]

export default menu_data

// mobile menus
export const mobile_menu_data = menu_data

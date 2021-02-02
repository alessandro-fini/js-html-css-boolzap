var app = new Vue ({
  el: '#app',
  data: {
    myUser: {
      avatar: 'img/avatar_io.jpg',
      imgAlt: 'avatar',
      name: 'Jill Porter'
    },
    contacts: [
      {
        avatar: 'img/avatar_1.jpg',
        imgAlt:'avatar',
        name: 'Michele',
        visible: false
      },
      {
        avatar: 'img/avatar_2.jpg',
        imgAlt:'avatar',
        name: 'Fabio',
        visible: false
      },
      {
        avatar: 'img/avatar_3.jpg',
        imgAlt:'avatar',
        name: 'Samuele',
        visible: false,
        messages: [
          {
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
          },
          {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
          },
          {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
          }
        ]
      },
      {
        avatar: 'img/avatar_4.jpg',
        imgAlt:'avatar',
        name: 'Luis',
        visible: false
      },
      {
        avatar: 'img/avatar_5.jpg',
        imgAlt:'avatar',
        name: 'Paolo',
        visible: false
      },
      {
        avatar: 'img/avatar_6.jpg',
        imgAlt:'avatar',
        name: 'Martina',
        visible: false
      },
      {
        avatar: 'img/avatar_7.jpg',
        imgAlt:'avatar',
        name: 'Aldo',
        visible: false
      },
      {
        avatar: 'img/avatar_8.jpg',
        imgAlt:'avatar',
        name: 'Ludovico',
        visible: false
      }
    ]
  }
});
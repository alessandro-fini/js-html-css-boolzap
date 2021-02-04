var app = new Vue ({
  el: '#app',
  data: {
    myUser: {
      avatar: '_8',
      name: 'Alessandro'
    },
    contacts: [
      {
        avatar: '_1',
        name: 'Michele',
        visible: true,
        messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
          }
        ]
      },
      {
        avatar: '_2',
        name: 'Fabio',
        visible: true,
        messages: [
          {
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
          },
          {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
          },
          {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
          }
        ]
      },
      {
        avatar: '_3',
        name: 'Samuele',
        visible: true,
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
        avatar: '_4',
        name: 'Luis',
        visible: true,
        messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
          }
        ]
      },
      {
        avatar: '_5',
        name: 'Paolo',
        visible: true,
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
        avatar: '_6',
        name: 'Martina',
        visible: true,
        messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
          }
        ]
      },
      {
        avatar: '_7',
        name: 'Aldo',
        visible: true,
        messages: [
          {
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
          },
          {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
          },
          {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
          }
        ]
      },
      {
        avatar: '_io',
        name: 'Elena',
        visible: true,
        messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
          }
        ]
      }
    ],
    /* contatto attivo */
    activeContact: '',
    /* messaggio da input */
    newText: '',
    /* cerca contatto */
    searchContact: ''
  },
  methods: {
    /* sostituzione del contatto attivo */
    toActive: function(index){
      this.activeContact = this.contacts[index];
      this.contacts[index] = this.activeContact;
    },
    /* aggiunta nuovo messaggio */
    addMessage: function(){
      /* rilevamento data e ora */
      newDate = moment().format('DD/MM/YYYY HH:mm:ss');
      /* / */
      newMessage = {
        date: newDate,
        text: this.newText,
        status: 'sent'
      };
      messageArray = this.activeContact.messages;
      messageArray.push(newMessage);
      this.newText = '';
      /* messaggio di risposta */
      answer = setInterval(function(){
        answerDate = moment().format('DD/MM/YYYY HH:mm:ss');
        answerMessage = {
          date: answerDate,
          text: 'ok',
          status: 'received'
        };
        this.messageArray.push(answerMessage);
        clearInterval(answer);
      }, 1000);
      /* / */
    },
    /* funzione di ricerca */
    searchUser: function(){
      this.contacts.forEach((element) => {
        if (element.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    }
  }
});

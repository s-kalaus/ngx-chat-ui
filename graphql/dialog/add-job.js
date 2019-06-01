const { messageTypes, messagePayloadActions } = require('../lib/graphql');

const AddJob = {
  partners: ['bot'],
  flow: {
    main: [
      {
        id: 'start',
        messages: [
          {
            messagePartnerId: 'bot',
            payload: {
              type: messageTypes.text,
              text: 'Hey, 👋'
            },
          },
          {
            messagePartnerId: 'bot',
            payload: {
              type: messageTypes.text,
              text: 'My Name is Jim'
            },
          },
          {
            messagePartnerId: 'bot',
            payload: {
              type: messageTypes.text,
              text: 'I am here to help you post a job!'
            },
          },
          {
            messagePartnerId: 'bot',
            action: {
              type: messageTypes.select,
              items: [
                {
                  id: 0,
                  icon: '👌',
                  className: 'ngx-chat-ui-action-select-item-cta'
                },
                {
                  id: 1,
                  text: 'Nope...',
                  action: {
                    type: messagePayloadActions.changeFlow,
                    flow: 'noJob'
                  }
                },
              ],
            },
            payload: {
              type: messageTypes.text,
              text: 'Do you have a work to do?'
            },
          },
        ],
      },
      {
        id: 'zipcode',
        messages: [
          {
            messagePartnerId: 'bot',
            action: {
              type: messageTypes.zipcode,
            },
            payload: {
              type: messageTypes.text,
              text: 'Where do you live?',
            },
          },
        ],
      },
      {
        id: 'talk',
        messages: [
          {
            messagePartnerId: 'bot',
            action: {
              type: messageTypes.text,
            },
            payload: {
              type: messageTypes.text,
              text: 'Lets just talk!',
            },
          },
        ],
      },
      {
        id: 'finish',
        messages: [
          {
            messagePartnerId: 'bot',
            action: {
              type: messageTypes.select,
              items: [
                {
                  id: 0,
                  icon: '🤟',
                  className: 'ngx-chat-ui-action-select-item-cta'
                },
                {
                  id: 1,
                  text: 'OK'
                },
              ],
            },
            payload: {
              type: messageTypes.text,
              text: '👍 Great. Job has been posted!',
            },
          },
        ],
      },
    ],
    noJob: [
      {
        id: 'end',
        messages: [
          {
            messagePartnerId: 'bot',
            payload: {
              type: messageTypes.text,
              text: 'Go to hell! 😈'
            },
          },
          {
            messagePartnerId: 'bot',
            payload: {
              type: messageTypes.text,
              text: 'I give you lat chance!'
            },
            action: {
              type: messageTypes.select,
              className: 'ngx-chat-ui-action-select-list',
              items: [
                {
                  id: 0,
                  text: 'Option 1'
                },
                {
                  id: 1,
                  text: 'Option 2'
                },
              ],
            },
          },
        ],
      }
    ]
  }
};

module.exports = {
  AddJob,
};

module.exports = {
  name: 'libs-ngx-chat-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-chat-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

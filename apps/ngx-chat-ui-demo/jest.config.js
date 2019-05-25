module.exports = {
  name: "ngx-chat-ui-demo",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/ngx-chat-ui-demo/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};

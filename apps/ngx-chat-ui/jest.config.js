module.exports = {
  name: "ngx-chat-ui",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/ngx-chat-ui/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};

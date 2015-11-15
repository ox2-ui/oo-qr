//
//      ox2Qr: Lifecycle Hooks
//

Template.ooQr.onRendered(function() {
  this.autorun(() => {
    const data = Template.currentData();
    const type = data.type || 'image';
    qr[type]({
      [type]: this.firstNode,
      value: data.codeValue || 1,
      size: data.size || 9,
      level: data.level || 'H',
    });
  });
});

Template.ooQr.helpers({
  typeCanvas() {
    return this.type === 'canvas' ? true : false;
  },
});

//
//      ox2Qr: Lifecycle Hooks
//

Template.ooQr.onRendered(function() {
  this.autorun(() => {
    qr.canvas({
      canvas: this.firstNode,
      value: Template.currentData().codeValue,
      size: 10,
      level: "H"
    });
  });
});


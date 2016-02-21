Package.describe({
  name: 'ox2:qr',
  version: '1.3.0',
  // Brief, one-line summary of the package.
  summary: 'TESTING_DO_NOT_USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use([
    'templating',
    'ecmascript'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9',
    'ox2:qrjs@1.1.3_1'
    ]);
    api.addFiles('lib/ox2-qr.jade', C);
    api.addFiles('lib/ox2-qr.js', C);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:qr');
  api.addFiles('tests/package-tests.js');
});

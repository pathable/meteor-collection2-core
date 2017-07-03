/* global Package */

Package.describe({
  name: 'meteor-collection2-core',
  summary: 'Fork of the aldeed:collection2 package.',
  version: '0.1.0',
  documentation: 'README.md',
  git: 'https://github.com/pathable/meteor-collection2-core.git'
});

Package.onUse(function(api) {
  api.use('underscore@1.0.0');
  api.use('mongo@1.0.4');
  api.imply('mongo');
  api.use('minimongo@1.0.0');
  api.use('ejson@1.0.0');
  api.use('raix:eventemitter@0.1.3');
  api.use('ecmascript@0.6.1');
  api.use('pathable-vendor');

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.0', { weak: true });

  api.mainModule('./package/collection2/collection2.js');

  api.export('Collection2');
});

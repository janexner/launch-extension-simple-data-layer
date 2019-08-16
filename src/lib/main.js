'use strict';

turbine.logger.info('Main module loading...');
var Promise = require('@adobe/reactor-promise');
turbine.logger.info('Main module requesting augment-tracker Shared Module...');
var augmentTracker = turbine.getSharedModule('adobe-analytics', 'augment-tracker');

augmentTracker(function(tracker) {
    tracker.registerPostTrackCallback(function(s) {
        if ('undefined' !== typeof dataLayer && dataLayer) {
            dataLayer.jPush({
                'event': 'Analytics Tracking Call',
                'rsid': s.split('/')[5]
            });
            turbine.logger.info('Added Analytics Tracking Call to dataLayer.');
        }
    });
});

module.exports = function(module, ruleName, message) {
    // TODO
}

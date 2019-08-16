'use strict';

module.exports = function(settings) {
    turbine.logger.info('Pushing event', settings.eventName, 'into datalayer:', settings.id, settings.payload);
    if ('undefined' !== typeof dataLayer && dataLayer) {
        var element = {
            'event': settings.eventName,
        }
        element[settings.id] = settings.payload;
        dataLayer.jPush(element);
    }
};

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

export default {
  googleAnalyticsId: 'UA-XXXXX-X',
};

import {Parse} from 'parse';
Parse.initialize("waBz8FEHBaQTQTzHT9ny26ucoDRmb9L3iRRGNUzA", "qMXZz8678ucLOrwMwqQ53wA1vWMQULy1qit96u1F");

if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require('node-localstorage').LocalStorage;
        global.localStorage = new LocalStorage('./scratch');
}

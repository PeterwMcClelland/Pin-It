import algoliasearch from 'algoliasearch'

import settings from './settings'
import rules from './query_rules'

const client = algoliasearch(
  '8RLPJ11QWU',
  '65a3f8c8cbe22630d5fe7c25586386b6'
);

const index = client.initIndex('Index_PinIt');

// Configure relevancy
index.setSettings(settings);
// Add special rules
index.saveRules(rules);
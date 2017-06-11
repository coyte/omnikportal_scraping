scrape_omnikportal.js

The goal is to get the data from Omnikportal into Openhab for processing with P1 data.
The Omnikportal aggregates data from multiple inverts into single page.

Phantomjs is used to load and scrape the webpage. Download it from phantomjs.org for x86. Package for RPI is available from https://github.com/fg2it/phantomjs-on-raspberry/releases/tag/v2.1.1-wheezy-jessie-armv6



phantomjs scrape_omnikportal.js \<url you use to view your systems\>

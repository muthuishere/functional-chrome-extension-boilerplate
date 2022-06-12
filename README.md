# Chrome Extensions - Building testable chrome extensions

## What is  browser extension?
   Browsers are helping us to view web pages. The decision of the content is always been determined by the page owners and browser.
   By utilizing or creating web extensions , we can get most out of the page
   There are almost 100,000 + extensions for Google chrome browser. Almost 25% of extensions have been created for productivity and 22 % was created for fun [](https://www.debugbear.com/blog/counting-chrome-extensions)
## How could we improvise with an  extension?
- Remove Ads
- Automate Login 
- Block Content
- Download all images
- Build a Gallery

## Components of extension?
a manifest.json file - which is a json file that describes the extension along with the permissions
a background file, Think that as a service that runs in the background.
a popup which appears when the extension is clicked. on right top side of the browser.
a options page for extension to hold configuration data

### Background file
      Background file is the decision maker for the entire application. Chrome extension can have only one background file.

## How to create an extension?
Identify the problem you are trying to solve
Does it require popup page 
Does it require Menu Changing
Does it require Options 
Does it require content changing


- Create a folder
- Create a manifest.json file to hold extension configuration

- Create a background.js file


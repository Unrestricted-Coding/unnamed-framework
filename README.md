[![Slack Status](https://uc-slack.herokuapp.com/badge.svg)](https://uc-slack.herokuapp.com)
[![Visit Unrestricted Coding](https://img.shields.io/badge/Visit-Unrestricted%20Coding-blue.svg)](http://unrestrictedcoding.com)
![License](https://img.shields.io/badge/LICENSE-MIT-ff69b4.svg)
![Status](https://img.shields.io/badge/Status-Very%20WIP-red.svg)


[![Gitter](https://badges.gitter.im/Unrestricted-Coding/unnamed-framework.svg)](https://gitter.im/Unrestricted-Coding/unnamed-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Un-Named Framework
A front-end web framework with no name yet. I'll think of a name as it becomes more developed.

## Want to Contribute?

Check out this site here: [http://contribute.unrestrictedcoding.com](http://contribute.unrestrictedcoding.com)


## Goal

To create a web framework for front end development. This must be really small.

*Size Goal:* CSS < 50kb

*Size Goal:* JS < 50kb

We want things to truely cascade and be smart. No need for bloated css file to add new elements etc. Use what is already there to create new elements. Just provide examples on how to make them.

We want to create a javascript framework similar to jQuery but only uses most commonly used functions of jQuery and keeps it small..

## Inspiration:

My inspiration for this came from [RiotJS](http://riotjs.com/) and seeing how small their javascript library was. I wondered how much bloat I was putting into my applications by using standards such as Bootstrap or Semantic-UI. Yes they are pretty, and yes they are easy. But I'm going to use this framework to eliminate bloat from my projects.

## Features:

* Grid
* Styled Basic Elements
* Library system
  * Search examples to see how to build objects
  
## The Concept:

So here is how I envision it. (Really 3 parts)

*CSS Framework:* The part that resets the body/html document, sets up fonts, colors, etc… It has basic elements like buttons, grids, panels, (Maybe cards). But it just has the supporting parts for building and laying out your site. It isn’t supposed to have your UI/UX prebuilt like bootstrap and semantic-ui do. Instead there will be a library that will contain code snippets on how to use this framework to build something (Say a modal).

*JavaScript for CSS Framework:* This part uses pure javascript with no dependencies to make things like a navbar/dropdown/modal work. Very minimal, optional, and just extends the CSS Framework.

*JavaScript Framework:* This part is a simple javascript framework that is similar to jQuery but not as robust or powerful. It contains things such as the Each function, Selectors, etc… It is used for basic front end javascript.

Basically my goal is to take my frontside includes from approx 500kb to 100kb or less...

## Icons:

So I am not going to include icon's into the css framework. If you want icons then you can use previously established libraries and go crazy!

If someone knows of a really small font icon library (50kb or less??) let me know. I'd be intersested in linking to a library with a true focus on mini file size.

Minimilistic? Try Octicons [Here](https://octicons.github.com)
Wanna go all out? Try Font Awesome [Here](https://fortawesome.github.io/Font-Awesome/)

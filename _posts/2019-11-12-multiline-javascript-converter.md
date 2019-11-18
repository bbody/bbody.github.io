---
layout: post
title: Multiline JavaScript Converter
subtitle: Useful before ECMA6
tags: project javascript testing productivity
categories: projects
---


In my first frontend web developer job I worked with AngularJS, yes you read that right AngularJS so 1.x. Unfortunately the build process was not able to changed to transpile to ECMA5, so no [ECMA6 Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). I found myself trying to automate boring and repetitive tasks, like my previous testing role where I created a VNC monitor called [Pinger](https://github.com/bbody-old/Pinger).

<script src="https://gist.github.com/bbody/edd58cdf424b184fd264d477c1fdcbeb.js"></script>

In the AngularJS role I found myself working directives using inline HTML templates.  Very handy to have a template inside JavaScript when it is simple. There is however an awkward grey area where putting the template into its own file seems excessive. I found myself manually turning multiple lined HTML into multiple line JavaScript safe HTML strings. So I created Multiline JavaScript Converter to scratch my itch and increase my productivity.

<p class="center">
    <img src="https://raw.githubusercontent.com/bbody/MultilineJavaScriptConverter/master/screenshots/demo.gif" alt="Demo of Multiline JavaScript Converter" />
</p>

Although the project was started in 2016, in 2018 I picked it up again. Unlike [CMD Resume](https://github.com/bbody/CMD-Resume/), I severely limited the scope. This lead to using Mocha/Chai and Nightwatch for testing to try different testing frameworks. Instead of trying to test a broad range of browsers, I only tested UI on the CI server using Chromium. Combined with using ESLint, the verification process is very quick and easy. Originally I used Travis for CI however more recently I switched to Github Actions, which was an interesting experience.

Although this project is not as complex as CMD Resume, I did manage to learn a bit. I tried a few new frameworks, particularly Mocha/Chai which I'd been itching to try for a little while. Whilst introducing tests, due to the size of the project I was able to decouple logic from the UI using Browserify and was able to write better tests.

I do think I may have spent more time than was worth it on Multiline JavaScript Convertor. Particularly as I can use ECMA6 in most of my products, however I have used it for ASCII art in CMD Resume. I also went down the track of turning it into a [NPM package](https://www.npmjs.com/package/multilinejavascriptconverter), which leveraged the decoupling of logic and UI. The problem is that the other project I planned to use it for got scrapped.

Overall I think this project served an actual need I had, even if it was only a problem for a little while. I learned a lot however I think I went down too many fruitless paths. Like any project it was a learning experience and it has made me a better coder.

You can check it out:
- [Demo](https://jsstringconverter.bbody.io/)
- [Github Repository](https://github.com/bbody/MultilineJavaScriptConverter)
- [Hacker News Discussion](https://news.ycombinator.com/item?id=21480346)
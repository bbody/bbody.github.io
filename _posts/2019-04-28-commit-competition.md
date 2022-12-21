---
layout: post
title: Commit Comp
subtitle: Free lunch for the most committed
tags: project VueJS competition github TypeScript JavaScript
categories: projects
---

A few years ago I read an article on the positives of [Github streaks](https://medium.freecodecamp.org/lessons-from-my-month-long-github-commit-streak-b8f3167d34ac) which stuck with me. After softly pushing myself to follow this advice with only limited success, I decided to up the steaks with a bit of [loss aversion](https://en.wikipedia.org/wiki/Loss_aversion) as motivation.

<p class="center">
    <img src="https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-04-28-commit-competition/commits.png" alt="Github commit heatmap" />
</p>

## The story

So I challenged a friend to compete on a Github commit streak, despite winning I still felt it was too punishing. So instead we decided to compete based on most days within a time period. Being newly unemployed at the time and preparing for job applications, I decided to list out a few projects I wanted to build to upskill and try new technologies. One of them was to automate this process and build a dashboard to show multiple users commit statistics. Despite finding a job not long after, I decided to still build it. This became [Commit Comp](https://commit-comp.bbody.io/).

![Github commit heatmap](https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-04-28-commit-competition/screenshot.png)

Over the course of a weekend I put together Commit Comp and over the course of another weekend polished and wrote tests and automated CI. This is a stark contrast to many of my previous projects where it takes months or even years to reach a satisfactory status (well to me at least).

## Features

Commit Comp is a very simple site that allows you to add users and date periods, it keeps the app state in the URL making it easy to bookmark and share. It allows sorting by different Github commit metrics:

- Total commits
- Days with commits
- Commits per day
- Percentage of days
- Longest streak

Simplicity and sticking to the bare minimum I needed drove the project scope.

## How was it built

As some of your may know the [Github API](https://developer.github.com/v3/) requires authentication to obtain information about user contributions. So to avoid building a backend, I kept it simple by leveraging an open source API which provided Github Contribution information called [Github Contributions API](https://github.com/sallar/github-contributions-api). To help validate whether a user exists I do also use the [Official Github API](https://developer.github.com/v3/) which does not need authentication.

One of the main goals of the project was to use technologies I was not familiar with, particularly VueJS and TypeScript. Using the Vue CLI generator for the project I also got to use Jest and Cypress which I had not used before. 

Overall I used the following technologies:
- [VueJS](https://vuejs.org/) - SPA Framework to give the appearance of an App
- [TypeScript](https://www.typescriptlang.org/) - type-safe JavaScript
- [Yarn](https://yarnpkg.com/) - package manager
- [Vuetify](https://vuetifyjs.com/) - Material Design UI components
- [VueX](https://vuex.vuejs.org/) - Vue State Management
- [TSLint](https://palantir.github.io/tslint/) - Linter for TypeScript
- [Jest](https://jestjs.io/) - unit testing
- [Cypress](https://www.cypress.io/) - UI testing
- [MomentJS](https://momentjs.com/) - handy time library
- [Travis](https://travis-ci.org/) - Continuous Integration
- [Github Pages](https://pages.github.com/) - static hosting

I was actually blown away by how well the Vue CLI managed to glue everything together. I often find myself fighting with generators to get what I want done, however I didn't feel that with this particular boilerplate. This also might be because of the simple nature of the project, I just leaned into the conventions it provided.

## Conclusion

ALl in all this project has been an interesting experience, unlike most of my Github projects it was very quick and the scope was well contained. Although I didn't outline the features I wanted formally before or during build, as I was scratching my own itch I had a pretty good idea of what I wanted. I believe my previous projects, particularly [CMD Resume](https://brendonbody.blog/2019/01/07/cmd-resume/) helped influence the way I approached this projects scope. Didn't want to get burnt twice. I got to play with VueJS and TypeScript, something which I had been meaning to do for years. I wish I had some words of wisdom on how to get started but for me I just pushed myself to get in done in a confined period of time and surprised myself.

Now onto my next project!

To learn more about Commit Comp see below:
- [Source Code](https://github.com/bbody/commit-comp/)
- [Website](https://commit-comp.bbody.io/)

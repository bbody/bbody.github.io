---
layout: post
title: Commit Comp
subtitle: Free lunch for the most committed
tags: project VueJS competition github TypeScript JavaScript
categories: projects
---

A few years ago I read an article on the positives of [Github streaks](https://medium.freecodecamp.org/lessons-from-my-month-long-github-commit-streak-b8f3167d34ac) which stuck with me. After pushing myself to roughly follow this advice, I decided to up the steaks with a bit of [loss aversion](https://en.wikipedia.org/wiki/Loss_aversion). 

![Github commit heatmap](https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-04-28-commit-competition/commits.png)

So I challenged a friend to compete on a Github commit streak, despite winning I still felt it was too punishing. So instead decided to compete based on most days within a time period. Being newly unemployed at the time and preparing for job applications, I decided to list out a few projects I wanted to build to upskill and try new technologies. One of them was [Commit Comp](https://commit-comp.bbody.io/), despite finding a job not long after I decided to build for my ongoing competitions.

![Github commit heatmap](https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-04-28-commit-competition/screenshot.png)

Over the course of two weekends I put together Commit Comp, despite a lot of my previous projects I managed to finish it to a satisfactory status (well to me at least). It is a very simple site that allows you to add users and date periods, it keeps the app state in the URL making it easy to bookmark and share. It allows sorting by different Github commit metrics:

- Total commits
- Days with commits
- Commits per day
- Percentage of days
- Longest streak

## How was it built

Unfortunately the Github API requires authentication to obtain, to keep it simple I used an open source API called [Github Contributions API](https://github.com/sallar/github-contributions-api).

Commit Comp was built with
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


[Source Code](https://github.com/bbody/commit-comp/)

[Website](https://commit-comp.bbody.io/)
---
layout: post
title: Why my side projects have tests
subtitle: Reducing the time I spend testing
tags: testing personal-projects side-projects
categories: testing
---

While interviewing for jobs the topic of testing often comes up, in most of my roles I have advocated testing and even introduced it. To the interviewers' surprise, some of my personal projects have test suites. Personal projects are often things you do for fun, a way to learn/express creativity. For many, testing is not interesting. I will admit it can sometimes be tedious.

So why do I write tests for my side projects? My personal projects by definition are things I do outside of my working hours. It is something that I enjoy, so when I get home it is something I like to do. As there can often be days/weeks/months between times when I pick up the project, a lot of the context of the project is forgotten. This can lead to me adding a new feature but inadvertently breaking something else (without knowing). For example, I refactored some code which then caused a [problem with a trailing newline](https://github.com/bbody/MultilineJavaScriptConverter/issues/27). Even on a good day this is a risk, however, the gaps in time between picking up tools seem to exacerbate it. Getting home from work, I am tired and don't want to be chasing down regressions, so I write automated tests.

The way I look at it, if I get to choose between:

1. Waste 5 hours chasing down some bug I accidentally caused
2. Spend 5 hours on writing some tests
3. Just ignore it

I don't know about you, but I would much rather the second option.

Although some of my projects have close to 100% code coverage and thorough E2E tests, I think for most cases this is probably overkill. There is a balance that should be maintained, ensure you are testing enough to be useful but not testing too much to take up too much time. So what should you test?

I think at a bare minimum, unit tests should be written around things that will change. So if you plan to refactor or change some code, write tests around the function then introduce the changes. In the case of refactoring this gives you a base to work from, so at a minimum the new function does exactly the same thing as the original code (bugs and all). Then you can change the tests to match what the actual expected output is, reducing the chances of inadvertently breaking something that was once working.

If E2E testing is appropriate, having it written around core functionality and some [happy paths](https://en.wikipedia.org/wiki/Happy_path) is a good idea. This means if you make changes, at a minimum the core functionality remains the same. After these, I would suggest some unhappy paths. 

So for me, testing in personal projects, despite seeming somewhat counterintuitive, is a way to reduce the amount of time I spend testing. I want to maximize the amount of creative work I do and minimize the amount of bug chasing and regression I create. This is even more important in the case of other people also using your project.
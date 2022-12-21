---
layout: post
title: Setting developer up for failure
subtitle: Developers sitting in the slow lane
tags: developers productivity
categories: projects
---

I have wanted to write this article for more than five years, but I have struggled each time I have tried to write it. Recently, I felt a sense of clarity, so here are my thoughts. I was originally inspired by something a colleague said. When I worked for a bank, one day each year all IT staff we would spend a day in a branch helping the staff with their IT problems. He was amazed at how many issues the staff in the branch experience and work around on a daily basis, summarizing it with the statement "We are setting them up for failure."

I have worked at several companies, each of which had their own weaknesses and most had their own strengths. However, a few key experiences have shaped my thinking regarding developer productivity. It is well known that developers are not cheap, so why would organizations make it harder for them to work at their highest level of performance? It may not be as extreme as my experience at the bank branch, but why do we set developers up for failure?

<p class="center">
    <img src="{{site.baseurl}}/images/2022-12-20-setting-developers-up-for-failure/angry-developer.jpg" alt="An angry developer about to hit his monitor with a keyboard" />
</p>

One way that I have seen companies set their developers up for failure is by providing them with outdated or under-spec'd hardware. I'm not even talking about providing each developer with a top-of-the-line computer; I just mean something that can run an IDE and a local developer server. Some of you may be scoffing at this, but I have had the displeasure of working at a place where Visual Studio could not even run IntelliSense in a timely manner due to RAM limitations.

While computers with high end specifications may not be cheap, but they are relatively inexpensive compared to a developer's salary, especially in a developed Western country.

So in late 2022, doing some rough calculations of an USA developer, with an average [salary of $92,207](https://www.indeed.com/career/software-engineer/salaries).

A [MacBook Pro](https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-32-core-gpu-1tb) with:
- 16-inch Liquid Retina XDR display
- Apple M1 Max chip with 10-core CPU, 32-core GPU, and 16-core Neural Engine
- 64GB of RAM
- 1TB SSD

Costing $3,899.00 (not including sales tax).

| Mins saved/week (40hr week) | Productivity increase | Annual salary saved | Percentage of MBP |
| -- | --------------------- | ------------ | ----------------- |
| 24 |           1%          |   $922.07    |       24%         |
| 48 |           2%          |   $1,844.14  |       47%         |
| 72 |           3%          |   $2,766.21  |       91%         |
| 96 |           4%          |   $3,688.28  |    Over 100%      |

It is clear that by saving a developer 96 minutes a week, or less than 20 minutes a day, the cost of a MacBook Pro can be quickly justified. By shaving just two minutes off a build, which can be done by performing five builds a day, the cost of the laptop is paid off. Jeff Atwood has also [talked about this extensively](https://blog.codinghorror.com/hardware-is-cheap-programmers-are-expensive/) for years.

Hardware isn't the only area where a developers time therefore an organization's money can saved. Tooling is another area where organizations can set up their developers for failure. By providing poor or no tooling, a developer can end up wasting a lot of time on tasks that could be automated. Unlike hardware, tooling has a lot more ongoing costs, as developers' time should be used to update and improve the tools to improve the workflow. The impact of good tooling can be hard to measure, especially for infrequently performed tasks. It can also help with onboarding new developers, saving them time and the time of the engineer helping them onboard. There are many benefits to [focusing on Developer Experience](https://devops.com/understanding-the-importance-of-developer-experience/) overall. That being said, I can definitely see smaller organizations giving this a lower priority.

Increasing productivity isn't the only reason an organization should make a developers work experience frictionless as possible. By making developers sit around waiting for things to load, you are reducing job satisfaction and increasing burnout, leading to employee churn. Like developers sitting around waiting for builds to finish, [employee churn is also not cheap](https://www.gallup.com/workplace/247391/fixable-problem-costs-businesses-trillion.aspx). Happy developers are also good marketing for attracting other developers to join your organization.

To sum up my thoughts:
- Developers love to develop
- Don't waste their time
- Their time costs money
- Buy them good hardware
- Let them build good tools

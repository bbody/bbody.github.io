---
layout: post
title: Emojis in your git
subtitle: git commits for millennials
tags: productivity git emojis
categories: coding
---

Years ago during an interview with a startup, I was shown some of the codebase on GitHub. I don't remember any of the code, but one thing that did stick out to me was the fact that the commit messages had emojis. I asked the interviewer what they were for, and the answer has stuck with me ever since.

![CMD Resume]({{site.baseurl}}/img/2019-11-01-emojis-in-your-git/git-commits.png)
*[CMD Resume Git Commit Log](https://github.com/bbody/CMD-Resume/commits/master)*

So why do people use emojis in their git commits? Essentially, it's to add more information about a commit. Imagine your website is having production problems: your boss is yelling at you, the pressure is on, the frontend is broken, and you're looking through the commit log to see which of the 20 commits today caused it. You've already gone through the JavaScript console and know that a file is missing. You see 🔥 - a file was removed but its references weren't. Don't forget to use 🐛 in your commit message! 

The idea is to help quickly categorize commits, ideally allowing you to find the responsible commit quickly in times of emergency. I can't speak for large distributed repositories like [Atom](https://github.com/atom/atom), but for [CMD Resume](https://github.com/bbody/CMD-Resume), I only found using emojis helpful a few times over the course of nearly 500 commits.

<p class="center">
    <img src="{{site.baseurl}}/img/2019-11-01-emojis-in-your-git/gitmoji-card.png" alt="Gitmoji Card" />
</p>

**Emoji commit schemas:**
- [Gitmoji](https://gitmoji.carloscuesta.me/) - very polished and has a nice [CLI tool](https://github.com/carloscuesta/gitmoji-cli)
- [Git Commit Message StyleGuide](https://slashsbin.com/styleguide-git-commit-message/) - quite well thought out and has a [CLI tool](https://github.com/jakeasmith/commit)
- [Atom Commit Message Styleguide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) - Atom text editor's git commit styleguide
- [Emoji Log](https://ahmadawais.com/emoji-log/) - deliberately limited schema
- [Commit Message Emoji](https://github.com/dannyfritz/commit-message-emoji)

There are quite a few standards, often with clashing emoji meanings. This reminds me of the XKCD comic below.

<p class="center">
    <a href="https://xkcd.com/927/">
        <img src="https://imgs.xkcd.com/comics/standards.png" alt="XKCD Standards" />
    </a>
</p>

That being said, I stick to [Gitmoji](https://gitmoji.carloscuesta.me/) and have previously used the [Git Commit Message StyleGuide](https://slashsbin.com/styleguide-git-commit-message/). 

So why don't I use it for all my projects? As I mentioned before, I've only found it useful in a few instances. I often found myself referring to the [Gitmoji guide](https://gitmoji.carloscuesta.me/) trying to find the most appropriate emoji for the occasion. I managed to remember a few key emojis, but I would often get stumped when making a change that didn't fit into a neat category. 

Although this might not be applicable in all situations, sometimes emojis won't be displayed, but by using shortcodes you can see the fallback text. For example: `:twisted_rightwards_arrows: Merge code`. So I've only been using it sparingly on a select few projects. I have been seeing productivity gains in the frontend + backend project I'm currently developing.

As I sit here writing this post, I'm not sure how to sum it all up. I'm not sure if I would recommend using emojis in git commits - I haven't seen the productivity payoff yet, but I can see how it could be beneficial, particularly in the commercial arena. That being said, I definitely suggest giving it a try - it might be your thing.
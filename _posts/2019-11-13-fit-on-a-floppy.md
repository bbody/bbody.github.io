---
layout: post
title: Fit on a Floppy
subtitle: A physical reminder of size
tags: project javascript productivity performance
categories: projects
---

When I worked in an E-commerce company, performance was important although to the developers dismay not very important to the business. This changed once we started using [Google's Impact Calculator](https://www.thinkwithgoogle.com/feature/testmysite/), it provided a real value to what load time could do. One night I couldn't sleep, so I was browsing Twitter and I seen a Tweet that really stood out to me.

<p class="center">
    <a href="https://twitter.com/sonniesedge/status/913282229408866304">
        <img src="https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-11-13-fit-on-a-floppy/tweet.png" alt="Tweet">
    </a>
</p>

I think it stuck with me because of the physical reminder that such am [expansive game fitting on just 880KB](https://en.wikipedia.org/wiki/Frontier:_Elite_II#Development_and_release).

<p class="center">
    <img src="https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-11-13-fit-on-a-floppy/floppy.jpg" alt="Floppy Disk" />
</p>

This lead me to think of a website 1.44mb as a (very loose) rule of thumb, so I came up with the idea of "fit on a floppy". So like many times before in the [middle of the night I purchased the domain](https://brendonbody.blog/2019/11/11/3am-domains/) but luckily for me there was a sale on the .website TLD. So I purchased [fitonafloppy.website](https://fitonafloppy.website/) in April and left it until September when I picked up tools, definitely not the longest I've let a domain languish.

I didn't want to spend much time building it as in terms of projects it was pretty low on my priorities, so to get up and running quickly I built a prototype in PHP. Surprisingly I managed to finish build it within one day. Given the way to code worked essentially just a function with no database calls I realised this is a good use case for [serverless architecture](https://martinfowler.com/articles/serverless.html). I suspected PHP wouldn't be supported by AWS Lambda and I was right, so I decided to rewrite it in Python 3.6. Given a chance to do it all over again I would have used Go. From a frontend perspective I took lessons learnt from previous projects and used a generator called [Yeogurt](https://github.com/larsonjj/generator-yeogurt) to setup a basic static site. I did however get to try Nunjucks and Sass, that being said I will stick to SCSS in the future.

![Demo](https://raw.githubusercontent.com/bbody/fit-on-a-floppy/master/demo.gif
)

Normally I stick to using Github Pages for static hosting but since I am already using Lambda I decided to use AWS for all my infrastructure. So for static web hosting I used S3 and for CI/CD I decided to give CodePipeline a try. I think CodePipeline is the 6th CI/CD I've used, I am on the fence about the whole containerization approach but it is growing on me. I definitely do like the visual representation of the pipeline though.

<p class="center">
    <img src="https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-11-13-fit-on-a-floppy/pipeline.png" alt="CodePipeline Config" />
</p>

Overall the project went quite smoothly, I kept the specifications tight which allowed it to not drag on for too long. I was able to experiment with a few different things which helped me develop, most notably serverless architecture. As I look back on this project, I am glad I did it and I hope I can use it to develop better websites going forward.

- [Website](https://fitonafloppy.website/)
- [Github Repository](https://github.com/bbody/fit-on-a-floppy)
- [Hacker News Discussion](https://news.ycombinator.com/item?id=21526468)
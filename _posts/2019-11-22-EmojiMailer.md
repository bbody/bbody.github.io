---
layout: post
title: EmojiMailer
subtitle: Because electronic emojis are so 2016
tags: project launch
categories: projects
---

Riffing off [Framed Tweets](https://framedtweets.com/) I thought of an idea of sending a small violin to people in the post. After some research on Alibaba, I found little violins (think brass figurines) were a little more expensive than I thought. So I went back to the drawing board and somehow came up with sending emojis on postcard, so at [3AM I bought emojimailer.com](https://brendonbody.blog/2019/11/11/3am-domains/).

After letting the domain languish for a while like all 3AM domains, I eventually started building. I originally played with the idea of building EmojiMailer with a bunch of different technologies, however settled on using something I was familiar with, Ruby on Rails. This allowed me to quickly build an MVP, using [Lob](https://lob.com/) and [Braintree](https://www.braintreepayments.com/) which worked end-to-end. However I didn't like the experience, so after some consideration I decided to build a wizard-like interface with React. Although early on in the project I wanted to stick with known technologies, however the project was in a position where I was comfortable introducing something new. After doing some basic tutorials/projects and coupled with my VueJS experience, I wrote the frontend from scratch. I won't lie, there was a lot of blood sweat and tears. I did the bulk of the work during a [sojourn in paradise](https://brendonbody.blog/2019/06/22/digital-nomad-experiment/) I did most of the ReactJS work. Happy with the results but not happy with the look, I decided to have a look at the design.

<p class="center">
    <img src="{{site.baseurl}}/images/2019-11-22-EmojiMailer/old-logo.png" alt="Original Logo">
</p>

<p class="center">
    <img src="{{site.baseurl}}/images/2019-11-22-EmojiMailer/old-design.png" alt="Original Design">
</p>

As above, you can see it is functional and not overly ugly but doesn't really fit with the idea. I decided to approach a designer friend to help me design a new website with a focus on mobile and UX. I was blown away with the design and the new logo.

<div class='embed-container'>
    <iframe src='https://www.youtube.com/embed/olEPVYVW0Mw?rel=0' frameborder='0' allowfullscreen></iframe>
</div>

After implementing the new design and some light refactoring I really struggled to motivate myself to finish the project. I have always found the [last part of a project the hardest](https://news.ycombinator.com/item?id=17138794), it has been a slog to finish it. To keep myself motivated on releasing the bare minimum needed, I kept two lists, ones I need to launch and ones that I can do later. This helped me while I was in the weeds and thought "Feature X" would be cool, I would write it in my later list. The biggest motivation part of the project was receiving a postcard in the mail which I paid for through my website.

<p class="center">
    <img src="{{site.baseurl}}/images/2019-11-22-EmojiMailer/letter.jpg" alt="EmojiMail">
</p>

So this project is probably my first personal project that is actually commercial which has been an interesting learning experience. A few of my takeaways have been:

- Payments can be hard
- Need to think about things from the customers perspective
- UX/Design can make a big difference
- Get it done then make it better
- Need a lot of error handling around APIs
- Launching is REALLY hard
- Refactoring can wait (not too long though)
- A tangible output can be great to see
- Redux can be useful but also confusing

I managed to learn a lot from this project and I haven't got to the launch lessons yet (coming soon)!

In terms of areas of improvement, I think I definitely spent too much time on the project. In terms of commercialization, this isn't a product anyone needs and I think the number of people who want it is very small. If this project wasn't for fun I think I would have definitely done customer development upfront.

That being said, there are heaps of aspects of this project that I am pleased with. Foremost how polished the design is and the fact that it is a fully integrated frontend and backend which I haven't done recently. I decided not to spend too much time on devops early on and rely on Heroku, which I believe helped me finish probably a week or two earlier. This obviously had the downside of cost and lack of control but I think it was worth the trade-off. As mentioned before I used React for this project without having used it before, I learnt a lot and surely will help with job opportunities. I even got to dog food my other project [Fit on a Floppy](https://fitonafloppy.website/?website=https://www.emojimailer.com/) for checking my website size!

<p class="center">
    <img src="{{site.baseurl}}/images/2019-11-22-EmojiMailer/site-size.png" alt="EmojiMail">
</p>

EmojiMailer has been really fun and challenging to work on, seeing something quite polished and end-to-end has been really rewarding. However now it is time to move onto my next project!

- [Website](https://www.emojimailer.com/)
- [Product Hunt post](https://www.producthunt.com/posts/emojimailer)
- [Side Projects post](https://sideprojects.net/posts/Hs7XSKNJvK6XhaYvJ/emojimailer)

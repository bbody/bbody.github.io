---
layout: post
title: Elgato Streamdeck
subtitle: Not a review but an experience
tags: Elgato Streamdeck productivity 
categories: productivity
---

Through pure luck I recently managed to get an [Elgato Stream Deck](https://www.elgato.com/en/gaming/stream-deck) for free (Don't worry, this isn't a sponsored post). Despite a small foray into creating [YouTube videos](https://www.youtube.com/user/brendonbody/videos?view=0&sort=dd&shelf_id=0), I have never really got into video content creation let alone streaming. Having seen [Taran of Linus Tech Tips](https://youtu.be/vhPLhfP1b_s) use it for his own productivity, I got inspired. So instead of immediately selling it on, I decided to try it as a productivity tool for programming. This isn't a review, this is just my experience with it.

![My Streamdeck](https://raw.githubusercontent.com/bbody/bbody.github.io/master/_posts/images/2019-06-02-elgato-streamdeck/my-streamdeck.jpeg)

After unboxing the Stream Deck I had a little play with the built in commands but System really caught my eye. It allows you to:

* **Website launching** - launches a configured website to your default browser
* **Hotkey** - runs a keyboard command
* **Hotkey Switch** - allows toggling between two commands, e.g. on/off
* **Open** - opens an application
* **Text** - types out text
* **Multimedia** - multimedia keys

To get some inspiration I did some Googling and stumbled upon [r/streamdeckprofiles](https://www.reddit.com/r/streamdeckprofiles/), however no developer profiles caught my interest.

So I decided to do some development and take note of some of the repetitive things I was doing. Initially I noticed I was locking my computer a lot so bound that shortcut to a button, as well as some media keys and finally opening VS Code. This was only giving me a moderate boost but nothing really programmer specific. So while working on [Commit Comp](https://github.com/bbody/commit-comp) I found I was doing a lot of git commands, so I decided to bind the following commands:
* `git status`
* `git add .`
* `git commit -am "`
* `git push`

As well as some non-git commands
- `cd ..`
- Control + C (Kill process)

After a little bit of messing around I found the git commands were useful for basic git management. That being said I would often revert to using the keyboard without thinking.

Some other keyboard commands I added were:
- Next tab
- Find/Replace (Would be cool to update this based on the IDE)
- Open Github
- Open iTerm

So all in all I had fun playing with the Elgato Streamdeck, in some ways it is like the Macbook Pro touchpad. I didn't get a chance to play with the SDK to integrate it into a program or use any of its more advanced features.

So as a developer would I buy it? Not likely, it is a little expensive and there is a diminished return for me using it for development. I am sure there are use cases I didn't think of though!
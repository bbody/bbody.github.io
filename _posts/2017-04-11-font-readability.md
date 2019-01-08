---
layout: post
title: Font Readability
subtitle: Making your copy DRY
tags: accessibility fonts
categories: practical-accessibility
---

One of the easiest changes that can be made to a website to increase usability for all users is setting rational font sizes. Around 1 in 10 people have visual problems, much of that as a result of aging. By not ensuring font sizes are sufficiently large, it is very easy to lose viewers to your website.

In the transition from print to web, many designers have stuck with the mantra that *12 pixels* is the ideal size for text. However the distance of your eyes from the text vastly differs between reading printed material and web content, typically a book is held much closer to the eyes. It is generally adviced that *16px* is the ideal minimum height for [body content](https://developers.google.com/speed/docs/insights/UseLegibleFontSizes), with some disent suggesting *14px* is an absolute minimum. In fact in most browsers *1em*, *1rem* and *100%* font sizes are the same as 16px by default. There are exceptions, personally I will even drop copyright notices below the recommended font sizes and sometimes breadcrumbs (depending on website size/complexity).

## Zooming
As the astute developer would know, browsers allow users to zoom in to content. For some users with visual problems, this ability is necessary for even the best designed websites. Given the ages of many users with visual problems, more advanced features of web browsers and operating systems may not be familiar. A font size that is too small is similar to printing a book with tiny font and expecting users to have a magnifying glass handy.

Relying on web browser zooming also has its own problems. Font sizes and layout sizes in most browsers have to be whole numbers. However when you zoom you are infact using a fraction to increase size and thus when the result is not a whole number it needs to be rounded. e.g. *125%* will make *13px* become *16.25px* and will need to be rounded down to *16px*. This can give a disproportionate view of some websites.

## Font types
As I am sure someone is ready to point out, the actual font face also has a part in legibility in combination with size. This is most pronounced with people who have dyslexia, where the font face, size and line height can all affect the readability. Although there is [a lot of contension](https://bdatech.org/what-technology/typefaces-for-dyslexia/) in regards to what fonts should be used (many individual differences too), in general it is agreed that sans serif fonts are the most ideal because typically a lot of similar characters look different. For example below both are set at 12px font:

* sans-serif (Arial): <span style="font-family:'arial'; font-size:12px;">1I</span>
* serif (Times New Roman): <span style="font-family:'Times New Roman'; font-size:12px;">1I</span>

So choosing a more legible font also contributes to readability.

## Examples
To get an idea of what the web looks like, I compiled a list of popular websites as well as websites known for accessibility.

| Site (Location) | Font Type | Desktop | Mobile | Tablet |
| Facebook (Post) | sans-serif | 14px | 14px | 14px |
| Medium (Article) | serif | 21px | 21px | 18px |
| LinkedIn (Post) | sans-serif | 18px | 15px | 15px |
| Twitter (Tweet) | sans-serif | 14px | 16px | 14px |
| Google (Search Result Title) | sans-serif | 18px | 16px | 16px |
| Google (Search Result Description) | sans-serif | 13px | 14px | 14px |
| W3.org (Content)# | sans-serif | 14px | 17px | 43px |
| CSS Tricks (Content) | sans-serif | 21px | 17px | 15px |
| Dormeo Ergo Sum (Content) | serif | 18px | 18px | 18px |

Looking through these examples, there is only one case of font size dropping below 14px. Also there are two cases of serif fonts being used but in both instances large font sizes were used which can mitigate readability issues. Without digging into the numbers too much, in general the websites where content was long, the font sizes tended to be above the standard whereas smaller snippets of information tended be around the 14px-16px mark.

**Note #:** At time of publishing font size was an open issue on W3.org

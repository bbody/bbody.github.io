---
layout: post
title: Font Readability
subtitle: Improving accessibility through better typography
tags: accessibility fonts
categories: practical-accessibility
---

One of the easiest changes that can be made to a website to increase usability for all users is setting appropriate font sizes. Around 1 in 10 people have visual problems, much of that as a result of aging. By not ensuring font sizes are sufficiently large, websites risk losing viewers who struggle to read small text.

In the transition from print to web, many designers have stuck with the mantra that *12 pixels* is the ideal size for text. However, the distance between your eyes and the text vastly differs between reading printed material and web content—typically a book is held much closer to the eyes. It is generally advised that *16px* is the ideal minimum height for [body content](https://developers.google.com/speed/docs/insights/UseLegibleFontSizes), with some dissent suggesting *14px* is an absolute minimum. In fact, in most browsers *1em*, *1rem* and *100%* font sizes are equivalent to 16px by default. There are exceptions: personally, I will drop copyright notices below the recommended font sizes and sometimes breadcrumbs (depending on website size and complexity).

## Zooming
As any experienced developer would know, browsers allow users to zoom in to content. For some users with visual problems, this ability is necessary even for the best-designed websites. However, given that many users with visual problems are older, more advanced features of web browsers and operating systems may not be familiar to them. A font size that is too small is similar to printing a book with tiny font and expecting users to have a magnifying glass handy.

Relying on web browser zooming also has its own problems. Font sizes and layout sizes in most browsers have to be whole numbers. However, when you zoom you are in fact using a fraction to increase size, and when the result is not a whole number it needs to be rounded. For example, *125%* zoom will make *13px* become *16.25px* and will need to be rounded down to *16px*. This can give a disproportionate view of some websites.

## Font types
As I'm sure someone is ready to point out, the actual font face also plays a part in legibility in combination with size. This is most pronounced with people who have dyslexia, where the font face, size, and line height can all affect readability. Although there is [a lot of contention](https://bdatech.org/what-technology/typefaces-for-dyslexia/) regarding which fonts should be used (with many individual differences), it is generally agreed that sans-serif fonts are most ideal because similar characters typically look more distinct. For example, both samples below are set at 12px font:

* sans-serif (Arial): <span style="font-family:'arial'; font-size:12px;">1I</span>
* serif (Times New Roman): <span style="font-family:'Times New Roman'; font-size:12px;">1I</span>

Choosing a more legible font therefore contributes significantly to overall readability.

## Examples
To get an idea of current web standards, I compiled a list of popular websites as well as websites known for accessibility.

| Site (Location) | Font Type | Desktop | Mobile | Tablet |
|---|---|---|---|---|
| Facebook (Post) | sans-serif | 14px | 14px | 14px |
| Medium (Article) | serif | 21px | 21px | 18px |
| LinkedIn (Post) | sans-serif | 18px | 15px | 15px |
| Twitter (Tweet) | sans-serif | 14px | 16px | 14px |
| Google (Search Result Title) | sans-serif | 18px | 16px | 16px |
| Google (Search Result Description) | sans-serif | 13px | 14px | 14px |
| W3.org (Content)* | sans-serif | 14px | 17px | 43px |
| CSS Tricks (Content) | sans-serif | 21px | 17px | 15px |
| Dormeo Ergo Sum (Content) | serif | 18px | 18px | 18px |

Looking through these examples, there is only one case of font size dropping below 14px. There are also two cases of serif fonts being used, but in both instances large font sizes were used which can mitigate readability issues. Without digging into the numbers too much, websites with long-form content generally used font sizes above the standard, whereas smaller snippets of information tended to be around the 14px-16px range.

**Note *:** At time of publishing, font size was an open issue on W3.org

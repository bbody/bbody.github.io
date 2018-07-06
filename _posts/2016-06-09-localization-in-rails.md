---
layout: post
title: Externalizing Strings in Rails
subtitle: Making your copy DRY
tags: ruby-on-rails, externalization, DRY
categories: coding
---

Regardless of whether you are planning to build a multi-language site or not (Will be covered in a future post), externalising strings is a good programming practice. You could think of it as another way of abstracting different layers of your code further apart.

**Typical Ruby on Rails Application Structure:**

- **HTML:** content and basic structure
- **CSS:** look and feel
- **JavaScript:** web browser logic
- **Ruby on Rails:** generates HTML based on the data and state

**Ruby on Rails Application Structure with localisation:**

- **HTML:** content placeholder and basic structure
- **Localization:** content
- **CSS:** look and feel
- **JavaScript:** web browser logic
- **Ruby on Rails:** generates HTML based on the data and state

This pattern not only allows us to keep our copy separate from our code, it also allows us to reuse common terms e.g. page title, special terms, etc. all being changeable from one point. Another use case is for generic terms, for example you want the alt text for a close button to be "Close" instead of "Exit". This is normally not a problem until you forget your naming convention or another developer joins the team. By externalising this becomes less of a problem but also if you ever feel the need to change this term, it is a matter of editing it once than using find to track down every usage. Rewriting a function in multiple places is a violation of the DRY principle, so we shouldn't do it to our text either.

Luckily for us, Ruby on Rails provides a built-it and easy way to externalise strings. 

## Add externalised variables
Simply by going to `app_name/config/locales/en.yml` you will find a "Hello World" example. At the moment it is looking quite bare but we will add some more content.

However first it is useful to go through a few different ways to store information in the locale file:

- **Simple string:** A typical way of storing a small bit of information
- **Placeholder variables:** *#{}* Allows inputed variables to replace placeholders, similar to in template files
- **Multiline strings:** The *>* symbol allows for multiline strings in *YAML*

You can see these three types in the below example.

Another useful feature of the locale file is the ability to use keys to specify different levels. This allows us to be able to more neatly organise strings by their page, element, topic, etc. In the example below you can see *page1* and *page2* organising the file.
	
### Example
<script src="https://gist.github.com/bbody/459c55670ec239c62175ee669d15069f.js?file=en.yaml"></script>

## Calling it from Controller/Template
There are multiple methods of calling the translation from Controller or template code. Personally I use the more verbose call due to most if not all strings in my projects are usually externalised so I have an expectation `t` will be used often.

### Example
<script src="https://gist.github.com/bbody/459c55670ec239c62175ee669d15069f.js?file=translation_methods.rb"></script>

## Calling it from Template
The controller methods can be used in the templates however the notable addition is that you can add `t` to the start of an inline tag to denote it is an externalised strings which you can see below. I find this a very efficient way to represent inline in a template.

### Example
<script src="https://gist.github.com/bbody/459c55670ec239c62175ee669d15069f.js?file=translation_methods.html.erb"></script>

## Conclusion 

This has been a very brief guide covering the basics of externalization of strings in Ruby on Rails. , however you can also refer to the[ official guide](http://guides.rubyonrails.org/i18n.html) which has a much more in-depth explanation and reference.
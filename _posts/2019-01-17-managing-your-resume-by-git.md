---
layout: post
title: Managing your resume by git
subtitle: branch, checkout 
tags: resume git job-hunting
categories: tutorial
---

For those of you familiar with my old blog and its [subsequent deletion](https://brendonbody.blog/2016/02/21/hello-world-again/), you may be aware I did a tutorial on managing a resume with git. Well that post is well and truly gone but as I am currently applying for jobs I thought I'd share my approach again.

This article assumes you are proficient with git, if you aren't I highly suggest [learning git first](http://marklodato.github.io/visual-git-guide/index-en.html). I use LaTeX to write my resume, however similar approaches can be done with any other text based formats e.g. HTML, JSON, Markdown, etc. I would not suggest word as it can be [cumbersome to diff](https://support.office.com/en-us/article/compare-document-differences-using-the-legal-blackline-option-dbfc7351-4022-43a2-a0c4-54d1898702a0).

## Why use git?

Git is a very good tool for handling your code and I have found it useful for handling my resume. I have been managing my resume with git for nearly 5 years and have found it particularly handy. Here are some of the advantages I have come across:

* Good backup tool especially if remotely hosted
* Able to keep track of changes over time
* Able to have branches
	* Can have different domains/role types of resumes on different branches
	* Can have specific jobs on different branches
* Able to pull code across branches
* Never lose changes
* Don't need to worry about multiple copies of resumes
* Handle your resume in the same way that you manage your code
* Don't need to copy and paste to make edits
* Easier to maintain variants on your resume

## Why **not** use git?
That being said it isn't perfect, here are some downsides I have come across:

* Can be difficult for non-git users
* Limited formats
* Moving changes from a branch back to master can be tedious
* Might annoy proofreaders (e.g. would prefer a Word file to a PDF)

## My approach

Below is my approach using git and LaTeX to manage my resume. Please keep in mind this is very specific to me but I believe a lot of the concepts can be used by anyone.

### Structure

As the resume is text based and source controlled, one of the first things I did was split up the parts of the resume into different files. For example:

* **Sections**
	* **Employment**
		* *job-one.tex*
		* *job-two.tex*
	* *employment.tex* - pulls in content of Employment folder
	* **Education**
		* *school-one.tex*
		* *school-two.tex*
	* *education.tex* - pulls in content of Education folder
	* **Misc**
		* *contacts.tex*
		* *references.tex*
* *resume.tex* - calls in top level files in *Sections* and files in *Sections/Misc*

[Example Github Repository](https://github.com/bbody/latex-resume-example)

This type of structure allows me to add new jobs as files, change the descriptions easily and only affect one file. Most importantly I can easily diff files and folders across different branches. This helps me not be overwhelmed by a single file. I have also been able to have a role with multiple files to demonstrate it in different lights e.g. *File 1*: focus more on frontend work, *File 2*: focus more on backend work.

### Exporting

In this approach I like to think of it like a programming project. So LaTeX is the source code and the outputted PDF as the executable. This lead me to even compile it by command line. So just by running `./compile.sh`.

### Steps

#### Getting set up
1. Fork [latex-resume-example](https://github.com/bbody/latex-resume-example)
2. Install [LaTeX](https://www.latex-project.org/get/)
3. Make repo private if you want your resume to be private
4. Make most of your changes on *master* branch
5. Compile by running `./compile.sh` in the root directory (If you are still on master, the output file can be found in *Output* folder)
6. You have got set up!

#### Creating a resume for a specific role
1. Create a branch off your base branch, usually *master*. Use a name of the role e.g. Google
2. Make changes based on the specifics of the role
3. Compile using `./compile.sh`
4. This will be output to *Output/Year/Month/Branch Name* so for example *Output/2019/January/Google* so it is easy to keep track
5. Submit your resume!

Optionally you could commit the code changes to this specific branch. I typically only push local non-master branches to my remote git repository if it is for a group of jobs e.g. frontend resume base.

**Note:** Output by default is ignore by git.

### Conclusion

This approach has allowed me to keep my resume under control and easily start a new variant. It has allowed me to use the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) in writing, reducing the duplications and errors. Although a lot of these steps can be cumbersome especially for small changes, over time I have found it to be useful.

If you have any suggestions please feel free to contact me on Twitter. I hope you have found this article useful!

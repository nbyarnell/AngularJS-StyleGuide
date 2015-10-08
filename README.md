Demonstration of fractal hierarchy directory structure for AngularJS apps
=============

This code is all (in the words of its author) "essentially pseudocode or design examples"

###### As such, don't bother trying to run it.

This is a fork of
[angular-ui/AngularJS-StyleGuide](https://github.com/angular-ui/AngularJS-StyleGuide) 
that attempts to apply the organizational principals described
[here](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)
(see the original discussion thread
[here](https://github.com/yeoman/generator-angular/issues/109).
The master branch contains the original, unmodified AngularJS StyleGuide, while the flat, nested
and nested-verbose branches in this project each implement the directory structure of the original
StyleGuide slightly differently.

#### Motivation

In the present draft of the app structure guide linked above, the author(s) describe
their conceptual hierarchy:

> We group elements of an application either under a "components" directory
> (for common elements reused elsewhere in the app), or under meaningfully-named
> directories for recursively-nested sub-sections that represent structural "view"
> elements or routes within the app

So, easy - if a dependency has more than one dependent, put it in the global components
directory. But what happens when you have a lot of independent-but-semantically-related
files/functionality - files that are usually named similarly and often have the same dependencies,
but are functionally isolated from one another? In this situation, you end up with the
**flat** branch - lots of similarly named directories crowding the top-level directory.

What if we group together these related-yet-independent files, so

```
project/
project-factory/
project-form/
project-header/
projects/
```

becomes

```
project/
  project-factory/
  project-form/
  project-header/
  projects/
  project.html
  project-controller.js
```

? This is what the **nested** branch does. The top-level directory becomes cleaner, but only
visually. This flies in the face of the author(s) original intent - to make "it easier for
large applications to develop a structure that reflects the application itself, while applying
the *same* rules at each level of the hierarchy." (emphasis mine) Grouping these files together
creates an exception to the rules laid out in design guide.

So what's the solution? Writing highly reusable code I guess :)
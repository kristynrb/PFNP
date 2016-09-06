[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/)

# Reading : CSS

**CSS**, or 'cascading style sheets', is a language for defining _rules_ for
how HTML tags get displayed on the page.
The standard format for writing a CSS rule is a **selector**,
or reference to some set of elements,
followed by a pair of curly braces containing properties to modify and
values to assign to those properties.

```css
selector {
  someProperty: someValue;
  someOtherProperty: someOtherValue;
}
```

For instance, a rule to take all `p` tags and to turn their text color to purple
might look like this:

```css
p {
  color: #990099;
  font-size: 20px;
}
/* This is a CSS comment. */
/*
#990099 is a hex code -- a numerical way to describe a color.
This one specificies a certain shade of the color 'purple'.
You can play around with hex codes here:
http://rapidtables.com/web/color/RGB_Color.htm
*/
```

HTML elements have lots of style-related properties to manipulate;
a full list can be found [here](http://www.w3schools.com/cssref/).

In addition to selecting all tags of a particular type,
you can also define _custom groups of tags_ in your HTML file,
using an element's `class` property, and reference all tags of
a particular `class` when making your rule.

```html
<p> Lorem ipsum 1 </p>
<p class='red-text'> Lorem ipsum 2 </p>
<p class='red-text'> Lorem ipsum 3 </p>
<p> Lorem ipsum 4 </p>
```

```css
.red-text {
  color: #FF0000; /* bright red! */
}
```

Note that for classes, the selector is always `.` + the name of the class.
Tags can be members of multiple classes.

```html
<p> Lorem ipsum 1 </p>
<p class='red-text'> Lorem ipsum 2 </p>
<p class='red-text big-text'> Lorem ipsum 3 </p>
<p> Lorem ipsum 4 </p>
```

```css
.red-text {
  color: #FF0000; /* bright red! */
}
.big-text {
  font-size: 100px; /* rather large! */
}
```

> Note: Because classes are separated by spaces in the HTML, class names cannot
> include spaces.

Simple, right? Unfortunately, there's a problem -- when you define
lots of rules, sometimes they disagree. How do you know which one to follow?

CSS has two systems for handling this.
The first is called "specificity" -- the rule that refers more "specifically"
to a given element controls the value (e.g. '100px') of a disputed property.
**Note: This only affects disputed properties!**
The precise definition of specificity is [a little complicated](https://specificity.keegan.st/)...
but an easy-to-remember piece is that
**rules applied to classes are more specific**
**than rules that refer to tag types**.

In the example above, the paragraph 'Lorem ipsum 2' is affected by both the
`.red-text` rule and the `p` rule. They don't disagree about font size, but they
_do_ disagree about the color. Since `.red-text` is a class rule, and `p` is a
tag rule, the color is set to red.

The second system acts as a 'tie-breaker' to the first system.
If two equally-specific rules disagree about the value of a property,
**the CSS rule defined later** (i.e. lower down in the CSS code)
**beats the earlier rule**.
That's the 'cascading' that gives CSS its name!

How do you actually include CSS code in your web page? There are three ways to
do it :

-   inline styles (using an element's `style` property)
-   matching `<style>` tags
-   **style sheets**, separate files that get referenced from the HTML

99.99% of the time, the right answer is to use a style sheet.

To load a stylesheet from an HTML file, you need to use a `<link>` tag.
Since this stylesheet isn't a visible part of the page, it shouldn't go into the
document's body. Instead, it goes into another section, called the 'head', which
holds stuff that _affects_ the page's content but isn't _part_ of that content.

```html
<html>
  <head>
    <link rel='stylesheet' type='text/css' href='path/to/stylesheet/from/html'>
    <!-- This is standard boilerplate; feel free to copy-paste. -->
  </head>
  <body>
  </body>
</html>
```

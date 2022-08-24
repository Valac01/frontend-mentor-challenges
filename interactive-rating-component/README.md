# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screen shot of rating component solution](./images/rating_component_screenshot.png)

### Links

- Solution URL: [here](https://github.com/Valac01/frontend-mentor-challenges/tree/main/interactive-rating-component)
- Live Site URL: [here](https://valac01.github.io/frontend-mentor-challenges/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- BEM
- Web animation api

### What I learned

This helped me to learn ways to style radio button 

```html
<input type="radio" name="rating" id="1" value="1">
<label for="1" class="card--icon">1</label>
```
```css
input:checked + label {
  background-color: var(--medium-grey);
  color: var(--white);
}
```

Using `data attributes` in combination with CSS and JS.

```html
<div id="rating-card" class="card" data-visible="true">
  ...
</div>
```

```css
.card[data-visible="false"] {
  display: none;
}
```

Using web animation api to programatically do animations.

```js
if (!rating) {
  // wiggle btn
  btn.animate([
    {transform: "translateX(0px)"},
    {transform: "translateX(20px)"},
    {transform: "translateX(-20px)"},
    {transform: "translateX(0px)"},
  ], {
    duration: 180,
    easing: 'ease-out'
  })
}
```

### Continued development

I want to focus on animations in general, and styling more form elements. 

### Useful resources

- [data-attibutes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - It was an alternative to adding and removing a css class aproach, to hide or show an element.
- [Web animation api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) - In the context of Javascript logic, adding animation in JS felt more reasonable approach.
## Author

- Github - [Valac01](https://github.com/Valac01)
- Frontend Mentor - [@Valac01](https://www.frontendmentor.io/profile/Valac01)
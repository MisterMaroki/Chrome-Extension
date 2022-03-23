# Chrome-Extension

Welcome to my first chrome extention and also my first commit!

A chrome extension that lets you seamlessly save links and revisit them later. Very useful little tool when used for lead tracking and general temporary bookmarks.

Here I used html, vanilla js, and css. I made this ext. before I learned about scss(or github LOL), however, even without scss, styling this project was a breeze.
If you peek into the index.js you will see this is utilizing chrome's local storage to save, fetch, and edit a stored array of links. Pretty simple stuff so far...


Potential improvements for later...

1. Delete buttons on individual links
2. Delete button style and text change onclick timeout function only works once. A feature to stop the user from accidentally deleting links which are unrecoverable after deletion. Ideally this function would be able to be called an infinite ammount such as a method in order to preserve this safety feature. However, once you dblclick the delete button once, it is then only requiring a single click. this is because the only way i could add this feature was to nest an event listener inside an eventlistener.

To be continued..

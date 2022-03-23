# hello

Welcome to my first chrome extention!

Here I used html, vanilla js, and css. I made this ext. before i learned about scss, however, without scss this project was a breeze.
If you peek into the index.js you will see this is utilizing chrome's local storage to save, fetch, and edit a stored array of links. Pretty simple stuff so far...


Potential improvements for later...

1. Delete buttons on individual links
2. Delete button style and text change onclick timeout function only works once. A feature to stop the user from accidentally deleting links which are unrecoverable after deletion. Ideally this function would be able to be called an infinite ammount such as a method in order to preserve this safety feature. However, once you dblclick the delete button once, it is then only requiring a single click. this is because the only way i could add this feature was topp nest an event listener inside an eventlistener.

To be continued..

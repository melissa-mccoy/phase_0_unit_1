#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    Answer: Elements Tab - HTML is shown in the left pane and CSS in the right page with helpful connected navigation between them (if you click on html element, the right pane will toggle to the corresponding CSS selector).
  * Javascript Debugging
    Answer: Console Tab - Allows you to copy/paste/write JS code and see how the browser will interpret it, helping you identify where errors/bugs lie.
  * Performance Optimization
    Answer: Network Tab - Shows you the load times of each network request,  their size, and what's initiatiing the request which allows you to identify ways to reduce size/ordering/number/etc of your files to reduce total load time.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  Answer: CTRL+SHIFT+I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      Answer: #0B0F11 which appears to be a really dark navy. 
  * Tweak the background color to white.
      Answer: Done.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
      Answer: Done.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
      Answer: Done.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
      Answer: See img folder.
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
      Answer: See img folder. Alt+PrintScreen baby!

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
    Answer: Because they're using an image of the text, not HTML marked up text.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
    Answer: At 316 kb, it's a picture of NYC which appears to be one of the photos in the slideshow.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    Answer: Using the Network tab of the DevChromes interface. You sort by Size and find the top image. Here is the URL of the offending image:
    http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  Answer: First Highest priority optimization is image size reductions to display sizes. This would reduce total size by 885.9 KB!
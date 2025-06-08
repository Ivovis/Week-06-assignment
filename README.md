## Requirements

    🎯 Implement the useState hook to manage gallery state (e.g. selected image).

    🎯 Use useEffect for initial fetching of images from an external API.

    🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).

    🎯 Use the .map() function to render an array of images dynamically

    🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.

    🎯 Ensure all images have meaningful alt text.

    🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

## Stretch Requirements

    🏹 Use useEffect and the dependency array to update the images when the user types in an input field.

    🏹 Set up an Unsplash application that you can fetch from your React app.

    🏹 Use .env to hide your API keys and tokens from the code.

    🏹 Style the application excellently, using grid or flex and positioning.

### checkpoint 1

    Basic template and repo created

### checkpoint 2

    Site published to render.com

    Wireframe for mobile, The simplicity of this app means that the desktop just extends the viewing area, but to demonstrate responsiveness, I plan to relocate the thumbnail holder to a different location for different screen sizes.

![Example Image](./misc/React-PhotoApp.png)

### checkpoint 3

    I have the images loading from the API, I have them in a dedicated component that is now rendering in the correct location and is scrolling on a mobile device as I want, although they still look ugly as hell on desktop, seems the way to fix this would be to use/build a gesture component, but thats way out of scope so for now its stays ugly on desktop.

![Example Image](./misc/week6Assign1.png)

    Next up will be adding a callback to the ThumbnailBar component to handle selection changes.

### checkpoint 4

    I had to re-think my whole approach, if I load the images from the API within the thumbnail component I will also need to load them in the main display component, this makes no sense, moving the image data to the top level component (app.jsx) and loading them once there then passing them down to the children seems more efficient, I am pretty much back where I started from a functional standpoint but now I do have currentID updating from mouse clicks and keyboard input (enter and space).
    I  am currently working on the MainDisplay rendering - this is WIP for now and this checkpoint just marks the ned of the working day!

### checkpoint 5

    I finally got the background image displaying, this took a lot more messing about, I'm not sure I have done it correctly, it should be noted that I tried two methods and have left the first commented out in the MainDisplay.jsx

    I think I have met all of the requirements:

        - implement the useState hook to manage gallery state, 'I have two useState hooks used in App.jsx'

        - Use useEffect for initial fetching of images from an external API. 'used in app.jsx'

        - Return JSX from multiple components, 'I have three components all in use'

        - Use the .map() function to render an array of images dynamically ` ThumbnailBar.jsx uses the map function`

        - Implement functionality to display a larger version of an image when its thumbnail is clicked. `I have found two ways to do this both are present in MainDisplay.jsx one is commented out`

        - Ensure all images have meaningful alt text. `all the thumbnail images have the alt text provided by the API, the background image doesn't`

        - Ensure basic keyboard navigation for image selection `This is working as intended`

    I will now work towards adding better responsive styling, I want to add arrows for navigation on larger displays, I want to add a pop up menu that will a toggle option  to hide the thumbnails and maybe a toggle to enable a timed slide show.

    After that I will have a look at using unsplash

### checkpoint 6

    I added a component to hide the thumbnail bar, and have dropped the arrow buttons, I felt the tab order would not be as clean as it is now. I added a media query with the aim of changing the width of the thumbnail bar, after testing  realised that flex is handling everything already, so removed this as the noticeable step between widths was pretty ugly.

    One last thought, the HideUI component is not in the tab list, but I have included alt text, playing safe but not sure it was needed here and last minute I realised that the svg image was in fact black, I use darkmode (Brave browser) and spotted this when doing final tests using light mode is two other browsers (firefox and Chromium) I added styling to HideUI.css to invert the svg image as default, and clear it for dark mode browsers, ensuring to displays white in both.

### checkpoint 7

    I did a little research on how to switch the browser to fullscreen, and wondered if this could be completely enclosed in a single component, and after a little experimenting I got it working, this commit includes the FullScreen component.

    One option I found was an existing module react-full-screen that can be installed via npm but I did not explore this further.

#### Sources:

- Cartoon-Frog.svg https://publicdomainvectors.org/en/free-clipart/Cartoon-frog/49778.html
- hide icon https://www.svgrepo.com/svg/309609/eye-hide
- unhide icon https://www.svgrepo.com/svg/266947/eye
- exit full screen https://www.svgrepo.com/svg/494797/fullscreen1
- enter full screen https://www.svgrepo.com/svg/494796/fullscreen2

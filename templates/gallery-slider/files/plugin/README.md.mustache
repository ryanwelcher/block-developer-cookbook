# Overview
In this recipe, we’re going to create a custom gallery slider block that is powered by the Interactivity API (IAPI). This slider will use the Cover, Media & Text, and Image blocks as slides and we’ll filter these core blocks to allow them to support the IAPI. Finally, we’ll add an attribute to the block and use it inside the store that powers the slider.

# Step 1 - Block configuration

Blocks that leverage the IAPI need to opt-in in two steps. The first is via the `supports.interactive` property in `block.json`. Add the following to the opt in and add some alignment options for our block

```js
"supports": {
       "interactivity": true,
       "align": true,
       "alignWide": true
 },
```
Next, we need to tell the `@wordpress/scripts` package where to find the view.js file to be loaded as a module for this block. This is done via the new `viewScriptModule` property.

```js
"viewScriptModule": "file:./view.js"
```
There is a new experimental flag that we need to use for our `build` and `start` commands to enable the view.js file to be processed as a module.

```js
build: 'wp-scripts build --experimental-modules',
start: 'wp-scripts start --experimental-modules',
```

# Step 2 - Preparing the render.php
Open the  `./src/render.php` file and it should looked like this:

```php
<?php
/**
* PHP file to use when rendering the block type on the server to show on the front end.
*
* The following variables are exposed to the file:
*     $attributes (array): The block attributes.
*     $content (string): The block default content.
*     $block (WP_Block): The block instance.
*
* @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
*/


?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
   <div class="slider-container">
       <?php echo wp_kses_post( $content ); ?>
   </div>
   <div class="buttons">
       <button aria-label="go to previous slide">&lt;</button>
       <p>1/10</p>
       <button aria-label="go to next slide">&gt;</button>
   </div>
</div>
```
The second step to enable the IAPI for a block is to add the `data-wp-interactive` directive to the render.php. A directive is added to the markup to add specific behavior to the DOM elements of the block. Read more about directives [here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/packages-interactivity-api-reference/#the-directives)

Add the following to outermost div:

```php
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive='{ "namespace": "gellery-slider" }'>
   <div class="slider-container">
       <?php echo wp_kses_post( $content ); ?>
   </div>
   <div class="buttons">
       <button aria-label="go to previous slide">&lt;</button>
       <p>1/10</p>
       <button aria-label="go to next slide">&gt;</button>
   </div>
</div>
```
This new attribute contains an object with a single property; `namespace`. This property must match the name of the store that we’ll be defining in the `view.js` file. Pay special attention to the usage of single and double quotes here as it’s a common place for errors to occur if the quotes are not correct.

# Step 3 - Defining a store
Interactive blocks use a store to manage the state of the block as well as provide actions and callbacks for the block to use. Open the `./src/view.js` to see how a store is defined.

```js
/**
* WordPress dependencies
*/
import { store } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {},
   actions: {},
   callbacks: {},
} );
```
After importing the `store` function from the '@wordpress/interactivity' package, we create a store by passing the name of the store and an object representing the store’s definition.

In the starting code, we have `state`, `actions`, and `callbacks`. While these properties can technically be anything, it is recommended to follow this naming convention.
State
The state object is used to store the global state for this store and hold functions that return derived state (values calculate from state or context)
Actions
The action object should store functions that can be triggered by a user such as clicking on a button.
Callbacks
This object should contain functions that respond to things that happen programmatically or automatically. Such as when the block is loaded or when watching for a change in state.

It should be noted that actions and callbacks both respond to things that happen in the block and as such there can be a fair amount of overlap between these concepts - there is no wrong answer here so use your judgment to the best place to put your functions.

The store conveniently returns references to all of these items so that they can be accessed in other areas of the store.

Step 4 - State vs Context
State and context are used to track what is happening inside our block at any given time. The important difference between these is that `state` is global while `context` is local. Anything in `state` will be available to all instances of our block while `context` will only be available to a single instance.

As an example, let’s define a `currentSlide` variable in state and provide an action to change it to the next slide.

```js
/**
* WordPress dependencies
*/
import { store } from '@wordpress/interactivity';
const { state } = store( 'gallery-slider', {
   state: { currentSlide: 0 },
   actions: {
       nextImage: () => {
           state.currentSlide++;
       },
   },
   callbacks: {},
} );
```
If we triggered `nextImage`, then every instance of this block would have its `currentSlide` property changed and the image would change for each slider. That’s not what we’re looking for so instead, we are going to use context to ensure `currentSlide` and the other properties we need are different for each instance of the block.

We define context in `./src/render.php` by using the `data_wp_context` function by passing it an array containing the items and their starting values. Update the code with the following to create the context properties we want to track for the slider.

```php
$context = array_merge(
   $attributes,
   array(
       'slides'       => array(),
       'currentSlide' => 0,
       'totalSlides'  => 0,
   )
);

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
   data-wp-interactive='{ "namespace": "gellery-slider" }'
   <?php echo data_wp_context( $context ); ?>
   >
   <div class="slider-container">
       <?php echo wp_kses_post( $content ); ?>
   </div>
   <div class="buttons">
       <button aria-label="go to previous slide">&lt;</button>
       <p>1/10</p>
       <button aria-label="go to next slide">&gt;</button>
   </div>
</div>
```

# Step 5 - Change the active slide
In order to change the slide being viewed, we need to create two actions and bind them to the next and previous buttons.

Let’s start by creating the actions. In `view.js` add the following stubs for the `prevImage` and `nextImage` functions:

```js
/**
* WordPress dependencies
*/
import { store } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {},
   actions: {
       prevSlide: () => {
           console.log( 'Previous image' );
       },
       nextSlide: () => {
           console.log( 'Next image' );
       },
   },
   callbacks: {},
} );
```
Next, we need to connect our buttons to these functions. We can use the `data-on` directive for this. This directive is used to run code on dispatched DOM events like `click` or `keyup` using the format of `data-wp-on–{event-name}` and the value is which action we want to run. So to add the prevImage action to the previous button we would add the following:

```php
<button aria-label="go to previous slide" data-wp-on--click="actions.prevSlide">&lt;</button
```
Update the buttons with the new directive:

```php
$context = array_merge(
   $attributes,
   array(
       'slides'       => array(),
       'currentSlide' => 0,
       'totalSlides'  => 0,
   )
);


?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
   data-wp-interactive='{ "namespace": "gellery-slider" }'
   <?php echo data_wp_context( $context ); ?>
   >
   <div class="slider-container">
       <?php echo wp_kses_post( $content ); ?>
   </div>
   <div class="buttons">
       <button aria-label="go to previous slide" data-wp-on--click="actions.prevSlide">&lt;</button>
       <p>1/10</p>
       <button aria-label="go to next slide" data-wp-on--click="actions.nextSlide">&gt;</button>
   </div>
</div>
```
Test the block and make sure that when you click the buttons, you see the correct message in the console.

Now that we’ve got the buttons connected, we need to update the `currentSlide` property that was defined in the context in `render.php`. We can access context using the `getContext` function provided by the `@wordpress/interactivity` package.

Import that now and add the following to the store:

```js
import { getContext } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {},
   actions: {
       prevSlide: () => {
           const ctx = getContext();
           ctx.currentSlide--;
       },
       nextSlide: () => {
           const ctx = getContext();
           ctx.currentSlide++;
       },
   },
   callbacks: {},
} );
```
This is going to change the current slide but instead of testing it using the console, let’s create a new binding that we’ll use later to actually move the slides.

In render.php, add the following to the `slides-container` div:

```php
data-wp-style--transform="state.currentPos"
```

This `wp-style` binds a value to a given CSS property. In this case, we’re binding the `transform` CSS property to the value that is returned from `state.currentPos`.

Let’s define that now in our store.

```js
import { store, getContext } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {
       get currentPos() {
           const ctx = getContext();
		console.log( ctx.currenSlide )
           return `translateX(-${ ctx.currentSlide * 100 }%)`;
       },
   },
   actions: {
       prevSlide: () => {
           const ctx = getContext();
           ctx.currentSlide--;
       },
       nextSlide: () => {
           const ctx = getContext();
           ctx.currentSlide++;
       },
   },
   callbacks: {},
} );
```

Notice the use of the `get` keyword. This indicates that this is a JavaScript getter and it is expected to return a value. In this case we’re returning where the slides-container should move to. You may also be wondering why we put this in the `state` object. This function is creating some derived state (values based on state or in our case context) for our block so it makes sense to keep there.

Save and test block and and you should see that the slides are now moving and the value of `currentSlide` is being output to the console.

The issue we now have is that we can keep clicking the buttons to move the slides even if we don’t have any more to show.

Let’s fix that by disabling the next button when on the last slide and the previous button when on the first slide. We can do that with the `wp-bind` directive. This directive allows us to bind a value to any valid attributes for a tag. In this case, we want to use the  `disabled` attributes so let’s has `data-wp-bind–disabled` to each of the buttons with a new function name.

```php
$context = array_merge(
   array(
       'slides'       => array(),
       'currentSlide' => 0,
       'totalSlides'  => 0,
   )
);


?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
   data-wp-interactive='{ "namespace": "gallery-slider" }'
   <?php echo data_wp_context( $context ); ?>
   >
   <div class="slider-container" data-wp-style--transform="state.currentPos">
       <?php echo wp_kses_post( $content ); ?>
   </div>
   <div class="buttons">
       <button aria-label="go to previous slide" data-wp-on--click="actions.prevSlide" data-wp-bind--disabled="state.noPrevSlide">&lt;</button>
       <p>1/10</p>
       <button aria-label="go to next slide" data-wp-on--click="actions.nextSlide" data-wp-bind--disabled="state.noNextSlide">&gt;</button>
   </div>
</div>
```
Next, add the new functions to our state object in `view.js`:

```js
import { store, getContext } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {
       get currentPos() {
           const ctx = getContext();
           return `translateX(-${ ctx.currentSlide * 100 }%)`;
       },
       get noPrevSlide() {
           const ctx = getContext();
           return ctx.currentSlide === 0;
       },
       get noNextSlide() {
           const ctx = getContext();
           return ctx.currentSlide === ctx.totalSlides - 1;
       },
   },
   actions: {
       prevSlide: () => {
           const ctx = getContext();
           ctx.currentSlide--;
       },
       nextSlide: () => {
           const ctx = getContext();
           ctx.currentSlide++;
       },
   },
   callbacks: {},
} );
```

The `noPrevSlide` and `noNextSlide` will return `true` or `false` based on their inner logic which in turn will set the `disabled` attribute as needed for each button.

Right now, we’re not tracking the slides in our store so for testing, you can change the value for `totalSlides` in `render.php` to 5 to see the buttons in action. Don’t forget to change it back!

# Step 6 - Initializing the slides
The slides for our slider are core blocks, specifically the Cover, Media & Text, and Image blocks. We could try to count the blocks using a query selector in JavaScript but that can get complicated. Instead, let’s have the slides initialize themselves using a function from our store!

Start by adding a new function to the `callbacks` to handle the initialization of a slide:
```js
import { store, getContext, getElement } from '@wordpress/interactivity';
store( 'gallery-slider', {
   state: {
       get currentPos() {
           const ctx = getContext();
           return `translateX(-${ ctx.currentSlide * 100 }%)`;
       },
       get noPrevSlide() {
           const ctx = getContext();
           return ctx.currentSlide === 0;
       },
       get noNextSlide() {
           const ctx = getContext();
           return ctx.currentSlide === ctx.totalSlides - 1;
       },
   },
   actions: {
       prevSlide: () => {
           const ctx = getContext();
           ctx.currentSlide--;
       },
       nextSlide: () => {
           const ctx = getContext();
           ctx.currentSlide++;
       },
   },
   callbacks: {
       initSlide: () => {
           const ctx = getContext();
           // This is called by the core/cover blocks inside this block.
           // Adds the element reference to the `slides` array.
           const { ref } = getElement();
           ctx.slides.push( ref );
           ctx.totalSlides = ctx.slides.length;


           // The returned function executes when the element is removed from
           // the DOM.
           return () => {
               ctx.slides = ctx.slides.filter( ( s ) => s !== ref );
           };
       },
   },
} );
```

The `initSlide` function will be bound to  each inner block and when it’s called it will add a reference to itself in the `slides` array and then update the `totalSlide` variable to the new length.

The next part is getting core blocks to interact with our store. We’re going to modify the rendered HTML of the block by using the `WP_HTML_Tag_Processor` to add the directives to our blocks. All this is being done inside a `render_block` filter.

Add the following snippet to the main plugin PHP file
```php
/**
* Filter the render_block to add the needed directives to the inner cover blocks.
*/
function add_directives_to_inner_blocks( $block_content ) {
   $allowed_blocks = array( 'wp-block-cover', 'wp-block-image', 'wp-block-media-text' );
   $covers         = new \WP_HTML_Tag_Processor( $block_content );


   while ( $covers->next_tag() ) {
       $classes = explode( ' ', $covers->get_attribute( 'class' ) );


       foreach ( $allowed_blocks as $block_class ) {
           if ( in_array( $block_class, $classes, true ) ) {
               $covers->set_attribute( 'data-wp-interactive', '{"namespace":"gallery-slider"}' );
               $covers->set_attribute( 'data-wp-init', 'callbacks.initSlide' );
           }
       }
   }
   $block_content = $covers->get_updated_html();
   return $block_content;
}
add_filter( 'render_block_block-developer-cookbook/gallery-slider', 'add_directives_to_inner_blocks' );
```

In order for the core blocks to use our store, we need to add the `data-wp-interactive` directive to the root element with a value of our store name `gallery-slider`. We can then use the `data-wp-init` directive to call the `initSlide` function when the block is rendered.

The `WP_HTML_Tag_Processor` class allows us to add these new directives by scanning for all of the tags in the `$block_content` for the existence of certain classes and if found, it adds these new attributes to the markup.

Make sure to add some slides and then save and test the block.

# Step 7 - Introducing block attributes
In the `edit.js`, we have a control to toggle continuous mode. This mode will go back to the first slide once the user has reached the end of the slides and clicks the next button.

We need to pass this value into our `store` before we can use it so let’s add all of our block attributes to our `$context` array in render.php.

```php
$context = array_merge(
   $attributes,
   array(
       'slides'       => array(),
       'currentSlide' => 0,
       'totalSlides'  => 0,
   )
);
```
Now we have  will have access to the attribute called `continuous` that was defined in `block.json` in our store and we can update it accordingly

```js
/**
* WordPress dependencies
*/
import { store, getElement, getContext } from '@wordpress/interactivity';


const { state, actions } = store( 'iapi-gallery', {
   state: {
       get noPrevSlide() {
           const ctx = getContext();
           if ( ctx.continuous ) {
               return false;
           }
           return ctx.currentSlide === 0;
       },
       get noNextSlide() {
           const ctx = getContext();
           if ( ctx.continuous ) {
               return false;
           }
           return ctx.currentSlide === ctx.totalSlides - 1;
       },
       get currentPos() {
           const ctx = getContext();
           return `translateX(-${ ctx.currentSlide * 100 }%)`;
       },
       get imageIndex() {
           const ctx = getContext();
           return `${ ctx.currentSlide + 1 }/${ ctx.totalSlides }`;
       },
   },
   actions: {
       prevImage: () => {
           const ctx = getContext();
           if ( ctx.continuous && ctx.currentSlide === 0 ) {
               ctx.currentSlide = ctx.totalSlides - 1;
               return;
           }
           ctx.currentSlide--;
       },
       nextImage: () => {
           const ctx = getContext();
           if ( ctx.continuous && ctx.currentSlide === ctx.totalSlides - 1 ) {
               ctx.currentSlide = 0;
               return;
           }
           ctx.currentSlide++;
       },
    },
   callbacks: {
       initSlide: () => {
           const ctx = getContext();
           // This is called by the core/cover blocks inside this block.
           // Adds the element reference to the `slides` array.
           const { ref } = getElement();
           ctx.slides.push( ref );
           ctx.totalSlides = ctx.slides.length;


           // The returned function executes when the element is removed from
           // the DOM.
           return () => {
               ctx.slides = ctx.slides.filter( ( s ) => s !== ref );
           };
       },
   },
} );
```
Save and test toggling this mode on and off.

# Step 8 - Adding keyboard support
Almost there! The last step is to add keyboard support for the gallery. We’re going to use the `wp-on-document` directive bound to the `keydown` event. Add the following to the main wrapper div:

```php
data-wp-on-document--keydown="actions.onKeyDown"
```

Now, let’s add the onKeyDown function to the actions property of our store:

```js
/**
* WordPress dependencies
*/
import { store, getElement, getContext } from '@wordpress/interactivity';


const { state, actions } = store( 'iapi-gallery', {
   state: {
       get noPrevSlide() {
           const ctx = getContext();
           if ( ctx.continuous ) {
               return false;
           }
           return ctx.currentSlide === 0;
       },
       get noNextSlide() {
           const ctx = getContext();
           if ( ctx.continuous ) {
               return false;
           }
           return ctx.currentSlide === ctx.totalSlides - 1;
       },
       get currentPos() {
           const ctx = getContext();
           return `translateX(-${ ctx.currentSlide * 100 }%)`;
       },
       get imageIndex() {
           const ctx = getContext();
           return `${ ctx.currentSlide + 1 }/${ ctx.totalSlides }`;
       },
   },
   actions: {
       prevImage: () => {
           const ctx = getContext();
           if ( ctx.continuous && ctx.currentSlide === 0 ) {
               ctx.currentSlide = ctx.totalSlides - 1;
               return;
           }
           ctx.currentSlide--;
       },
       nextImage: () => {
           const ctx = getContext();
           if ( ctx.continuous && ctx.currentSlide === ctx.totalSlides - 1 ) {
               ctx.currentSlide = 0;
               return;
           }
           ctx.currentSlide++;
       },
       onKeyDown: ( e ) => {
           switch ( e.key ) {
               case 'ArrowLeft': {
                   if ( ! state.noPrevSlide ) {
                       actions.prevImage();
                   }
                   break;
               }
               case 'ArrowRight': {
                   if ( ! state.noNextSlide ) {
                       actions.nextImage();
                   }
                   break;
               }
           }
       },
   },
   callbacks: {
       initSlide: () => {
           const ctx = getContext();
           // This is called by the core/cover blocks inside this block.
           // Adds the element reference to the `slides` array.
           const { ref } = getElement();
           ctx.slides.push( ref );
           ctx.totalSlides = ctx.slides.length;


           // The returned function executes when the element is removed from
           // the DOM.
           return () => {
               ctx.slides = ctx.slides.filter( ( s ) => s !== ref );
           };
       },
   },
} );
```

Save and test and you now have a gallery block powered by the Interactivity API

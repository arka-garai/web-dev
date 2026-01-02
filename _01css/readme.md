# Types of CSS

1. **inline** - p1 (high) - Applied directly to HTML elements using the `style` attribute
   ```html
   <p style="color: red; font-size: 20px;">Text</p>
   ```

2. **internal** - p2 (mid) - Defined inside `<style>` tag in HTML `<head>` section
   ```html
   <head>
       <style>
           p { color: blue; }
       </style>
   </head>
   ```

3. **external** - p3 (low) - Defined in separate `.css` file and linked to HTML
   ```html
   <head>
       <link rel="stylesheet" href="style.css">
   </head>
   ```

---

## 💡 Properties

1. **width & height** - defines width and height of element

   **max-width** - sets the maximum width an element can grow to
   ```css
   div {
       width: 80%;
       max-width: 1200px;  /* Won't exceed 1200px even if 80% is larger */
   }
   ```
   **Units:** px, %, em, rem, vw, vh

   **max-height** - sets the maximum height an element can grow to
   ```css
   div {
       height: 50%;
       max-height: 500px;  /* Won't exceed 500px even if 50% is larger */
   }
   ```
   **Units:** px, %, em, rem, vw, vh

2. **color** - defines the text color of an element

3. **bgcolor** - defines background color

4. **units** - px % vh vw rem em - define lengths, sizes, and measurements
   - **px (Pixels)** - Absolute unit, fixed size, doesn't change
   - **% (Percentage)** - Relative to parent element
   - **em** - Relative to font-size of the element itself otherwise of the parent's font size (compounds in nested elements)
   - **rem (Root em)** - Relative to root element's (html) font-size (no compounding)

5. **font-family** - specifies the font for element

6. **font-size** - controls the size of the text in an element

7. **line-height** - sets the space between lines of text (leading)

8. **text-align** - aligns the text horizontally (left, right, center)

9. **padding** - defines the space between the content and the element's border

10. **margin** - sets the space outside the element's border (outside spacing)

11. **border** - defines the style, width, and color of an element's border

    **box-sizing: content-box (default)** - Width and height apply only to content. Padding and border are added to total size.
    ```
    |<-------- Total Width = width + padding + border -------->|
    | border | padding | content (width) | padding | border |
    ```

    **box-sizing: border-box** - Width and height include content + padding + border. Total size stays as specified.
    ```
    |<-------- Total Width = width (includes everything) -------->|
    | border | padding | content (shrinks to fit) | padding | border |
    ```

12. **display** - controls how an element is displayed on the page

    - **block** - Element takes full width available, starts on new line
      ```css
      div {
          display: block;  /* Default for div, p, h1-h6 */
      }
      ```
      - Takes up full width available
      - Forces line break before and after
      - Can set width and height
      - Examples: `<div>`, `<p>`, `<h1>`, `<section>`

    - **inline** - Element takes only necessary width, stays in line
      ```css
      span {
          display: inline;  /* Default for span, a, strong */
      }
      ```
      - Takes only content width
      - No line break
      - Cannot set width and height
      - Only horizontal margin/padding works
      - Examples: `<span>`, `<a>`, `<strong>`, `<em>`

    - **inline-block** - Hybrid of inline and block
      ```css
      img {
          display: inline-block;  /* Default for img, button */
      }
      ```
      - Stays in line like inline
      - Can set width and height like block
      - Respects all margin and padding
      - Examples: `<img>`, `<button>`, `<input>`

13. **position** - controls how an element is positioned in the document

    - **static (default)** - Normal document flow, not affected by top/right/bottom/left
      ```css
      div {
          position: static;  /* Default positioning */
      }
      ```
      - Follows normal HTML flow
      - top, right, bottom, left have no effect
      - z-index has no effect

    - **relative** - Positioned relative to its normal position
      ```css
      div {
          position: relative;
          top: 20px;      /* Moves 20px down from original position */
          left: 30px;     /* Moves 30px right from original position */
      }
      ```
      - Stays in document flow (space reserved)
      - Offset from its original position
      - Other elements not affected
      - Can use z-index

    - **absolute** - Positioned relative to nearest positioned ancestor
      ```css
      div {
          position: absolute;
          top: 0;         /* 0px from top of positioned parent */
          right: 0;       /* 0px from right of positioned parent */
      }
      ```
      - Removed from document flow
      - Positioned relative to nearest positioned parent (not static)
      - If no positioned parent, uses document body
      - Can use z-index

    - **fixed** - Positioned relative to viewport (browser window)
      ```css
      nav {
          position: fixed;
          top: 0;         /* Sticks to top of viewport */
          left: 0;
          width: 100%;    /* Full width */
      }
      ```
      - Removed from document flow
      - Stays in same position on scroll
      - Positioned relative to viewport
      - Common for sticky headers/navbars
      - Can use z-index

    - **sticky** - Toggles between relative and fixed based on scroll
      ```css
      header {
          position: sticky;
          top: 0;         /* Becomes fixed when scrolled to top */
      }
      ```
      - Acts like relative until scroll threshold
      - Then acts like fixed at specified position
      - Must specify at least one of top/right/bottom/left
      - Perfect for sticky headers
      - Can use z-index

14. **z-index** - controls the stacking order of positioned elements (front/back)
    ```css
    .modal {
        position: absolute;
        z-index: 100;    /* Higher value = closer to front */
    }
    .overlay {
        position: absolute;
        z-index: 50;     /* Lower value = further back */
    }
    ```
    - Only works on positioned elements (not static)
    - Higher values appear in front
    - Default is auto (0)
    - Can be negative
    - Creates stacking contexts

    **Visual Example:**
    ```
    z-index: 3  [Front] ▓▓▓
    z-index: 2          ▒▒▒
    z-index: 1  [Back]  ░░░
    ```

15. **selectors**
   - universal
   - element
   - id
   - class

**Visual Hierarchy:**
```
┌─────────────────────────────────────┐
│   Browser Window (Viewport)         │ ← Fixed elements position here
│  ┌───────────────────────────────┐  │
│  │  <html>                       │  │ ← Root element (rem reference)
│  │  ┌─────────────────────────┐  │  │
│  │  │  <head> (invisible)     │  │  │ ← Metadata, CSS links, scripts
│  │  ├─────────────────────────┤  │  │
│  │  │  <body>                 │  │  │ ← Document body (content container)
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │  Your Content     │  │  │  │ ← Absolute elements position relative
│  │  │  │                   │  │  │  │    to nearest positioned ancestor
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```
16. **pseudo-classes** - select elements based on their state or position
    
    **State-based:**
    - **:hover** - When mouse hovers over element
      ```css
      button:hover {
          background-color: blue;
      }
      ```
    
    - **:active** - When element is being clicked/activated
      ```css
      button:active {
          transform: scale(0.95);
      }
      ```
    
    - **:focus** - When element has keyboard focus
      ```css
      input:focus {
          border-color: blue;
          outline: 2px solid blue;
      }
      ```
    
    - **:visited** - For visited links
      ```css
      a:visited {
          color: purple;
      }
      ```
    
    - **:disabled** - For disabled form elements
      ```css
      input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
      }
      ```
    
    - **:checked** - For checked checkboxes/radio buttons
      ```css
      input:checked {
          accent-color: green;
      }
      ```

    **Position-based:**
    - **:first-child** - First child of parent
      ```css
      li:first-child {
          font-weight: bold;
      }
      ```
    
    - **:last-child** - Last child of parent
      ```css
      p:last-child {
          margin-bottom: 0;
      }
      ```
    
    - **:nth-child(n)** - Specific child by position
      ```css
      li:nth-child(2) { }          /* 2nd child */
      li:nth-child(odd) { }        /* 1st, 3rd, 5th... */
      li:nth-child(even) { }       /* 2nd, 4th, 6th... */
      li:nth-child(3n) { }         /* Every 3rd: 3, 6, 9... */
      li:nth-child(3n+1) { }       /* 1st, 4th, 7th... */
      ```
    
    - **:not()** - Excludes matching elements
      ```css
      p:not(.special) {
          color: gray;  /* All p except class="special" */
      }
      ```

17. **pseudo-elements** - style specific parts of elements (use :: syntax)
    
    - **::before** - Insert content before element's content
      ```css
      .quote::before {
          content: "❝ ";
          font-size: 2em;
          color: gray;
      }
      ```
    
    - **::after** - Insert content after element's content
      ```css
      .external-link::after {
          content: " ↗";
          font-size: 0.8em;
      }
      ```
    
    - **::first-letter** - Style first letter of text
      ```css
      p::first-letter {
          font-size: 2em;
          font-weight: bold;
          float: left;
      }
      ```
    
    - **::first-line** - Style first line of text
      ```css
      p::first-line {
          font-weight: bold;
          text-transform: uppercase;
      }
      ```
    
    - **::selection** - Style highlighted/selected text
      ```css
      ::selection {
          background-color: yellow;
          color: black;
      }
      ```
    
    - **::placeholder** - Style input placeholder text
      ```css
      input::placeholder {
          color: lightgray;
          font-style: italic;
      }
      ```

    **Key Difference:**
    - **Pseudo-classes (`:`)** - Target elements in specific states
    - **Pseudo-elements (`::`)** - Target specific parts of elements

    **Common Pattern with ::before/::after:**
    ```css
    .button::before {
        content: "";              /* Required, even if empty */
        position: absolute;
        width: 100%;
        height: 100%;
        /* Style as needed */
    }
    ```
**Made with ❤️ for learning CSS**
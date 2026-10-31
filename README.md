# Lab Exercise 4.2: JavaScript

Simple JavaScript lab covering a shopping cart calculation and a student grading system.

## Files

| File | Description |
|------|-------------|
| `order_menu.html` | Cafe order menu and cart page |
| `styles.css` | Stylesheet for the order menu page |
| `script.js` | Add to cart, remove item, total price, and checkout functions |
| `marks_entry.html` | Student marks entry form |
| `marks.js` | Calculates and displays feedback based on marks |

## How to Run

1. Save all files in the same folder.
2. Open `order_menu.html` in a browser to test the cart and checkout.
3. Open `marks_entry.html` in a browser to test the grading feedback.

## Features

### Order Menu
- Add items to the cart
- Remove items from the cart
- Calculate the total price
- Display the total price on checkout

### Marks Entry
- Accepts student name and marks
- Displays feedback based on the marks:
  - 80 and above: Excellent
  - 60 to 79: Good
  - 40 to 59: Pass
  - Below 40: Fail

## Notes

- `marks_entry.html` links to `marks.js` instead of `script.js` to avoid conflict with the cart script.
- JavaScript files are linked using:
  `<script src="script.js"></script>`
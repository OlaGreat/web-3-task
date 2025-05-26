# 🛒 Shopping Cart App

A simple and responsive Shopping Cart built with **React**, **Vite**, and **Tailwind CSS**. This project allows users to browse products, add/remove items from their cart, apply a discount coupon, and persist their cart state using `localStorage`.

---

## 🎯 Features

- ✅ **Product Display**: View a list of 10 mock products with images, names, and prices.
- ✅ **Add to Cart**: Add items to the cart and adjust their quantities.
- ✅ **Remove from Cart**: Remove items individually from the cart.
- ✅ **Real-Time Total**: Automatically updates the total cost as you add or remove items.
- ✅ **Coupon Support**: Enter `WEB3BRIDGECOHORTx` to get a 10% discount (case-sensitive).
- ✅ **Validation**: Prevents invalid quantities and displays error messages for bad coupon codes.
- ✅ **Persistence**: Cart data is saved in the browser using `localStorage` (survives refresh).
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop.

---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:

- Node.js (v16+)
- npm or yarn

### 📦 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/shopping-cart-app.git
   cd shopping-cart-app

2. Install Dependencies:

npm install
# or
yarn install


3. Start the Development Server:

npm run dev
# or
yarn dev


4. Open in Browser:
Go to http://localhost:5173

Usage Instructions
Browse Products: Products are displayed in a grid format.

Add to Cart: Click the “Add to Cart” button below any product.

Update Quantity: You can increase or decrease quantities directly in the cart.

Apply Coupon:

Enter WEB3BRIDGECOHORTx in the input field.

Click “Apply Coupon” to activate a 10% discount.

Invalid codes will show an error.

Cart Persistence:

Your cart data will remain even after refreshing the browser.

Stored in localStorage.



Tech Stack
React (with Hooks)

Vite (for fast development)

Tailwind CSS (for styling)

localStorage (for cart persistence)

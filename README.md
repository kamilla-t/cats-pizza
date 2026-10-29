## README for the `web-pizza` Project

---

# Web Pizza (Cat Pizza Shop)

A learning project for a cat-themed pizza shop built with **React + TypeScript + Vite**, with a simple **Express** backend.

The application allows users to browse cat pizzas, add them to their cart, place orders, and view their order history with basic authentication.

## Tech Stack

- **Frontend**
  - React
  - TypeScript
  - React Router DOM
  - Vite
- **Backend**
  - Node.js
  - Express
- **Other**
  - ESLint (React/TypeScript configuration)
  - `lowdb` for persistent local backend state in `server-data/db.json`
  - Guest sessions using `HttpOnly` cookies, with tokens and carts stored in persistent storage

## Application Features

- **Cat Catalog**
  - Fetches the list of cats from the backend via `/api/cats`
  - Cat cards with selectable options (fur, activity level, and additional “toppings”)

- **Shopping Cart**
  - Add products with specific options (`CartContext`)
  - Supports both guest and authenticated users
  - Update quantities, remove items, and clear the cart
  - Synchronizes with the backend via `/api/cart`, `/api/cart/items`, and `/api/cart/clear`
  - Isolates guest carts by cookie-based session instead of shared in-memory process storage

- **Checkout**
  - `CheckoutPage` and `CheckoutModal`
  - Address validation (city, street, and house number)
  - Payment method selection (card or cash)
  - Submits orders to the backend via `/api/orders`
  - Clears the cart after a successful checkout

- **Authentication**
  - User registration via `/api/register`
  - Login via `/api/login`
  - Stores the token and user data in `localStorage` (`AuthContext`)
  - Transfers the guest cart to the user's cart upon login
  - Backend session tokens are persisted in `server-data/db.json`, so they survive server restarts

- **Order History**
  - `OrdersPage`
  - Fetches orders via `/api/orders`
  - Displays a list of orders with their dates, totals, and items

## Project Structure

```text
web-pizza/
  server/
    app.mjs             # createApp(...) and lowdb-backed API storage
    index.mjs           # Server bootstrap and app.listen(...)
    seeds/
      users.json        # Committed user seed data for an empty db.json
  server-data/
    db.json             # lowdb storage for cats/users/sessions/carts/orders
    users.json          # Local runtime file, not used as a seed in CI
  pizza-images/         # Cat images served as static assets via /static
  src/
    auth/
      AuthContext.tsx   # Authentication context; stores user and token
    cart/
      CartContext.tsx   # Cart context; handles /api/cart
    components/
      auth/             # Authentication and checkout modals
      cats/             # Cat catalog components
    pages/
      HomePage.tsx      # Home page displaying cats
      CartPage.tsx      # Shopping cart page
      CheckoutPage.tsx  # Checkout page
      OrdersPage.tsx    # Order history page
    App.tsx             # Routing and main layout components
    main.tsx            # Frontend entry point
```

## Installation and Setup

### Prerequisites

- Node.js (a current LTS version)
- npm

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

**Frontend (Vite):**

```bash
npm run dev
# Default URL: http://localhost:5173
```

**Backend (Express):**

```bash
npm run dev:server
# Default URL: http://localhost:3001
```

**Run both servers simultaneously** (convenient for development):

```bash
npm run dev:all
```

### Build the Frontend for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## API Overview

- `GET /api/cats` — Get the list of cats
- `POST /api/register` — Register a user
- `POST /api/login` — Log in and return `token` and `user`
- `DELETE /api/users/by-email` — Delete a user by email (request body: `{ "email": string }`; response: `{ deletedUsersCount, deletedOrdersCount }`)
- `GET /api/cart` — Get the current cart
- `POST /api/cart/items` — Add an item to the cart
- `PATCH /api/cart/items/:id` — Update an item's quantity
- `DELETE /api/cart/items/:id` — Remove an item from the cart
- `POST /api/cart/clear` — Clear the cart
- `POST /api/orders` — Create an order using the request body or the current cart
- `GET /api/orders` — Get orders for the current user or guest
- `DELETE /api/orders/by-email` — Delete all orders for a user by email (request body: `{ "email": string }`; response: `{ deletedCount }`)

Authentication uses a token in the `Authorization: Bearer <token>` header. The token is stored in the frontend's `localStorage`, while server sessions, cart data, and order data are persisted in `server-data/db.json`. For guests, the backend creates an `HttpOnly` cookie named `guestSessionId` to isolate carts and order histories between browsers and tests.

## Development

### Linting

```bash
npm run lint
```

The main frontend business logic is organized into the following contexts:

- `src/auth/AuthContext.tsx`
- `src/cart/CartContext.tsx`

---

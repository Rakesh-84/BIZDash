# BizDash - Premium Frontend Admin Dashboard

## Data Structure
To integrate your backend, ensure your API returns objects in this format:

### Order Object
| Key | Type | Description |
| :--- | :--- | :--- |
| id | Number | Unique identifier |
| customer | String | Full name of the customer |
| amount | Number | Total transaction value |
| status | String | 'Paid' or 'Pending' |

### How to Connect your API
1. Open `src/pages/Dashboard.jsx`
2. Replace `initialOrders` in the `useState` hook with your fetched data.
# BizDash - Modern Business Dashboard UI Kit

BizDash is a high-performance, responsive admin dashboard built with **React**, **Tailwind CSS**, and **Lucide Icons**. Designed specifically for developers who need a clean, modular frontend to connect to their own backends.

## 🚀 Key Features
* **Orders Management**: Live search and deletion logic.
* **Inventory System**: Product cards with low-stock visual alerts.
* **Customer CRM**: Contact list with automated avatar generation.
* **Modular Architecture**: Built with "Lifting State Up" patterns for easy API integration.

## 🛠️ Tech Stack
* **Framework**: React 18+ (Vite)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Routing**: React Router Dom

## 🔌 Backend Integration
This is a **Frontend-Only** product using local state management. To connect a database:
1. Replace the `initialData` imports in `pages/` with your API fetch calls.
2. The components are designed to accept data as props, making them compatible with any REST or GraphQL API.

## 🏗️ Installation
```bash
npm install
npm run dev

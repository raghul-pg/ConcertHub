# ConcertHub 🎵

A full-stack web application for discovering, booking, and managing concert events. Users can browse events, book tickets, process payments, and receive digital tickets via email.

## 🎯 Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Event Management**: Browse and discover upcoming concerts
- **Ticket Booking**: Book tickets for events with real-time availability
- **Payment Processing**: Integrated Razorpay payment gateway
- **Email Notifications**: Automated ticket delivery via email
- **QR Code Generation**: Secure QR codes for ticket verification
- **User Dashboard**: View bookings and manage tickets
- **Password Security**: Bcrypt encryption for secure password storage

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing
- **CSS/Bootstrap** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Razorpay** - Payment gateway
- **Nodemailer** - Email service
- **QRCode** - QR code generation
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ConcertHub.git
cd ConcertHub
```

### 2. Setup Backend

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### 3. Setup Frontend

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Backend Setup

Create a `.env` file in the `server` directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eventDB?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email Configuration (Nodemailer)
SMTP_SERVICE=gmail
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend Setup

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📦 Running the Application

### Start Backend Server

```bash
cd server
npm start
```

The backend server will start on `http://localhost:5000`

### Start Frontend Development Server

In a new terminal:

```bash
cd client
npm start
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
ConcertHub/
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   └── Booking.js
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── payment.js
│   ├── utils/
│   │   └── sendTicketEmail.js
│   ├── server.js
│   └── package.json
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event details
- `POST /api/events` - Create event (Admin)
- `PUT /api/events/:id` - Update event (Admin)
- `DELETE /api/events/:id` - Delete event (Admin)

### Bookings
- `GET /api/bookings` - Get user's bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:id` - Get booking details
- `DELETE /api/bookings/:id` - Cancel booking

### Payments
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify-payment` - Verify payment
- `GET /api/payment/status/:orderId` - Check payment status

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. After login, the token is stored in localStorage and sent with every request in the Authorization header:

```
Authorization: Bearer <token>
```

## 💳 Payment Integration

The application uses **Razorpay** for payment processing. Ensure you have:
1. A Razorpay account (https://razorpay.com)
2. API keys configured in `.env`
3. Test mode enabled for development

## 📧 Email Configuration

Tickets are automatically sent to users via email after successful payment. Configure your email service in `.env`:

- For Gmail: Use an [App Password](https://myaccount.google.com/apppasswords)
- Update `SMTP_USER` and `SMTP_PASSWORD` in `.env`

## 🧪 Testing

### Backend Testing
```bash
cd server
npm test
```

### Frontend Testing
```bash
cd client
npm test
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your MongoDB URI in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Check if MongoDB service is running

### Payment Gateway Issues
- Verify Razorpay keys are correct
- Ensure you're using test keys in development mode
- Check Razorpay dashboard for transaction logs

### Email Not Sending
- Verify SMTP credentials
- Check email service configuration
- Review Nodemailer logs for errors

### CORS Errors
- Ensure frontend URL is allowed in CORS configuration
- Check backend CORS settings in `server.js`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👥 Support

For support, email support@concerthub.com or open an issue on GitHub.

## 🚀 Deployment

### Deploy Backend (Heroku/Railway/Render)
1. Update MongoDB URI to cloud instance
2. Set environment variables in hosting platform
3. Deploy using platform's CLI or GitHub integration

### Deploy Frontend (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Connect GitHub repository to Vercel/Netlify
3. Deploy with auto-deployment enabled

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Razorpay Documentation](https://razorpay.com/docs/)
- [JWT Documentation](https://jwt.io/)

---

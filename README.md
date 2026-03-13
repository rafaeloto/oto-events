# Oto Events

🎫 **Events QR Code Control System** - A comprehensive event management system with QR code-based guest access control.

## 📋 Overview

Oto Events is a modern web application built for event organizers to manage events, guests, and check-ins efficiently using QR codes. The system provides a complete solution from event creation to real-time guest tracking.

## ✨ Features

### 🏢 **Company Management**
- Multi-tenant architecture with company isolation
- Company creation and management
- Company-specific event dashboards

### 🎉 **Event Management**
- Create and edit events with details (name, date, place)
- Event dashboard with comprehensive overview
- Event CRUD operations with intuitive interface

### 👥 **Guest Management**
- Guest registration system (name, phone, email)
- CSV bulk import for large guest lists
- Guest list management with search and filtering
- Real-time guest status tracking (invited/arrived)

### 📱 **QR Code System**
- Automatic QR code generation for each guest
- QR code contains guest + event validation data
- Mobile-friendly QR code scanning interface
- Real-time validation and feedback
- Automatic check-in marking upon successful scan

### 📊 **Dashboard & Analytics**
- Main dashboard with key statistics
- Event attendance analytics
- Real-time check-in monitoring
- Export functionality for reports

## 🛠 Tech Stack

### **Frontend**
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern styling system
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Icon library

### **Backend & Database**
- **Prisma ORM** - Type-safe database access
- **PostgreSQL (Neon)** - Serverless database
- **Next.js API Routes** - Backend API endpoints

### **Authentication**
- **Clerk** - Complete authentication solution
- **Social login support** - Google, GitHub, etc.
- **Multi-tenant security** - Company data isolation

### **Deployment**
- **Vercel** - Optimized hosting platform
- **GitHub** - Version control and CI/CD

## 🎯 Usage

### **For Event Organizers**

1. **Sign Up/Login** - Create an account or sign in with existing credentials
2. **Create Company** - Set up your organization
3. **Add Events** - Create events with details like name, date, and venue
4. **Manage Guests** - Add guests individually or import via CSV
5. **Generate QR Codes** - Each guest gets a unique QR code
6. **Check-in Guests** - Scan QR codes at event entrance for instant check-in

### **For Guests**

1. **Receive QR Code** - Get your unique QR code via email or printed copy
2. **Event Check-in** - Present QR code at event entrance
3. **Instant Verification** - Get immediate confirmation of successful check-in

## 📱 Mobile Support

- **Responsive Design** - Works seamlessly on mobile devices
- **Touch-Friendly Interface** - Optimized for touch interactions
- **QR Code Scanning** - Mobile camera integration for check-ins

## 🌐 Deployment

### **Vercel Deployment**
1. **Connect Repository** - Link your GitHub repository to Vercel
2. **Configure Environment Variables** - Add all required environment variables
3. **Deploy** - Automatic deployment on push to main branch

### **Environment Setup for Production**
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Report bugs and request features via [GitHub Issues](https://github.com/rafaeloto/oto-events/issues)
- **Discussions**: Join the conversation in [GitHub Discussions](https://github.com/rafaeloto/oto-events/discussions)

## 🎉 Roadmap

- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **Advanced Analytics** - More detailed event insights
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Offline Mode** - QR code scanning without internet
- [ ] **Webhooks** - Real-time event notifications

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [Clerk](https://clerk.com/) - Complete user management platform
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

**Built with ❤️ by [rafaeloto](https://github.com/rafaeloto)**

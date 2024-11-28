# Role-Based Access Control (RBAC) Dashboard

## Video Demo
For a demo of the website, you can check out the video here: [Video Demo](https://www.linkedin.com/posts/soham-saha-529291250_role-based-access-control-rbac-dashboard-activity-7267535386816442369-KWd3?utm_source=share&utm_medium=member_desktop)



This is a **Role-Based Access Control Dashboard** project where users with different roles are granted access to specific features. The roles in this system include **Manager**, **Admin**, and **Contributor**, each with distinct permissions.

The application is built with a **React frontend** and an **Express backend**, offering a clean and responsive UI and robust functionality for managing access.

---

## Features of Each Role

### Manager
- ✅ Have access to the **Permission Requests** page.
- ✅ Have access to the **User Management** page.
- ✅ Holds the power to **promote or demote** any user.
- ✅ Can **add members** to a project.
- ✅ Can **create new projects**.

### Admin
- ✅ Have access to the **User Management** page.
- ✅ Holds the power to **promote or demote contributors**.
- ✅ Can **add members** to a project.
- ✅ Can **create new projects**.

### Contributor
- ❌ Does **not** have access to the **Permission Requests** and **User Management** pages.
- ❌ Cannot **add members** to a project.
- ❌ Cannot **create new projects**.

---

## Getting Started

To run the project locally, follow these steps:

### Backend Setup
```bash
cd backend
npm install
npm start
```
Frontend Setup
```bash
Copy code
cd frontend
npm install
npm run dev
```

## Screenshots

### Dashboard Overview (Manager)
<img src="https://github.com/user-attachments/assets/84c9f9e2-54a2-4710-87f5-bafd5af69e3e" alt="Manager Dashboard" width="800" />

### User Management Page
<img src="https://github.com/user-attachments/assets/1a53c62e-de36-4931-82c0-18b85e5fdcae" alt="User Management Page" width="800" />

### Project Management Page
<img src="https://github.com/user-attachments/assets/a9436b9b-0934-4a53-abfb-c2f69e2d0e3c" alt="Project Management Page" width="800" />

### Settings Page (24 Themes to Choose From)
<img src="https://github.com/user-attachments/assets/59e6d126-afac-4434-bb1e-560f48e71bd2" alt="Settings Page" width="800" />

### Responsive Design
- **Tablet View**  
  <img src="https://github.com/user-attachments/assets/0e342bf5-e004-4d9c-a808-988f916f9523" alt="Tablet View" width="600" />

- **Phone View**  
  <div style="display: flex; justify-content: space-around;">
    <img src="https://github.com/user-attachments/assets/ea81152e-c0e6-4845-a67d-77044a65725f" alt="Phone View 1" width="200" />
    <img src="https://github.com/user-attachments/assets/6cf79428-4dec-45a9-9ec2-9e30b830882e" alt="Phone View 2" width="200" />
    <img src="https://github.com/user-attachments/assets/7737bb6a-40d4-4fc3-971b-cb3e3d664786" alt="Phone View 3" width="200" />
  </div>


## Additional Features
- 🌟 24 Themes: Customize the look and feel of the dashboard with 24 built-in themes.
- 📱 Fully Responsive: The application works seamlessly on desktops, tablets, and mobile phones.
- ⚡ Modern Design: Built with Tailwind CSS for clean and scalable styling.
- 🔄 Real-Time Updates: Utilizes Socket.IO to track real-time user login status and activity, ensuring dynamic and up-to-date information for managers and admins.
---

## How It Works
- Users are assigned roles (`Manager`, `Admin`, `Contributor`).
- Based on the role, users see different pages and features on the dashboard.
- Actions like promoting/demoting users, creating projects, and managing members are limited to specific roles.

---

## Technologies Used
- **Frontend**: React, Tailwind CSS, Daisy UI
- **Backend**: Node.js, Express, Socket IO
- **Database**: MongoDB (or any database used in your project)

---

## Future Enhancements
- Filtering buttons to filter options
- Implement notification system for permissions

---

Feel free to clone the repository and try it out yourself! 🎉

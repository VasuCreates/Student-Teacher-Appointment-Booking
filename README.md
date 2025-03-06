# Student-Teacher Appointment Booking System

## Overview
The **Student-Teacher Appointment Booking System** allows students to schedule appointments with teachers based on their available slots. Teachers can manage their schedules, cancel appointments, and review past meetings while students can book, cancel, and view appointment histories.

## Features

### Calendar Management
- Teachers can block **2-hour schedules** on specific days.
- Blocked schedules become available for students to book.
- Students can view and book available slots.

### Upcoming Appointments
- Users can view and manage upcoming appointments.
- Teachers can cancel appointments, making slots available again.
- Students can cancel appointments or view details of booked slots.
- Users can access each other's details, including **name and contact** when a slot is booked.

### Appointment History
- Users can review details of **past appointments**.
- Teachers can add **scores (1-5)** and notes to historical appointments.
- Students can revisit details of past appointments.

### Cancellation Mechanism
- Both **teachers and students** can cancel appointments, making slots available again.
- Cancellations trigger **real-time updates** to both teacher and student schedules.


### Running Locally
#### Development Mode:
```bash
npm install
npm run dev
```
#### Production Mode:
```bash
npm install
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

This project is built using **Next.js** and the following technologies:

### Client-Side:
- **React** (for UI components)
- **Zustand** (state management)
- **Shadcn** (UI components)
- **Tailwind CSS** (for styling)

### Server-Side:
- **Firebase** (for backend and authentication)

### Other Technologies:
- **TypeScript** (static typing)
- **Git** (version control)

## Contribution

Feel free to contribute! Follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make changes and test them.
4. Create a pull request.

---

### License
This project is open-source under the **MIT License**.


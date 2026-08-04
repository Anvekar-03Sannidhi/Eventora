# Eventora

### System Architecture Document

---

**Project:** Eventora

**Version:** v0.1.0

**Status:** 🟢 In Development

**Last Updated:** 04 August 2026

---

# 1. Project Architecture

Eventora follows a modular Django architecture using the Model-View-Template (MVT) design pattern.

The application is divided into multiple apps, each having a single responsibility.

The project follows clean architecture principles with reusable components, modular code organization, and separation of concerns.

Architecture Pattern

Frontend

↓

Views

↓

Business Logic

↓

Models

↓

PostgreSQL

# 2. Technology Stack

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Django

Database

- PostgreSQL

Authentication

- Django Authentication System

Payment

- Razorpay

Email Service

- SMTP (Gmail)

QR Generation

- Python QRCode Library

Version Control

- Git
- GitHub

Development Environment

- VS Code

# 3. Folder Structure

Eventora/

│

├── accounts/

├── bookings/

├── events/

├── docs/

├── media/

├── static/

│ ├── css/

│ ├── js/

│ └── images/

├── templates/

├── eventora/

├── manage.py

└── requirements.txt

# 4. Application Responsibilities

accounts/

Responsible for:

- User Authentication

- Organizer Authentication

- User Profiles

----------------------------

events/

Responsible for:

- Event Creation

- Event Listing

- Event Details

- Categories

- Search

----------------------------

bookings/

Responsible for:

- Booking

- Tickets

- Seat Allocation

- QR Ticket

- Booking History

----------------------------

docs/

Responsible for:

- Project Documentation

- Architecture

- Memory

- Changelog

# 5. Database Design

Entities

User

↓

Organizer

↓

Event

↓

Seat

↓

Booking

↓

Ticket

Relationships

One User

↓

Many Events

One User

↓

Many Bookings

One Event

↓

Many Seats

One Event

↓

Many Bookings

One Booking

↓

Many Tickets

One Ticket

↓

One Seat

## ASCII diagram (later we can replace these ASCII diagrams with proper UML or ER diagrams.)

User
 │
 ├──── Booking
 │          │
 │          ├──── Ticket
 │                      │
 │                      └──── Seat
 │
 └──── Event

# 6. Application Flow

Visitor

↓

Landing Page

↓

Browse Events

↓

Event Details

↓

Ticket Quantity

↓

Seat Selection

↓

Booking Summary

↓

Payment

↓

Payment Success

↓

QR Ticket

↓

Booking History

# 7. Organizer Flow

Organizer Login

↓

Dashboard

↓

Create Event

↓

Publish Event

↓

Manage Events

↓

View Registrations

↓

Scan Tickets

# 8. Authentication Flow

Guest

↓

Login / Register

↓

Authentication

↓

Role Detection

↓

Attendee

or

Organizer

↓

Dashboard

# 9. Payment Flow

Event

↓

Ticket Quantity

↓

Seat Selection

↓

Booking Summary

↓

Payment

↓

Booking Created

↓

Ticket Created

↓

QR Generated

↓

Email Sent

# 10. Notification Flow

Booking Confirmed

↓

Generate Ticket

↓

Generate QR

↓

Send Email

↓

Send Notification

# 11. Static Assets

Reusable CSS

- navbar.css

- footer.css

Reusable JavaScript

- search_modal.js

Reusable Components

- Navbar

- Footer

Page Specific Assets

- Individual CSS

- Individual JS

# 12. Coding Architecture

Frontend

↓

Views

↓

Forms

↓

Models

↓

Database

Business Rules

↓

Views

↓

Models

Templates contain presentation only.

Business logic remains inside Django views and models.

Database operations use Django ORM.

# 13. Future Architecture

Future integrations include:

- Razorpay

- Email Notifications

- Push Notifications

- Deployment

- Cloud Storage

- Docker

- CI/CD

# 14. Architecture Principles

The project follows:

- Modular Design

- Separation of Concerns

- Reusable Components

- Clean Code

- Maintainable Structure

- Scalable Database Design

- Responsive Frontend

- Secure Authentication

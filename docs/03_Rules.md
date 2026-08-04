# Eventora

### Development Rules & Engineering Standards

---

**Project:** Eventora

**Version:** v0.1.0

**Status:** 🟢 Active

**Last Updated:** 04 August 2026

---

# 1. Purpose

This document defines the development standards, coding practices, architecture boundaries, and collaboration guidelines for Eventora.

Every new feature must follow these rules to ensure consistency, maintainability, scalability, and code quality throughout the project.

Whenever there is a conflict between implementation speed and code quality, choose the simplest maintainable solution that satisfies the MVP requirements.

# 2. General Development Rules

- Follow Django's MVT architecture.
- Keep the code modular.
- Avoid duplicate code.
- Reuse components whenever possible.
- Use meaningful variable and function names.
- Keep functions small and focused.
- One responsibility per function.
- One responsibility per file whenever practical.
- Always prioritize readability over clever code.

# 3. Folder Rules

Each Django app should have a single responsibility.

accounts/
Authentication and user management.

events/
Event management.

bookings/
Bookings, tickets and seat allocation.

docs/
Project documentation.

static/
Reusable CSS, JavaScript and images.

templates/
HTML templates only.

media/
Uploaded files.

# 4. Django Rules

- Use Django ORM for database operations.
- Avoid raw SQL unless absolutely necessary.
- Use Django Forms for user input whenever possible.
- Keep business logic out of HTML templates.
- Keep templates focused on presentation.
- Use ForeignKey relationships instead of duplicate data.
- Use migrations for every database change.

# 5. HTML Rules

- Use semantic HTML.
- Reuse common components.
- Keep HTML properly indented.
- Avoid inline styles.
- Use meaningful class names.

# 6. CSS Rules

- Reuse CSS whenever possible.
- Create page-specific CSS only when required.
- Use Flexbox before Grid unless Grid is a better fit.
- Maintain consistent spacing.
- Keep colors consistent with Design.md.
- Avoid duplicate styles.

# 7. JavaScript Rules

- One JavaScript file per page.
- Keep reusable logic separate.
- Avoid global variables.
- Use descriptive function names.
- Validate user input before sending data.

# 8. Database Rules

- Normalize database design.
- Use Foreign Keys whenever appropriate.
- Avoid storing duplicate information.
- Keep models focused.
- Use proper related_name values.
- Prefer database relationships over storing comma-separated values.

# 9. Naming Conventions

Variables

camelCase for JavaScript.

snake_case for Python variables.

Classes

PascalCase

Example

Booking

Ticket

Event

Functions

snake_case

Example

create_booking()

generate_ticket()

send_email()

Files

snake_case

Examples

payment_success.html

booking_summary.html

seat_selection.js

# 10. Git Rules

Commit after completing a feature.

Use meaningful commit messages.

Examples

Add booking summary page

Implement seat locking

Generate QR ticket

Push code after successful testing.

# 11. Error Handling Rules

- Validate all user input.
- Handle missing records using get_object_or_404().
- Display user-friendly error messages.
- Avoid exposing internal errors to users.
- Log unexpected errors when appropriate.

# 12. Security Rules

- Never store passwords manually.
- Use Django Authentication.
- Protect forms with CSRF tokens.
- Validate all incoming data.
- Restrict organizer-only pages.
- Never trust client-side validation alone.

# 13. Performance Rules

- Minimize database queries.
- Reuse objects whenever possible.
- Avoid unnecessary loops.
- Keep page load times low.
- Optimize images before uploading.

# 14. AI Collaboration Rules

During development:

- Always mention the filename before providing code.
- Prefer complete implementations over snippets.
- Explain architecture before implementation.
- Do not modify unrelated files.
- Follow the existing project structure.
- Reuse existing components whenever possible.
- Prioritize maintainability over shortcuts.
- Keep interview-readiness in mind while designing features.
- Preserve consistency across all modules.

# 15. MVP Rules

The following features are mandatory:

- Authentication
- Event Management
- Booking System
- Seat Selection
- Payment
- QR Ticket
- Booking History
- Organizer Dashboard
- Email Service
- Notifications

The following features are intentionally postponed:

- Coupons
- Wallet
- Reviews
- Analytics

# 16. Code Review Checklist

Before every Git commit:

☐ Code runs successfully.

☐ No duplicate code.

☐ Proper indentation.

☐ Responsive UI.

☐ No console errors.

☐ Database migrations verified.

☐ Feature tested.

☐ Memory.md updated.

☐ Changelog.md updated.

# 17. Engineering Philosophy

We build software that is:

Simple before Complex.

Readable before Clever.

Reusable before Duplicate.

Maintainable before Fast.

Professional before Perfect.

The objective is not to finish quickly.

The objective is to build a project that demonstrates strong software engineering practices while remaining practical to complete within the project timeline.

# 18. Decision Rules

When making technical decisions:

1. Does this help the MVP?

2. Does it keep the code maintainable?

3. Can it be explained confidently in an interview?

4. Will it still make sense after a two-week break?

5. Is it consistent with the existing architecture?

If the answer to any of these questions is "No", reconsider the implementation before proceeding.
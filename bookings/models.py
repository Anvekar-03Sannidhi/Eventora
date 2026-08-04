from django.db import models
from django.contrib.auth.models import User
from events.models import Event, Seat
import random
import string


class Booking(models.Model):

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("CONFIRMED", "Confirmed"),
        ("CANCELLED", "Cancelled"),
    ]

    booking_id = models.CharField(
        max_length=20,
        unique=True
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="bookings"
    )

    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        related_name="bookings"
    )

    tickets = models.PositiveIntegerField()

    booking_time = models.DateTimeField(
        auto_now_add=True
    )

    total_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    def save(self, *args, **kwargs):

        if not self.booking_id:

            random_id = ''.join(
                random.choices(
                    string.ascii_uppercase + string.digits,
                    k=6
                )
            )

            self.booking_id = f"EVT-{random_id}"

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.booking_id} ({self.user.username})"


class Ticket(models.Model):

    booking = models.ForeignKey(
        Booking,
        on_delete=models.CASCADE,
        related_name="booking_tickets"
    )

    seat = models.ForeignKey(
        Seat,
        on_delete=models.CASCADE,
        related_name="tickets"
    )

    ticket_code = models.CharField(
        max_length=100,
        unique=True
    )

    is_used = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def save(self, *args, **kwargs):

        if not self.ticket_code:

            random_id = ''.join(
                random.choices(
                    string.ascii_uppercase + string.digits,
                    k=8
                )
            )

            self.ticket_code = f"TKT-{random_id}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.ticket_code
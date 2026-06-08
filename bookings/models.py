from django.db import models
from django.contrib.auth.models import User
from events.models import Event
from events.models import Seat


class Booking(models.Model):

    STATUS_CHOICES = [
        ("CONFIRMED", "Confirmed"),
        ("CANCELLED", "Cancelled"),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE
    )

    booking_time = models.DateTimeField(
        auto_now_add=True
    )

    total_amount = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="CONFIRMED"
    )

    def __str__(self):
        return f"{self.user.username} - {self.event.title}"


class Ticket(models.Model):

    booking = models.ForeignKey(
        Booking,
        on_delete=models.CASCADE
    )

    seat = models.ForeignKey(
        Seat,
        on_delete=models.CASCADE
    )

    ticket_code = models.CharField(
        max_length=100,
        unique=True
    )

    is_used = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.ticket_code
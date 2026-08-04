from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class EventType(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="event_types"
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Event(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField()

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="events"
    )

    event_type = models.ForeignKey(
        EventType,
        on_delete=models.CASCADE,
        related_name="events"
    )

    organizer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="organized_events"
    )

    venue = models.CharField(max_length=255)

    event_date = models.DateField()

    event_time = models.TimeField()

    ticket_price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    event_image = models.ImageField(
        upload_to="event_images/",
        default="event_images/default.jpg"
    )

    total_seats = models.PositiveIntegerField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title


class Seat(models.Model):

    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        related_name="seats"
    )

    seat_number = models.CharField(
        max_length=10
    )

    is_booked = models.BooleanField(
        default=False
    )

    class Meta:
        unique_together = ("event", "seat_number")
        ordering = ["seat_number"]

    def __str__(self):
        return f"{self.event.title} - {self.seat_number}"
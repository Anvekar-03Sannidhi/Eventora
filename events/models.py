from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class EventType(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Event(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField()

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    event_type = models.ForeignKey(
        EventType,
        on_delete=models.CASCADE
    )

    organizer = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    venue = models.CharField(max_length=255)

    event_date = models.DateField()

    event_time = models.TimeField()

    ticket_price = models.DecimalField(
        max_digits=8,
        decimal_places=2
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
        on_delete=models.CASCADE
    )

    seat_number = models.CharField(
        max_length=10
    )

    is_booked = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.seat_number
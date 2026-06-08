from django.contrib import admin

from .models import (
    Category,
    EventType,
    Event,
    Seat
)

admin.site.register(Category)
admin.site.register(EventType)
admin.site.register(Event)
admin.site.register(Seat)


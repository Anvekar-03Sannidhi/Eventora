from django.contrib import admin
from .models import Category, EventType, Event, Seat

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "venue",
        "event_date",
        "ticket_price",
    )

admin.site.register(Category)
admin.site.register(EventType)
#admin.site.register(Event)
admin.site.register(Seat)


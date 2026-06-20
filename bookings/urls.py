from django.urls import path
from .views import book_event, my_bookings

urlpatterns = [
    path("book/<int:event_id>/", book_event, name="book_event"),
    path("my-bookings/", my_bookings, name="my_bookings"),
]
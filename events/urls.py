from django.urls import path

from events import views
from .views import home, create_event

urlpatterns = [
    path('', home, name='home'),
    path("create/", create_event, name="create_event"),
    path("all/", views.event_list, name="event_list"),
    path("<int:event_id>/", views.event_detail, name="event_detail"),
    path("search/", views.search_events, name="search_events"),
    path("<int:event_id>/seats/", views.seat_selection, name="seat_selection"),
]
from django import forms
from .models import Event


class EventForm(forms.ModelForm):

    class Meta:

        model = Event

        fields = [
            "title",
            "description",
            "category",
            "event_type",
            "venue",
            "event_date",
            "event_time",
            "ticket_price",
            "total_seats"
        ]
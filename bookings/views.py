from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required


from events.models import Event
from .models import Booking


@login_required
def book_event(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    existing_booking = Booking.objects.filter(
        user=request.user,
        event=event,
        status="CONFIRMED"
    ).exists()

    if existing_booking:
        messages.warning(
            request,
            "You have already booked this event."
        )
        return redirect("my_bookings")

    Booking.objects.create(
        user=request.user,
        event=event,
        total_amount=event.ticket_price
    )

    return redirect("event_list")

@login_required
def my_bookings(request):

    bookings = Booking.objects.filter(
        user=request.user
    )

    return render(
        request,
        "bookings/my_bookings.html",
        {"bookings": bookings}
    )
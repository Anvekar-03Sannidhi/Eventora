from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from events.forms import EventForm
from events.models import Event

# Create your views here.
def home(request):
    return render(request, 'home.html')

@login_required
def create_event(request):

    if request.method == "POST":

        form = EventForm(request.POST)

        if form.is_valid():

            event = form.save(commit=False)

            event.organizer = request.user

            event.save()

            return redirect("dashboard")

    else:

        form = EventForm()

    return render(
        request,
        "events/create_event.html",
        {"form": form}
    )

def event_list(request):

    events = Event.objects.all()

    return render(
        request,
        "events/event_list.html",
        {"events": events}
    )

def event_detail(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    return render(
        request,
        "events/event_detail.html",
        {"event": event}
    )

def search_events(request):

    query = request.GET.get("q", "")

    events = Event.objects.filter(
        title__icontains=query
    )

    data = []

    for event in events:

        data.append({

            "id": event.id,
            "title": event.title,
            "venue": event.venue,
            "image": event.event_image.name if event.event_image else "",

        })

    return JsonResponse(data, safe=False)

def seat_selection(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    return render(
        request,
        "events/seat_selection.html",
        {
            "event": event
        }
    )

def booking_summary(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    return render(

        request,

        "events/booking_summary.html",

        {

            "event": event

        }

    )
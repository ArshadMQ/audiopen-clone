from .testimonials_view import *
from django.urls import path
from .SavedNote import *
from .views import *

urlpatterns = [
    path('', LandingPage.as_view(), name='landing'),
    path('users/signup', SignUpView.as_view(), name='register'),
    path('users/signin', SignInView.as_view(), name='login'),
    path('users/signout', SignOutView.as_view(), name='logout'),

    path('testimonial', TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('testimonial/<int:pk>', TestimonialDetailView.as_view(), name='testimonial-detail'),

    path('savednote', SaveNoteListCreateView.as_view(), name='savedNote-list-create'),
    path('savednote/<int:pk>', SavedNoteDetailView.as_view(), name='savedNote-detail'),

    path('generate', GenerateTextView.as_view(), name='generate-text')

]

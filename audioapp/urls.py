from .comments_view import *
from django.urls import path
from .SavedNote import *
from .views import *

urlpatterns = [
    path('', LandingPage.as_view(), name='landing'),
    path('users/signup', SignUpView.as_view(), name='register'),
    path('users/signin', SignInView.as_view(), name='login'),
    path('users/signout', SignOutView.as_view(), name='logout'),

    path('comments', CommentListCreateView.as_view(), name='comment-list-create'),
    path('comments/<int:pk>', CommentDetailView.as_view(), name='comment-detail'),

    path('savednote', SaveNoteListCreateView.as_view(), name='savedNote-list-create'),
    path('savednote/<int:pk>', SavedNoteDetailView.as_view(), name='savedNote-detail'),

    path('generate',  GenerateTextView.as_view(), name='sgenerate-text')

]

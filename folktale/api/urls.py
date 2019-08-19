from django.conf.urls import url,include
from .views import CharacterListView,CharacterDetailView,FolktaleListView,FolktaleDetailView
from django.urls import path

urlpatterns = [
    path('stories',FolktaleListView.as_view()),
    path('characters',CharacterListView.as_view()),
    path('characters/<pk>', CharacterDetailView.as_view()),
    # path('character',FolktaleListView.as_view()),
    path('stories/<pk>', FolktaleDetailView.as_view()),
    path('characters/<name>', CharacterDetailView.as_view()),

]

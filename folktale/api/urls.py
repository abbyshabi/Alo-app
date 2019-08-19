from django.conf.urls import url,include
from .views import CharacterListView,CharacterDetailView,FolktaleListView,FolktaleDetailView
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('stories',FolktaleListView.as_view()),
    path('characters',CharacterListView.as_view()),
    path('characters/<pk>', CharacterDetailView.as_view()),
    # path('character',FolktaleListView.as_view()),
    path('stories/<pk>', FolktaleDetailView.as_view()),
    path('characters/<name>', CharacterDetailView.as_view()),

]

if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
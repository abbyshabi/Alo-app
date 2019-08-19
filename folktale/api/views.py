from rest_framework.generics import ListAPIView,RetrieveAPIView
from folktale.models import Character,Folktale
from .serializers import CharacterSerializer,FolktaleSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse

class CharacterListView(ListAPIView):
    queryset =Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterDetailView(RetrieveAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class FolktaleListView(ListAPIView):
    queryset =Folktale.objects.all()
    serializer_class = FolktaleSerializer

class FolktaleDetailView(RetrieveAPIView):
    queryset = Folktale.objects.all()
    serializer_class = FolktaleSerializer

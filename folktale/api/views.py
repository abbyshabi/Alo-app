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
    serializer_class = CharacterSerializern

class FolktaleListView(ListAPIView):
    queryset =Folktale.objects.all()
    serializer_class = FolktaleSerializer

class FolktaleDetailView(RetrieveAPIView):
    queryset = Folktale.objects.all()
    serializer_class = FolktaleSerializer

# class CharacterListView(APIView):
#     def get(self,request,format = None):
#         all_characterList = Character.objects.all()
#         serializer_class = CharacterSerializer
#         return Response(serializer_class.data)

# class CharacterDetailView(APIView):
#     def get(self,request,format = None):
#         all_characterListDetail = Character.objects.all()
#         serializer_class = CharacterSerializer
#         return Response(serializer_class.data)

# class FolktaleListView(APIView):
#     def get(self,request,format = None):
#         all_folktaleList = Folktale.objects.all()
#         serializer_class = FolktaleSerializer
#         return Response(serializer_class.data)

# class FolktaleDetailView(APIView):
#     def get(self,request,format = None):
#         all_folktaleListDetail = Folktale.objects.all()
#         serializer_class = FolktaleSerializer
#         return Response(serializer_class.data)
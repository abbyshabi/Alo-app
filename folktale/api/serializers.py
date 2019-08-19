from rest_framework import serializers
from folktale.models import Character,Folktale

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ('id','name','description','image')

class FolktaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folktale
        fields = ('id','title','body','image')

from django.core.files.uploadedfile import TemporaryUploadedFile
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import SavedNoteSerializer
from rest_framework.views import APIView
from .utils import get_Text_from_file
from rest_framework import status
from .models import SavedNote
from datetime import datetime
import os


def handle_uploaded_file(uploaded_file, destination):
    if not os.path.exists(destination):
        os.makedirs(destination)

    with open(os.path.join(destination, uploaded_file.name), 'wb') as destination_file:
        for chunk in uploaded_file.chunks():
            destination_file.write(chunk)


class SaveNoteListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        notes = SavedNote.objects.all()
        serializer = SavedNoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SavedNoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SavedNoteDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return SavedNote.objects.get(pk=pk)
        except SavedNote.DoesNotExist:
            return None

    def get(self, request, pk):
        notes = self.get_object(pk)
        if notes:
            serializer = SavedNoteSerializer(notes)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        notes = self.get_object(pk)
        if notes:
            serializer = SavedNoteSerializer(notes, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        notes = self.get_object(pk)
        if notes:
            notes.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)


class GenerateTextView(APIView):
    def post(self, request):
        uploaded_file = request.FILES.get('files')
        fileName = uploaded_file.name
        destination = 'uploads'
        if isinstance(uploaded_file, TemporaryUploadedFile):
            handle_uploaded_file(uploaded_file, destination)
        ttext, original_text = get_Text_from_file(f'{destination}/{fileName}')
        response = {"title": "Voice-to-Text Tool",
                    "original_text": original_text,
                    "description": ttext,
                    "timestamp": datetime.utcnow().strftime("%b %d, %Y")}
        return Response(status=status.HTTP_200_OK, data=response)

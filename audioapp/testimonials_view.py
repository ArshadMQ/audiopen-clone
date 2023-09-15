from rest_framework.permissions import IsAuthenticated
from .serializers import TestimonialSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Testimonial


class TestimonialListCreateView(APIView):

    def get(self, request):
        testimonials = Testimonial.objects.all()
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."},
                            status=status.HTTP_401_UNAUTHORIZED)

        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestimonialDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Testimonial.objects.get(pk=pk)
        except Testimonial.DoesNotExist:
            return None

    def get(self, request, pk):
        testimonial = self.get_object(pk)
        if testimonial:
            serializer = TestimonialSerializer(testimonial)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        testimonial = self.get_object(pk)
        if testimonial:
            serializer = TestimonialSerializer(testimonial, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        testimonial = self.get_object(pk)
        if testimonial:
            testimonial.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)

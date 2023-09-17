from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework import status
from .serializers import *
from .models import *
from faker import Faker
fake = Faker()


class LandingPage(APIView):
    """ Hi forks, Welcome to audiotest.ai Auth Backend! """

    def get(self, args):
        data = {'context': "Hi forks, Welcome to audiotest.ai integration app Backend!", 'status': status.HTTP_200_OK}
        return Response(data)


class SignUpView(APIView):
    def post(self, request):
        obj = {"username": request.data["email"],
               "email": request.data["email"],
               "password": request.data["password"]}

        serializer = UserSerializer(data=obj)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignInView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if 'password' not in request.data or password == "":
            return Response({'error': 'Please input password'}, status=status.HTTP_401_UNAUTHORIZED)

        if 'email' not in request.data or email == "":
            return Response({'error': 'Please input email'}, status=status.HTTP_401_UNAUTHORIZED)

        user = None
        if '@' in email:
            try:
                user = CustomUser.objects.get(email=email)
            except ObjectDoesNotExist:
                pass
        if user:
            # Use Django's authenticate function to check the password
            authenticated_user = authenticate(request, username=user.username, password=password)
            if authenticated_user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class SignOutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            print(request)
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

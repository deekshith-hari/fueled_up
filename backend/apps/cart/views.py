from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import CartSerializer, CartAddSerializer
from ..users.mixins import CustomLoginRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend
from .models import Cart
from .forms import CartForm

class CartList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']

class CartAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartAddSerializer

    def post(self, request, *args, **kwargs):
        # Set the user who login
        request.data['user'] = request.login_user.id
        return self.create(request, *args, **kwargs)

class CartDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def delete(self, request, *args, **kwargs):
        cart = Cart.objects.get(pk=self.kwargs['pk'])
        if cart.user.id != request.login_user.id:
            response = Response({'error': 'You can not delete the cartlist not owned by you.'}, status=status.HTTP_404_NOT_FOUND)
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response
        return self.destroy(request, *args, **kwargs)

class CartUpdate(CustomLoginRequiredMixin, generics.UpdateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartAddSerializer
    
    def update(self, request, *args, **kwargs):
        cart = Cart.objects.get(pk=self.kwargs['pk'])
        if cart.user.id != request.login_user.id:
            response = Response({'error': 'You can not update the cartlist not owned by you.'}, status=status.HTTP_404_NOT_FOUND)
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response
    
        cart_form = CartForm({"user":request.login_user.id, "item":cart.item.id, "quantity":cart.quantity})
        print(cart_form)
        if not cart_form.is_valid():
            response = Response({"error": "Request data is not correct."}, status=status.HTTP_404_NOT_FOUND)
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response
        cart_form.save()
        serializer = CartAddSerializer([cart_form], many=True)
        return Response(serializer.data[0])

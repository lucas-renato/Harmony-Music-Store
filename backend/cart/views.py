from rest_framework import generics, permissions
from .models import Cart
from .serializers import CartItemSerializer

class CartListCreateView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Retorna apenas os itens do usuário autenticado
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Define automaticamente o usuário dono do carrinho
        serializer.save(user=self.request.user)


class CartDeleteView(generics.DestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

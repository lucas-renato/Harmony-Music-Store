from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, generics
from cart.models import Cart
from .models import Order, OrderItem
from .serializers import OrderSerializer

class CheckoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        cart_items = Cart.objects.filter(user=user)

        if not cart_items.exists():
            return Response({'error': 'Carrinho vazio.'}, status=status.HTTP_400_BAD_REQUEST)

        total = sum(item.product.price * item.quantity for item in cart_items)
        order = Order.objects.create(user=user, total=total)

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )

        cart_items.delete()  # limpa o carrinho

        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class OrderHistoryView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created_at')

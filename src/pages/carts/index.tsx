import type { ICartItem } from '#/services/carts/type';
import useCartStore from '#/stores/useCartStore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Trash2,
  Plus,
  Minus,
  Package,
  CreditCard,
  Truck,
  Shield,
} from 'lucide-react';
import { useState } from 'react';


const CartPage = () =>
{
  const { cartItems, clearCartItems } = useCartStore()
  const [items, setItems] = useState<ICartItem[]>([])
  const removeItem = (id:number) =>
  {
    
  }
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const updateQuantity = (id:number,change:number) =>
  {
    setItems((prev) =>
    {
      prev.map((item) =>
      {
        if (item.id === id)
        {
          const newQty = Math.max(1, Math.min(item.stock, item.quantity + change))
          return {...item,quantity:newQty}
        }
      })
      //    if ( === id)
      // {
      //   const newQty = Math.max(1, Math.min(item.stock, item.stock + change));
      //   return { ...item, quantity: newQty };
      // }
    
      return prev
    })
    // setItems((prev) => prev.map((item) =>
    // {
    //   if (item.id === id)
    //   {
    //     const newQty = Math.max(1, Math.min(item.stock, item.stock + change));
    //     return { ...item, quantity: newQty };
    //   }
    //   return items
    // }))
    
  }
  const cancelAllItem = () =>
    {
      clearCartItems();
    }

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-semibold">Cart</h1>
            <Button onClick={cancelAllItem} variant="destructive">Cancel All</Button>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden p-0">
                <CardContent className="p-0">
                  <div className="flex h-full flex-col md:flex-row">
                    <div className="relative h-auto w-full md:w-32">
                      <img
                        src={item.thumbnail}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover md:w-32"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6 pb-3">
                      <div className="flex justify-between">
                        <div>
                          <span className='text-muted-foreground text-sm'>{ item.category }</span>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">
                            {item.price} each . Ship in 2 weeks
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.stock}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-medium">
                            ${(item.price * item.stock).toFixed(2)}
                          </div>
                          {item.price && (
                            <div className="text-muted-foreground text-sm line-through">
                              ${(item.price * item.stock).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Promo Code */}
              <div className="space-y-2">
                <Label>Promo Code</Label>
                <div className="flex gap-2">
                  <Input placeholder="Enter promo code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery fee</span>
                  <span>free</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 border-t pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Package className="text-primary h-4 w-4" />
                  <span>Free returns within 30 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="text-primary h-4 w-4" />
                  <span>Secure payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="text-primary h-4 w-4" />
                  <span>Fast delivery</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CartPage
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Minus, Trash2 } from "lucide-react";

const menuItems = [
  { id: 1, name: "Combo clasica", price: 37400 },
  { id: 2, name: "Combo bandida", price: 41400 },
  { id: 3, name: "Combo pampara", price: 39400 },
  { id: 4, name: "Combo W", price: 46400 },
  { id: 5, name: "Combo estrellita", price: 46400 },
  { id: 6, name: "Combo bomba", price: 46400 },
  { id: 7, name: "Clasica", price: 27900 },
  { id: 8, name: "Bandida", price: 31900 },
  { id: 9, name: "Pampara", price: 29900 },
  { id: 10, name: "W", price: 35900 },
  { id: 11, name: "Estrellita", price: 36900 },
  { id: 12, name: "Bomba", price: 36900 },
  { id: 13, name: "Coca-Cola", price: 6000 },
  { id: 14, name: "Papas a la francesa", price: 5000 },
];

const OrderForm = () => {
  const [order, setOrder] = useState<{ itemId: number; quantity: number }[]>(
    []
  );
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const addToOrder = (itemId: number) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.itemId === itemId);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevOrder, { itemId, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (itemId: number) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.itemId === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevOrder.map((item) =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevOrder.filter((item) => item.itemId !== itemId);
      }
    });
  };

  const calculateTotal = () => {
    return order
      .reduce((total, item) => {
        const menuItem = menuItems.find((mi) => mi.id === item.itemId);
        return total + (menuItem?.price || 0) * item.quantity;
      }, 0)
      .toFixed(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Orden enviada:", {
      order,
      address,
      neighborhood,
      city,
      notes,
      total: calculateTotal(),
    });
    // Aquí iría la lógica para enviar la orden al servidor
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-6 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-4">Realiza tu orden</h3>

      <div>
        <Label htmlFor="item">Agregar ítem a la orden</Label>
        <Select onValueChange={(value) => addToOrder(Number(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un ítem del menú" />
          </SelectTrigger>
          <SelectContent>
            {menuItems.map((item) => (
              <SelectItem key={item.id} value={item.id.toString()}>
                {item.name} - ${item.price.toFixed(0)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {order.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Tu orden:</h4>
          {order.map((item) => {
            const menuItem = menuItems.find((mi) => mi.id === item.itemId);
            return (
              <div
                key={item.itemId}
                className="flex justify-between items-center bg-gray-700 p-2 rounded"
              >
                <span className="flex-grow">{menuItem?.name}</span>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromOrder(item.itemId)}
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => addToOrder(item.itemId)}
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span className="w-20 text-right">
                    ${((menuItem?.price || 0) * item.quantity).toFixed(0)}
                  </span>
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    onClick={() =>
                      setOrder((prevOrder) =>
                        prevOrder.filter((i) => i.itemId !== item.itemId)
                      )
                    }
                    aria-label="Eliminar ítem"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
          <div className="font-bold text-right">Total: ${calculateTotal()}</div>
        </div>
      )}

      <div>
        <Label htmlFor="address">Dirección de entrega</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ingresa tu dirección"
          required
        />
      </div>

      <div>
        <Label htmlFor="neighborhood">Barrio</Label>
        <Input
          id="neighborhood"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          placeholder="Ingresa tu barrio"
          required
        />
      </div>

      <div>
        <Label htmlFor="city">Ciudad</Label>
        <Input
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ingresa tu ciudad"
          required
        />
      </div>

      <div>
        <Label htmlFor="notes">Notas adicionales</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Instrucciones especiales, alergias, etc."
        />
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
        Enviar Orden
      </Button>
    </form>
  );
};

export default OrderForm;

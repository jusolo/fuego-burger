import { Flame, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import Nav from "@/components/nav";
import Status from "@/components/status";
import MenuCategory from "@/components/menuCategory";
import OrderForm from "@/components/orderForm";
import Footer from "@/components/footer";

export default function Home() {
  const Combos = [
    {
      name: "Combo clasica",
      description: "Hamburguesa clasica + Papas + Bebida",
      price: "$37.400",
      image: "/img/combos/combo-clasica.jpg",
    },
    {
      name: "Combo bandida",
      description: "Hamburguesa bandida + Papas + Bebida",
      price: "$41.400",
      image: "/img/combos/combo-bandida.jpg",
    },
    {
      name: "Combo pampara",
      description: "Hamburguesa pampara + Papas + Bebida",
      price: "$39.400",
      image: "/img/combos/combo-pampara.jpg",
    },
    {
      name: "Combo W",
      description: "Hamburguesa W + Papas + Bebida",
      price: "$46.400",
      image: "/img/combos/combo-w.jpg",
    },
    {
      name: "Combo estrellita",
      description: "Hamburguesa estrellita + Papas + Bebida",
      price: "$46.400",
      image: "/img/combos/combo-estrellita.jpg",
    },
    {
      name: "Combo bomba",
      description: "Hamburguesa bomba + Papas + Bebida",
      price: "$46.400",
      image: "/img/combos/combo-bomba.jpg",
    },
  ];

  const Hamburguesas = [
    {
      name: "W",
      description:
        "Combina el sabor de dos hamburguesas la de pollo y la carne, con un toquecito de bbq picante que hace que la sinergia de estos sabores combine perfectamente.",
      price: "$35.900",
      image: "/img/hamburguesas/w.jpg",
    },
    {
      name: "Clasica",
      description:
        "Pan brioche, carne de res 150 gr, queso cheddar, cebolla caramelizada, lechuga, tomate, bbq maple y mayonesa de pimentón.  *Puedes elegir cebolla caramelizada, cebolla crujiente o cebolla blanca cruda.",
      price: "$27.900",
      image: "/img/hamburguesas/clasica.jpg",
    },
    {
      name: "Bandida",
      description:
        "Pan brioche, carne de res 150 gr, queso philadelphia, queso cheddar, tocineta caramelizada en bbq maple, lechuga, tomate, bbq maple y mayonesa de pimentón.",
      price: "$31.900",
      image: "/img/hamburguesas/bandida.jpg",
    },
    {
      name: "Bomba",
      description:
        "Pan brioche, carne de res 150 gr, doble queso cheddar, costilla de cerdo en miel de naranja, tocineta, cebolla crujiente, lechuga, tomate, salsa bbq maple, mayonesa de pimentón y garlic.",
      price: "$36.900",
      image: "/img/hamburguesas/bomba.jpg",
    },
    {
      name: "Pampara",
      description:
        "Pan brioche, con filete de pechuga apanado en panko 150 gr, queso mozzarella, sour cream de ajo, tocineta caramelizada en bbq maple, lechuga, tomate, bbq maple, mayonesa de pimentón.",
      price: "$29.900",
      image: "/img/hamburguesas/pampara.jpg",
    },
    {
      name: "Estrellita",
      description:
        "Pan brioche, carne de 150 gr de res, queso philadelphia, tocineta, reducción de frutos rojos, lechuga, tomate, mayonesa de pimentón y bbq maple.",
      price: "$36.900",
      image: "/img/hamburguesas/estrellita.jpg",
    },
  ];

  const Acompanantes = [
    {
      name: "Coca-Cola",
      description: "Coca-Cola 400 ml",
      price: "$6.000",
      image: "/img/acompanantes/coca-cola.jpg",
    },
    {
      name: "Papas a la francesa",
      description: "Papas a la francesa con queso y tocineta",
      price: "$5.000",
      image: "/img/acompanantes/papas-francesa.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold">Fuego Burguer</span>
          </div>
          {/* <Nav /> */}
        </div>
      </header>

      {/* Open Status and Delivery Time */}
      <Card className="container mx-auto mt-4 bg-gray-800 border-gray-700">
        <CardContent className="p-4 flex justify-between items-center">
          <Status />
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-green-500" />
            <span className="text-green-500">
              Tiempo estimado de entrega: 30-45 min
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">De barrio</span>{" "}
          <span className="text-red-500">pero elegante</span>
        </h1>
        <p className="text-xl mb-8">
          Las hamburguesas más ardientes y groceras de la ciudad
        </p>
        <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
          <a href="#order-form">Ordena Ahora</a>
        </Button>
      </section>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Menú</h2>
        <div className="space-y-12">
          <MenuCategory title="Combos" items={Combos} />
          <MenuCategory title="Hamburguesas" items={Hamburguesas} />
          <MenuCategory title="Acompañantes" items={Acompanantes} />
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="container mx-auto px-4 py-16">
        <OrderForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4 flex">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 text-white">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 mb-2">{item.description}</p>
                  <p className="text-red-500 font-bold">{item.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCategory;

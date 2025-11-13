import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center px-4 sm:px-0">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Calcular Preço Teto Bazin</CardTitle>
          <CardDescription>Calculadora de Preço Teto de Ações</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Label className="w-1/2">Dividendo Pago</Label>
            <Input placeholder="últimos 12 meses - R$" className="w-1/2"/>
          </div>
          <div className="flex items-center gap-2">
            <Label className="w-1/2 text-right">Retorno Desejado</Label>
            <Input placeholder="taxa mínima - %" className="w-1/2"/>
          </div>
          <Button className="cursor-pointer w-full">
            <Plus className="mr-2"/> Calcular
          </Button>
        </CardContent>
        <Separator />
        <CardFooter>
          <p>AP Tecnologia & Investimentos</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home;
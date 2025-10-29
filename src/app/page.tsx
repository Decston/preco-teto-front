import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader>
          <CardTitle>Calcular Preço Teto de Ações</CardTitle>
          <CardDescription>Calculadora de Preço Teto de Ações</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex gap-2">
          <Input placeholder="preço atual" />
          <Button>Calcular</Button>
        </CardContent>
        <Separator />
        <CardFooter>
          <p>A. Patrício Investimentos</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home;
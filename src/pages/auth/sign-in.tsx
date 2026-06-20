import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export function SignIn () {
    return (
        <div>
            <Helmet title="Login" />
            <div className="p-8">
                <div className="w-[350px] flex flex-col justify-center gap-6 ">
                    <div className="flex flex-col gap-2 text-center"></div>
                    <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
                    <p className="text-sm  text-muted-foreground">Acompanhe suas vendas pelo Painel</p>

                    <form action="" className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu E-mail</Label>
                            <Input id="email" type="email"></Input>
                        </div>

                        <Button className="w-full" type="submit">Acessar Painel</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
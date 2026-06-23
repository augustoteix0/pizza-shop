import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  restaurantName: z.string(),  
  managerName: z.string(),
  phone: z.string(),
  email: z.email(),


});

type SignUpFormType = z.infer<typeof signUpForm>;

export function SignUp() {

    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>();

  async function handleSignUp(data: SignUpFormType) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

       toast.success("Restaurante cadastrado com sucesso!", {
          action: {
               label: "Login",
               onClick: () => navigate("/sign-in"),
           }
       })
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }

  return (
    <div>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant={"outline"} asChild className="absolute top-8 right-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center"></div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar Conta Grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e comece suas vendas!
          </p>

          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Restaurante</Label>
              <Input id="restaurantName" type="text" {...register("restaurantName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input id="managerName" type="text" {...register("managerName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu Telefone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com nossos termos de serviço e e politicas de privacidade.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

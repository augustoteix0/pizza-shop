import { ForkKnifeIcon } from "@phosphor-icons/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (dia)
        </CardTitle>
        <ForkKnifeIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>

        <p className="text-muted-foreground text-xs">
          <span className="text-red-500 dark:text-red-400">-4%</span> em a ontem
        </p>
      </CardContent>
    </Card>
  );
}

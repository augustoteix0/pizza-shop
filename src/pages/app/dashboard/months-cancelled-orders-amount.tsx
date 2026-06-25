import { CurrencyDollarIcon } from "@phosphor-icons/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export function MonthCancelledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamento (mes)
        </CardTitle>
        <CurrencyDollarIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>

        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">-3%</span> em a ontem
        </p>
      </CardContent>
    </Card>
  );
}

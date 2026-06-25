import { ArrowRightIcon, FileSearchIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "../../../components/ui/button";
import { TableCell, TableRow } from "../../../components/ui/table";
import { Dialog } from "../../../components/ui/dialog";
import { DialogTrigger } from "../../../components/ui/dialog";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <FileSearchIcon className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="text-xs font-medium">1</TableCell>
      <TableCell className="text-muted-foreground">há 20 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="text-muted-foreground font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Augusto Teixeira</TableCell>
      <TableCell className="font-medium">R$ 149.98</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRightIcon className="h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <XIcon className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}

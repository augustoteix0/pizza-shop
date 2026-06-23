import { BuildingIcon, LogIcon, TagChevronIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AccountMenu() {
    return ( 
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 select-none">
                Pizza Shop
                <TagChevronIcon className="w-4 h-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 rounded-lg">
            <DropdownMenuLabel className="flex flex-col ">
                <span className="text-white font-bold text-sm">Augusto Teixeira</span>
                <span className="text-xs font-normal text-muted-foreground">teixeira@gmail.com</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <BuildingIcon className="w-4 h-4 mr-2"/>
                <span>Perfil da Loja</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                <LogIcon className="w-4 h-4 mr-2"/>
                <span>Sair</span>
            </DropdownMenuItem>
        </DropdownMenuContent>

    </DropdownMenu>
    )
}
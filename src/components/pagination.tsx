import { ArrowFatLeftIcon, ArrowFatRightIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "./ui/button"

export interface PaginationProps  {
    pageIndex: number
    totalCount: number
    perPage: number
}

export function Pagination({pageIndex, totalCount, perPage}: PaginationProps){
    const page =  Math.ceil(totalCount / perPage) || 1  
    return (
        <div className="flex items-center  justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <div className="flex text-sm font-medium">Pagina {pageIndex + 1} de {page} </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ArrowFatLeftIcon className="h-4 w-4"/>
                        <span className="sr-only">Primeira Página</span>
                    </Button>
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ArrowLeftIcon className="h-4 w-4"/>
                        <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ArrowRightIcon className="h-4 w-4"/>
                        <span className="sr-only">Proxima página</span>
                    </Button>
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ArrowFatRightIcon className="h-4 w-4"/>
                        <span className="sr-only">Última Página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
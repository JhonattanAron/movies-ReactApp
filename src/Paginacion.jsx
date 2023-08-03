import React from "react";
import { Pagination } from "@mui/material";
export default function Paginacion(props) {
    return (
        <div>
            <Pagination count={props.pagina}  color="primary" />
        </div>
    )
}
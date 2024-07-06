import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
 
 
 
export interface ApiDataRow extends GridRowsProp {
userId:number,
Id:number,
title:string,
body:string
}


"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Button } from "@/components/ui/button";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID Transacción", width: 130 },
  { field: "dateHour", headerName: "Fecha/Hora", width: 130 },
  { field: "device", headerName: "Dispositivo", width: 130 },
  {
    field: "card",
    headerName: "Tarjeta",
    width: 130,
  },
  {
    field: "type",
    headerName: "Tipo",
    width: 130,
  },
  {
    field: "totalAmount",
    headerName: "Monto total",
    width: 130,
  },
  {
    field: "comission",
    headerName: "Comisión",
    width: 130,
  },
  {
    field: "totalToPay",
    headerName: "Neto pagar",
    width: 130,
  },
  {
    field: "details",
    headerName: "Detalles",
    width: 130,
  },
  {
    field: "msi",
    headerName: "MSI",
    width: 130,
  },
  {
    field: "cc",
    headerName: "CC",
    width: 130,
  },
  {
    field: "refund",
    headerName: "Devolución",
    width: 130,
  },
];

const rows = [
  {
    id: 101,
    dateHour: "2023-12-15 08:20",
    device: "iPhone 13",
    card: "Visa **** 2345",
    type: "Compra en línea",
    totalAmount: "250.00",
    comission: "7.50",
    totalToPay: "242.50",
    details: "Electrónicos",
    msi: "12",
    cc: "USD",
    refund: "No",
  },
  {
    id: 102,
    dateHour: "2023-12-14 13:45",
    device: "Samsung Galaxy S21",
    card: "MasterCard **** 6789",
    type: "Retiro ATM",
    totalAmount: "100.00",
    comission: "2.00",
    totalToPay: "98.00",
    details: "Retiro de efectivo",
    msi: "No aplica",
    cc: "EUR",
    refund: "No",
  },
  {
    id: 103,
    dateHour: "2023-12-14 17:30",
    device: "Huawei P30",
    card: "Amex **** 9876",
    type: "Pago de servicios",
    totalAmount: "60.00",
    comission: "1.80",
    totalToPay: "58.20",
    details: "Pago de internet",
    msi: "3",
    cc: "MXN",
    refund: "No",
  },
  {
    id: 104,
    dateHour: "2023-12-13 11:00",
    device: "iPad Pro",
    card: "Visa **** 1234",
    type: "Compra en tienda",
    totalAmount: "80.00",
    comission: "2.40",
    totalToPay: "77.60",
    details: "Ropa y accesorios",
    msi: "6",
    cc: "CAD",
    refund: "Sí",
  },
  {
    id: 105,
    dateHour: "2023-12-13 19:20",
    device: "Google Pixel 5",
    card: "MasterCard **** 5432",
    type: "Transferencia",
    totalAmount: "150.00",
    comission: "4.50",
    totalToPay: "145.50",
    details: "Transferencia a terceros",
    msi: "No aplica",
    cc: "GBP",
    refund: "No",
  },
];

export default function DataTable() {
  const onClickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div className="mt-8 flex flex-col mx-auto px-8">
      <h1 className="text-3xl font-bold text-center my-4">
        Historial de transacciones
      </h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <div className="flex justify-end my-4">
        <Button onClick={onClickHandler}>Descargar Excel</Button>
      </div>
    </div>
  );
}

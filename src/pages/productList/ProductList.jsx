import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const data123 = {
    name: " LED 2 ",
    address: "1111",
    department_id: 1,
    device_code: "ABC123",
    size: "10x20"
  }
  const data12 = JSON.stringify(data123);


  useEffect(() => {
    axios
        .post('http://localhost:3000/api/led-panels', data12, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          // console.log(response.data.isAdmin);
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
  },[])


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // console.log('111111')

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

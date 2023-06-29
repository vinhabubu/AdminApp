import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { dataUser, userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {
  const [data, setData] = useState([]);
  const user = localStorage.getItem("dataUser");
  // console.log(typeof user)
  const dataUser = JSON.parse(user);

  const config = {
    headers: { Authorization: `Bearer ${dataUser.token}` }
};
 

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const stateUser = {
    username: 'vinh',
  };

  useEffect(() => {
    axios.get('https://datn-web-led-mn.vercel.app/api/users', config)
  .then((response) => {
    console.log(response.data);
    setData(response.data);
   
  })
  .catch((error) => {
    console.error(error);
  });;

  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        // console.log(params)
        return (
          <>
            <Link state={params.row.id} to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
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

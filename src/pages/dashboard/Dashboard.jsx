import {
  Tabs,
  Button,
  Form,
  Input,
  Table,
  Typography,
  Popconfirm,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
// import { INITIAL_TABLE_DATA } from "./constants";

//   import Error from "../../components/error/error";
import Gap from "../../components/gap/gap";
import { useQuery } from "@apollo/client";
import { GET_OFFLINE_CLASS } from "../OfflineClass/query";
import { GET_PROFILE } from "../loginPage/query/profile-query"
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const FormComponentExp = () => {
  const { Title } = Typography;

  const { data: dataProfile, loading: isLoadingDataProfile } =
    useQuery(GET_PROFILE);


  const { data: dataOfflineClass, loading: isLoadingDataOC } =
  useQuery(GET_OFFLINE_CLASS);


  const [dataUser = dataProfile?.profile, setDataUser] = useState();
  const [dataOC = dataOfflineClass?.offline_class, setDataOC] = useState();

  // const [data, setData] = useState(INITIAL_TABLE_DATA);
  const DATA_OC_COLUMN_OPT = [
    {
      title: "Nama",
      dataIndex: "nama",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
    },
    {
      title: "Nomor HP",
      dataIndex: "no_hp",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        dataOC.length >= 1 ? (
          <Space>
            {/* <a onClick={() => handleEdit(record)}>Edit</a> */}
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => deleteDataOC(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const DATA_PROFILE_COLUMN_OPT = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        dataOC.length >= 1 ? (
          <Space>
            {/* <a onClick={() => handleEdit(record)}>Edit</a> */}
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => deleteDataUser(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const TabItem = [
    {
      key: '1',
      label: `User List`,
      children: <Table columns={DATA_PROFILE_COLUMN_OPT} dataSource={dataUser} loading={isLoadingDataProfile} rowKey={"username"} />,
      style: { backgroudnColor : 'orange'}
    },
    {
      key: '2',
      label: `Offline Class List`,
      children: <Table columns={DATA_OC_COLUMN_OPT} dataSource={dataOC} loading={isLoadingDataOC} rowKey={"id"} />,
    }
  ];

  const deleteDataOC = (key) => {
    const newData = dataOC.filter((item) => item.key !== key);
    setDataOC(newData);
  };

  const deleteDataUser = (key) => {
    const newData = dataUser.filter((item) => item.key !== key);
    setDataUser(newData)
  }

  useEffect(() => {}, []);

  return (
    <>
      {/* {isProductLoading ? (
        <LoadingComponent />
      ) : (
        <> */}
          <Title>Daftar Siswa & User</Title>

          <Gap height={30} />

          {/* Table */}
          {/* {data?.map((item) => ( */}
           <Tabs defaultActiveKey="1" items={TabItem} />;
          {/* ))} */}
        {/* </> */}
       {/* )} */}
    </>
  );
};

export default FormComponentExp;

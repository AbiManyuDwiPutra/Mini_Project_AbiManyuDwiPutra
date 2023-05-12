import { gql } from '@apollo/client';

export const GET_OFFLINE_CLASS = gql`
  query offline_class{
    offline_class {
        alamat
        id
        nama
        no_hp
    }
  }
`;

export const ADD_OFFLINE_CLASS = gql`
mutation InsertOfflineClass($nama: String, $alamat: String, $no_hp: String) {
    insert_offline_class(objects: {nama: $nama, alamat: $alamat, no_hp: $no_hp}) {
      affected_rows
      returning {
        id
        nama
        alamat
        no_hp
      }
    }
  }
`;
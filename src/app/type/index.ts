import { ReactElement } from "react";

export interface userType {
  token: string;
  _id: string;
  username: string;
  password: string;
  email: string;
  fullname?: string;
  tanggal_lahir?: string;
  nomor?: string;
  gender?: any;
  alamat?: string;
}

export interface ourServicesType {
  image: string;
  title: string;
  deskripsi: string;
}

export interface bestPropertyType {
  image: string;
  title: string;
  deskripsi: string;
  lokasi: string;
  toilet: string;
  kamar: string;
}

export interface itemsType {
  _id: string;
  image: string;
  harga: string;
  hargabulan: string;
  hargatahun: string;
  deskripsi: string;
  lokasi: string;
  kamar: string;
  toilet: string;
  map: string;
  fotofrofil: string;
  username: string;
  nomorhp: string;
}

export interface bestReviewType {
  image: string;
  title: string;
  date: string;
  gambar: string;
  deskripsi: string;
}

export interface ModalProps {
  title: string;
  icon: "success" | "error" | "warning" | "info" | "question";
  deskripsi: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  onClose?: () => void;
}

export interface PropertyType {
  Icon: any;
  title: string;
  index: string;
}

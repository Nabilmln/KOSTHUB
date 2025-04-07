export interface userType {
  username: string;
  password: string;
  nama: string;
  email: string;
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
  image: string;
  harga: string;
  hargabulan: string;
  hargatahun: string;
  deskripsi: string;
  lokasi: string;
  kamar: string;
  toilet: string;
  map: string;
  wifi: string;
  fotofrofil: string;
  username: string;
  nomorhp: string;
}

export interface successModalProps {
  title: string;
  icon: "success" | "error" | "warning" | "info" | "question";
  deskripsi: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  onClose?: () => void;
}

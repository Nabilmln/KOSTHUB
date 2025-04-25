export interface userType {
  token: string;
  user: {
    _id: string;
    username: string;
    email: string;
    fullname?: string;
    tanggal_lahir?: string;
    nomor?: string;
    gender?: any;
    alamat?: string;
    bio?: string;
  };
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
  id_kos: number;
  nama_kos: string;
  alamat: string;
  fasilitas: string[];
  harga_perbulan: number;
  harga_pertahun: number;
  kontak: {
    email: string;
    nomor: string;
  };
  ulasan: {
    nama: string;
    bintang: number;
    komentar: string;
  }[];
  image: {
    url: string;
    isThumbnail: boolean;
  }[];
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
  title: string;
  // index: number;
}

export interface ReviewType {
  // _id: string;
  nama: string;
  komentar: string;
}

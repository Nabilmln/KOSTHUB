export interface userType {
  token: string;
  user: {
    fotoProfile: any;
    _id: string;
    username: string;
    email: string;
    fullname?: string;
    tanggal_lahir?: string;
    nomor?: string;
    gender?: any;
    alamat?: string;
    bio?: string;
    savedKos?: string[];
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
  fasilitas: [
    {
      nama: string;
      jumlah: string;
    }
  ];
  harga_perbulan: number;
  harga_pertahun: number;
  kontak: {
    email: string;
    nomor: string;
  };
  avgBintang: number;
  ulasan: {
    nama: string;
    bintang: number;
    komentar: string;
  }[];
  image: {
    thumbnail: any;
    gallery: any[];
  };
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

export interface ReviewType {
  nama: string;
  komentar: string;
  bintang: any;
}

export interface bestReviewType {
  image: string;
  title: string;
  date: string;
  gambar: string;
  deskripsi: string;
}

export interface appFooterType {
  footerLeft: {
    image: any;
    title: string;
    desc: string;
  };

  footerRight: {
    title: string;
    href: string;
  }[];
}

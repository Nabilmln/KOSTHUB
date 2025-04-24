"use client";
import { useHook } from "../component/hooks/Kontex";
import { itemsType } from "../type";
import API from "../util/API";

export const getGenderString = (gender: boolean | undefined) => {
  return gender === true ? "Laki" : "Perempuan";
};

// export const FetchItems = () => {
//   const { setItems } = useHook();
//   API.get("/api/kos/", {})
//     .then((ress) => {
//       const data: itemsType = {
//         id_kos: ress.data._id,
//         nama_kos: ress.data.nama.kost,
//         alamat: ress.data.alamat,
//         fasilitas: [ress.data.fasilitas],
//         harga_perbulan: ress.data.harga_perbulan,
//         harga_pertahun: ress.data.harga_pertahun,
//         kontak: {
//           email: ress.data.email,
//           nomor: ress.data.nomor,
//         },
//         ulasan: [
//           {
//             nama: ress.data.nama,
//             bintang: ress.data.bintang,
//             komentar: ress.data.komentar,
//           },
//         ],
//         deskripsi: ress.data.deskripsi,
//       };
//       setItems(data);
//     })

//     .catch((err) => {
//       console.log("Gagal Melakukan Fecth", err);
//     });
// };

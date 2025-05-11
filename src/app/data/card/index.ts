import { ourServicesType, bestPropertyType, bestReviewType } from "@/app/type";
import HomeSecure from "../../../../public/asset/Home Secure.png";
import Secure from "../../../../public/asset//Secured.png";
import MoneyDolar from "../../../../public/asset/Money Dollar.png";
import TimeTwenty from "../../../../public/asset/Time Twenty Four.png";
import Kost1 from "../../../../public/asset/kost1.png";
import kost3 from "../../../../public/asset/kost3.png";
import account from "../../../../public/asset/account.png";

export const ourServicesData: ourServicesType[] = [
  {
    image: HomeSecure.src,
    title: "Easy & Secure Booking",
    deskripsi:
      "Pesan kamar kos dengan mudah dan aman hanya dalam beberapa klik.",
  },

  {
    image: Secure.src,
    title: "Verified listings",
    deskripsi:
      "Semua kos yang terdaftar telah diverifikasi untuk memastikan kenyamanan dan keamanan Anda.",
  },

  {
    image: MoneyDolar.src,
    title: "Affordable & Flexible Options",
    deskripsi:
      "Tersedia berbagai pilihan kos dengan harga terjangkau dan fleksibilitas pembayaran.",
  },

  {
    image: TimeTwenty.src,
    title: "24/7 Customer Support",
    deskripsi:
      "Tim kami siap membantu kapan saja untuk memastikan pengalaman menyewa yang bebas hambatan.",
  },
];

export const bestProperyData: bestPropertyType[] = [
  {
    image: Kost1.src,
    title: "Kost 1",
    deskripsi: "lorem aja dulu dek ya",
    lokasi: "Lampineng",
    toilet: "1",
    kamar: "1",
  },
  {
    image: Kost1.src,
    title: "Kost 2",
    deskripsi: "lorem aja dulu dek ya",
    lokasi: "Lampineng",
    toilet: "1",
    kamar: "1",
  },
  {
    image: Kost1.src,
    title: "Kost 3",
    deskripsi: "lorem aja dulu dek ya",
    lokasi: "Lampineng",
    toilet: "1",
    kamar: "1",
  },
  {
    image: Kost1.src,
    title: "Kost 4",
    deskripsi: "lorem aja dulu dek ya",
    lokasi: "Lampineng",
    toilet: "1",
    kamar: "1",
  },
];

export const bestReviewData: bestReviewType[] = [
  {
    image: account.src,
    title: "Aji Gunawan",
    date: "21 Januari 2025",
    gambar: kost3.src,
    deskripsi:
      "Lingkungan ternyaman selama ngekos. Tetangganya super ramah dan suka menolong. Kamarnya juga luas, betah banget di kos ini",
  },
  {
    image: account.src,
    title: "Aji Gunawan",
    date: "21 Januari 2025",
    gambar: kost3.src,
    deskripsi:
      "Lingkungan ternyaman selama ngekos. Tetangganya super ramah dan suka menolong. Kamarnya juga luas, betah banget di kos ini",
  },
  {
    image: account.src,
    title: "Aji Gunawan",
    date: "21 Januari 2025",
    gambar: kost3.src,
    deskripsi:
      "Lingkungan ternyaman selama ngekos. Tetangganya super ramah dan suka menolong. Kamarnya juga luas, betah banget di kos ini",
  },
  {
    image: account.src,
    title: "Aji Gunawan",
    date: "21 Januari 2025",
    gambar: kost3.src,
    deskripsi:
      "Lingkungan ternyaman selama ngekos. Tetangganya super ramah dan suka menolong. Kamarnya juga luas, betah banget di kos ini",
  },
];

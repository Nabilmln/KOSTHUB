import icon from "../../../../public/asset/icon.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
const FooterLanding: React.FC = () => {
  return (
    <div className="w-full h-[50vh] bg-sky-800 gap-3 " title="Footer">
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <div className="flex flex-col pt-[10vh] pl-[5vw]">
          <div className="flex items-center gap-[1rem]">
            <Image src={icon} alt="icon" className="w-10 h-[5vh]"></Image>
            <h1 className="font-bold text-white text-[3rem]">KostHub</h1>
          </div>
          <h1 className="font-light text-white">
            KOSTHUB adalah platform digital yang mempermudah pemilik kos dalam
            mengelola properti, penyewa, serta pembayaran sewa kos secara
            otomatis. Sistem ini juga membantu pencari kos menemukan tempat
            tinggal dengan fitur pencarian berbasis lokasi, harga, dan
            fasilitas.
          </h1>
        </div>
        <div className="flex flex-col pt-[17vh]">
          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
              Perusahaan
            </h1>
          </Link>
          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh] ">
              About Us
            </h1>
          </Link>

          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh] ">
              {" "}
              Produk & Layanan
            </h1>
          </Link>
          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh] ">
              Partner
            </h1>
          </Link>
        </div>
        <div className="flex flex-col pt-[17vh]">
          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
              Dukungan
            </h1>
          </Link>

          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
              Kebijakan Privasi
            </h1>
          </Link>

          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
              Syarat Penggunaan
            </h1>
          </Link>
          <Link href="#">
            <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
              Syarat Penggunaan Agen
            </h1>
          </Link>
        </div>
        <div className="flex flex-col pt-[17vh]">
          <h1 className="duration-[1s] text-white pb-[3vh]">Hubungi Kami</h1>
          <Link href="#">
            <div className="flex gap-2">
              <Mail className="text-white" />
              <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
                kosthub@gmail.com
              </h1>
            </div>
          </Link>
          <Link href="#">
            <div className="flex gap-2">
              <Phone className="text-white" />
              <h1 className="hover:underline duration-[1s] text-white pb-[3vh]">
                +62 11 34455666
              </h1>
            </div>
          </Link>

          <Link href="#">
            <div className="flex gap-2">
              <h1 className="hover:underline duration-[1s] text-white">
                Creator
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLanding;

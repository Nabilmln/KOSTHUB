// "use client";
// import { itemsType } from "@/app/type";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useHook } from "@/app/component/hooks/Kontex";

// const Reserve = () => {
//     const [reservaseId, setReservaseId] = useState<string>("");
//     const [reservaseData, setResercaseData] = useState<itemsType | null>(null);
//     const { currentUser } = useHook();
//     const pathname = usePathname();

//     useEffect(() => {
//       const parthReservase = pathname.split("/");
//       const id = parthReservase[parthReservase.length - 1];
//       setReservaseId(id);
//     }, [pathname, reservaseId]);

//   return (
//     <div>
//       <p>test</p>
//     </div>
//   );
// };
// export default Reserve;

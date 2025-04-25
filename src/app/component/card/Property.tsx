import { PropertyType } from "@/app/type";

const Property: React.FC<PropertyType> = ({ title }) => {
  return (
    <div className="flex-col bg-white p-1 rounded-md shadow-lg border-1">
      <div className="flex gap-x-2">
        {/* Nannti Kasi untuk jumlahnya */}
        <p className="font-semibold">{}</p>
      </div>
      <div className="">
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
};
export default Property;

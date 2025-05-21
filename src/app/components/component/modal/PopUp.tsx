import { popUP } from "../../type/components";

const PopUp: React.FC<popUP> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(67,67,67,0.5)] z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-[#3572EF] text-white px-4 py-2 rounded"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default PopUp;

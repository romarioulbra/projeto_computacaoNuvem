import { FaBars, FaTimes, FaUser } from "react-icons/fa";
export default function ProfileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-64 p-4 shadow-lg">
        <button onClick={onClose} className="flex justify-end w-full">
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col items-center mt-4">
          <FaUser size={48} className="text-gray-500" />
          <p className="mt-2 font-semibold">Olá, Usuário!</p>
          {/* <Button className="mt-4 w-full">Gerenciar Conta</Button> */}
        </div>
      </div>
    </div>
  );
}
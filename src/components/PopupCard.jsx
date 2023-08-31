import React from 'react';

const PopupCard = ({ onClose, popupData }) => {
  return (
    <div className="relative">
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <h2 className="text-lg font-semibold mb-4">{popupData.name}</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Room Number</th>
                <th className="px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {popupData.rooms.map((room, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{room.roomNo}</td>
                  <td className="px-4 py-2">{room.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
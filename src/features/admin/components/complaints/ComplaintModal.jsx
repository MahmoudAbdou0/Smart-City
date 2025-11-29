import React from 'react';
import { X } from 'lucide-react';
import StatusSelect from './StatusSelect';

const ComplaintModal = ({ isOpen, complaint, onClose, onUpdateStatus }) => {
    if (!isOpen || !complaint) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-5xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-4">
                    <ModalHeader title={complaint.title} onClose={onClose} />
                    <ModalContent complaint={complaint} onUpdateStatus={onUpdateStatus} />
                    <ModalActions onClose={onClose} onResolve={() => onUpdateStatus(complaint.id, "Resolved")} />
                </div>
            </div>
        </div>
    );
};

const ModalHeader = ({ title, onClose }) => (
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <button onClick={onClose}>
            <X className="smooth-transition hover:scale-110 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer" />
        </button>
    </div>
);

const ModalContent = ({ complaint, onUpdateStatus }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <DescriptionSection description={complaint.description} />
            <LocationSection location={complaint.location} />
            <DetailsSection complaint={complaint} onUpdateStatus={onUpdateStatus} />
        </div>
        <ImageSection imageUrl={complaint.imageUrl} title={complaint.title} />
    </div>
);

const DescriptionSection = ({ description }) => (
    <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Description:</h4>
        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{description}</p>
    </div>
);

const LocationSection = ({ location }) => (
    <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Location:</h4>
        <p className="text-gray-600">{location}</p>
    </div>
);

const DetailsSection = ({ complaint, onUpdateStatus }) => (
    <div className="grid grid-cols-2 gap-4">
        <div>
            <h4 className="font-semibold text-gray-700 mb-2">Status:</h4>
            <StatusSelect complaint={complaint} onUpdateStatus={onUpdateStatus} />
        </div>
        <div>
            <h4 className="font-semibold text-gray-700 mb-2">Citizen ID:</h4>
            <p className="text-gray-600">{complaint.citizenId}</p>
        </div>
        <div className="col-span-2">
            <h4 className="font-semibold text-gray-700 mb-2">Date Submitted:</h4>
            <p className="text-gray-600">{complaint.date || "Date not available"}</p>
        </div>
    </div>
);

const ImageSection = ({ imageUrl, title }) => (
    <div>
        <h4 className="font-semibold text-gray-700 mb-2">Image:</h4>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        </div>
    </div>
);

const ModalActions = ({ onClose, onResolve }) => (
    <div className="mt-6 flex justify-end space-x-3">
        <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-gray-700 hover:bg-light transition-colors"
        >
            Close
        </button>
        <button
            onClick={onResolve}
            className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
            Mark as Resolved
        </button>
    </div>
);

export default ComplaintModal;
import React from 'react';
import { Eye, Trash } from 'lucide-react';
import StatusSelect from './StatusSelect';

const ComplaintsTable = ({ complaints, onViewDetails, onDeleteComplaint, onUpdateStatus }) => {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full">
                <thead className="bg-primary-dark/20">
                    <tr className='border-b border-primary/50'>
                        <th className="px-6 py-4 text-sm font-semibold">Title</th>
                        <th className="px-6 py-4 text-sm font-semibold">Location</th>
                        <th className="px-6 py-4 text-sm font-semibold">Status</th>
                        <th className="px-6 py-4 text-sm font-semibold">Date</th>
                        <th className="px-6 py-4 text-sm font-semibold text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-dark-light/10">
                    {complaints.map((complaint) => (
                        <ComplaintRow
                            key={complaint.id}
                            complaint={complaint}
                            onViewDetails={onViewDetails}
                            onDeleteComplaint={onDeleteComplaint}
                            onUpdateStatus={onUpdateStatus}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ComplaintRow = ({ complaint, onViewDetails, onDeleteComplaint, onUpdateStatus }) => (
    <tr className="hover:bg-primary/5 transition-all duration-200 group">
        <td className="px-6 py-6">
            <div className="flex flex-col">
                <div className="text-sm font-semibold group-hover:text-primary-dark transition-colors">
                    {complaint.title}
                </div>
                <div className="text-xs text-dark/70 truncate max-w-xs mt-1">
                    {complaint.description}
                </div>
            </div>
        </td>
        <td className="px-6 py-6">
            <div className="text-sm text-dark/80 text-center bg-light rounded-lg px-3 py-2 border border-dark-light/10 min-w-[150px]">
                {complaint.location}
            </div>
        </td>
        <td className="px-6 py-6">
            <StatusSelect
                complaint={complaint}
                onUpdateStatus={onUpdateStatus}
            />
        </td>
        <td className="px-6 py-6">
            <div className="text-sm text-dark/70 min-w-[100px] bg-light/50 rounded-lg px-3 py-2 text-center border border-dark-light/10">
                {complaint.date || "—"}
            </div>
        </td>
        <td className="px-6 py-6">
            <div className="flex justify-center space-x-2">
                <button
                    onClick={() => onViewDetails(complaint)}
                    className="flex gap-2 items-center cursor-pointer space-x-1 px-3 py-2 text-xs font-medium text-primary bg-light rounded-lg hover:bg-primary hover:text-white transition-all duration-200 border border-primary/20 hover:border-primary"
                >
                    <Eye className="w-4 h-4" />
                    View
                </button>
                <button
                    onClick={() => onDeleteComplaint(complaint.id)}
                    className="flex gap-2 items-center cursor-pointer space-x-1 px-3 py-2 text-xs font-medium text-accent bg-accent/20 rounded-lg hover:bg-accent hover:text-white transition-all duration-200 border border-accent/20 hover:border-accent"
                >
                    <Trash className="w-4 h-4" />
                    Delete
                </button>
            </div>
        </td>
    </tr>
);

export default ComplaintsTable;
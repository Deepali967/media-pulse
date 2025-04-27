export default function DeliverablesTab() {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Deliverable Type</label>
            <select className="w-full border rounded-md p-2">
              <option>Select deliverable</option>
              <option>Post</option>
              <option>Story</option>
              <option>Video</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input type="number" placeholder="Number of deliverables" className="w-full border rounded-md p-2" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Notes for Creators</label>
          <textarea placeholder="Additional instructions" className="w-full border rounded-md p-2 h-28" />
        </div>
  
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Add Deliverable
        </button>
      </div>
    );
  }
  
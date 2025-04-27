export default function BasicInfoTab() {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Name</label>
            <input type="text" placeholder="Enter campaign name" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Objective</label>
            <input type="text" placeholder="Enter objective" className="w-full border rounded-md p-2" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea placeholder="Describe the campaign" className="w-full border rounded-md p-2 h-28" />
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>
        </div>
      </div>
    );
  }
  
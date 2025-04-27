import { useState } from "react";
import DeliverablesTab from "./deliverable";
import BasicInfoTab from "./basic-info";

export default function CampaignScreen() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="p-6">
      <div className="flex space-x-4 border-b mb-6">
        <button
          className={`pb-2 ${activeTab === "basic" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("basic")}
        >
          Basic Info
        </button>
        <button
          className={`pb-2 ${activeTab === "deliverables" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("deliverables")}
        >
          Deliverables
        </button>
      </div>

      {activeTab === "basic" && <BasicInfoTab />}
      {activeTab === "deliverables" && <DeliverablesTab />}
    </div>
  );
}

import React, { useState } from 'react'
import { useSideBar } from '../../pages/constext/ProfileSideBarContext';

function UpiIDs() {
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
  const [showUPIForm, setShowUPIForm] = useState(false);
  const isValidUPI = (upi) => /^[\w.-]+@[\w]+$/.test(upi);
  const upiData = {
    primary: "ameer@upi",

    ids: [
      {
        id: 1,
        upi: "ameer@upi",
        app: "Google Pay",
        default: true,
      },
      {
        id: 2,
        upi: "ameer123@okaxis",
        app: "PhonePe",
        default: false,
      },
    ],
  };
  return (
    <>
      <div className="space-y-5">

        {/* Header */}
        <div className="flex justify-between items-center p-4  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)]">
          <h3 className="text-xl font-semibold">UPI IDs</h3>
          {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
          {!sideBarAble && <button
            onClick={() => setShowUPIForm(true)}
            className="text-blue-600 text-sm cursor-pointer border rounded px-4 py-1 bg-blue-50"
          >
            + Add UPI
          </button>}
        </div>

        {/* List */}
        <div className={`p-4 ${sideBarAble ? 'pt-0' :''}`}>
          <div className="space-y-3">
            {sideBarAble &&
              <div className='text-end'>
                <button
                  onClick={() => setShowUPIForm(true)}
                  className="text-blue-600 text-sm mb-2 me-1 cursor-pointer border rounded px-4 py-1 bg-blue-50"
                >
                  + Add UPI
                </button>
              </div>
            }
            {upiData.ids.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 bg-white rounded-lg p-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-normal">{item.upi}</p>
                  <p className="text-xs text-gray-500">{item.app}</p>
                </div>

                <div className="text-right text-xs space-y-1">
                  {item.default && (
                    <p className="text-green-600">Default</p>
                  )}

                  <div className='flex gap-2'>
                    {!item.default && <button className="text-blue-600 cursor-pointer hover:underline">Set Default</button>}
                    <button className="text-red-500 cursor-pointer hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {showUPIForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md w-11/12 md:w-1/2">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-semibold mb-3">Add UPI ID</h4>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g. name@upi)"
                  className="border p-2 rounded"
                />

                <select className="border p-2 rounded">
                  <option>Google Pay</option>
                  <option>PhonePe</option>
                  <option>Paytm</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button className="bg-black text-white px-4 py-2 rounded">
                  Save
                </button>
                <button
                  onClick={() => setShowUPIForm(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


export default UpiIDs
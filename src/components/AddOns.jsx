import React from "react"

const AddOns = ({
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  updateForm,
  planLength,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className=" font-bold text-3xl text-marine-blue">Pick add-ons</h2>
        <p className="text-sm text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <label
          htmlFor=""
          className={`flex justify-between outline outline-1 ${
            isOnlineService
              ? "bg-magnolia-color outline-purplish-blue items-center"
              : "outline-light-blue"
          } rounded-lg px-5 py-3`}
        >
          <div className="flex justify-between ">
            <input
              className="w-4 mr-4"
              type="checkbox"
              name="isOnlineService"
              checked={isOnlineService}
              onChange={(e) =>
                updateForm({ isOnlineService: e.target.checked })
              }
            />
            <div>
              <p className="text-sm text-marine-blue font-medium">
                Online Service
              </p>
              <p className="text-xs text-cool-gray">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-purplish-blue">
            +${!planLength ? "1" : "10"}/{!planLength ? "mo" : "yr"}
          </p>
        </label>
        <label
          htmlFor=""
          className={`flex justify-between outline outline-1 ${
            isLargerStorage
              ? "bg-magnolia-color outline-purplish-blue items-center"
              : "outline-light-blue"
          } rounded-lg px-5 py-3`}
        >
          <div className="flex justify-between ">
            <input
              className="w-4 mr-4"
              type="checkbox"
              name="isLargerStorage"
              checked={isLargerStorage}
              onChange={(e) =>
                updateForm({ isLargerStorage: e.target.checked })
              }
            />
            <div>
              <p className="text-sm text-marine-blue font-medium">
                Larger Storage
              </p>
              <p className="text-xs text-cool-gray">Extra 1TB of cloud save</p>
            </div>
          </div>

          <p className="text-sm font-medium text-purplish-blue">
            +${!planLength ? "2" : "20"}/{!planLength ? "mo" : "yr"}
          </p>
        </label>
        <label
          htmlFor=""
          className={`flex justify-between outline outline-1 ${
            isCustomizableProfile
              ? "bg-magnolia-color outline-purplish-blue items-center"
              : "outline-light-blue"
          } rounded-lg px-5 py-3`}
        >
          <div className="flex justify-between  ">
            <input
              className="w-4 mr-4"
              type="checkbox"
              name="isCustomizableProfile"
              checked={isCustomizableProfile}
              onChange={(e) =>
                updateForm({ isCustomizableProfile: e.target.checked })
              }
            />
            <div>
              <p className="text-sm text-marine-blue font-medium">
                Customizable Profile
              </p>
              <p className="text-xs text-cool-gray">
                Custom theme on your profile
              </p>
            </div>
          </div>

          <p className="text-sm font-medium text-purplish-blue">
            +${!planLength ? "2" : "20"}/{!planLength ? "mo" : "yr"}
          </p>
        </label>
      </div>
    </div>
  )
}

export default AddOns

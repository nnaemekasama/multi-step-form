import React from "react"
import { planOptions } from "../App"

const Summary = ({
  updateForm,
  plan,
  planLength,
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  goToSection,
}) => {
  const totalPlan = !planLength
    ? planOptions[plan].monthly
    : planOptions[plan].yearly

  const addOnTotal = [
    isCustomizableProfile,
    isLargerStorage,
    isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ]
    const planName = !planLength ? "monthly" : "yearly"
    const numToAdd = planOptions[name][planName]
    return acc + numToAdd
  }, 0)

  return (
    <div className="flex flex-col gap-10 max-md:py-6 max-md:w-full">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl text-marine-blue">Finishing up</h2>
        <p className="text-paragraph md:text-sm text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className=" bg-magnolia-color flex flex-col gap-2 py-4 px-6">
        <div className="flex justify-between border-b border-light-gray pb-5">
          <div>
            <p className="font-medium text-sm text-marine-blue">
              {`${plan} (${!planLength ? "Monthly" : "Yearly"})`}
            </p>
            <p
              onClick={() => updateForm({ planLength: !planLength })}
              className="text-sm underline text-cool-gray cursor-pointer"
            >
              Change
            </p>
          </div>
          <p className="font-medium text-sm text-marine-blue">
            {!planLength
              ? `${planOptions[plan].monthly}`
              : `${planOptions[plan].yearly}`}
            /{!planLength ? "mo" : "yr"}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {isOnlineService && (
            <div className="flex justify-between">
              <p className="text-medium  text-pastel-blue text-sm">
                Online service
              </p>
              <p className="text-sm font-thin text-marine-blue">{`+$ ${
                !planLength
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly
              }/${!planLength ? "mo" : "yr"}`}</p>
            </div>
          )}
          {isLargerStorage && (
            <div className="flex justify-between">
              <p className="text-medium  text-pastel-blue text-sm">
                Larger Storage
              </p>
              <p className="text-sm font-thin text-marine-blue">{`+$ ${
                !planLength
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly
              }/${!planLength ? "mo" : "yr"}`}</p>
            </div>
          )}
          {isCustomizableProfile && (
            <div className="flex justify-between">
              <p className="text-medium  text-pastel-blue text-sm">
                Customizable Profile
              </p>
              <p className="text-sm font-thin text-marine-blue">{`+$ ${
                !planLength
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly
              }/${!planLength ? "mo" : "yr"}`}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between px-6  ">
        <p className="text-medium  text-cool-gray text-sm">{`Total (per ${
          !planLength ? "month" : "year"
        })`}</p>
        <p className="text-purplish-blue font-bold text-base">{`+$ ${
          totalPlan + addOnTotal
        }/${!planLength ? "mo" : "yr"}`}</p>
      </div>
    </div>
  )
}

export default Summary

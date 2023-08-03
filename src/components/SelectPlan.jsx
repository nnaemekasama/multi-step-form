import React, { useState } from "react"
import { planOptions } from "../App"
import Arcade from "../assets/images/icon-arcade.svg"
import Advanced from "../assets/images/icon-advanced.svg"
import Pro from "../assets/images/icon-pro.svg"

const SelectPlan = ({ plan, updateForm, planLength }) => {
  // const [planLengths, setPlanLengths] = useState(false)
  // const togglePlanLength = () => {
  //   setPlanLengths(!planLengths)
  // }

  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="font-bold text-3xl text-marine-blue ">Select Plan</h2>
      <p className="text-sm text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-8 flex justify-between">
        <label
          htmlFor="Arcade"
          className={`flex flex-col  rounded-lg p-4 gap-10 justify-between  min-w-[110px] max-w-[140px] ${
            plan === "Arcade"
              ? "bg-magnolia-color outline outline-1 outline-marine-blue"
              : "bg-transparent outline outline-1 outline-light-blue"
          }`}
        >
          <img src={Arcade} alt="Arcade-icon" width={30} />
          <div>
            <p className="text-sm text-marine-blue font-bold">Arcade</p>
            <p className="text-sm text-cool-gray">
              $
              {!planLength
                ? planOptions.Arcade.monthly
                : planOptions.Arcade.yearly}
              / {!planLength ? "mo" : "yr"}
            </p>
            <input
              className="hidden"
              id="Arcade"
              name="plan"
              type="radio"
              checked={plan === "Arcade"}
              onChange={(e) => updateForm({ plan: "Arcade" })}
            />
            {planLength && (
              <p className="text-xs text-marine-blue">2 months free</p>
            )}
          </div>
        </label>
        <label
          htmlFor="Advanced"
          className={`flex flex-col  rounded-lg p-4 gap-10 justify-between  min-w-[110px] max-w-[140px] ${
            plan === "Advanced"
              ? "bg-magnolia-color outline outline-1 outline-marine-blue"
              : "bg-transparent outline outline-1 outline-light-blue"
          }`}
        >
          <img src={Advanced} alt="Advanced-icon" width={30} />
          <div>
            <p className="text-sm text-marine-blue font-bold">Advanced</p>
            <p className="text-sm text-cool-gray">
              $
              {!planLength
                ? planOptions.Advanced.monthly
                : planOptions.Advanced.yearly}
              / {!planLength ? "mo" : "yr"}
            </p>
            <input
              className="hidden"
              id="Advanced"
              name="plan"
              type="radio"
              checked={plan === "Advanced"}
              onChange={(e) => updateForm({ plan: "Advanced" })}
            />
            {planLength && (
              <p className="text-xs text-marine-blue">2 months free</p>
            )}
          </div>
        </label>
        <label
          htmlFor="Pro"
          className={`flex flex-col  rounded-lg p-4 gap-10 justify-between  min-w-[110px] max-w-[140px] ${
            plan === "Pro"
              ? "bg-magnolia-color outline outline-1 outline-marine-blue"
              : "bg-transparent outline outline-1 outline-light-blue"
          }`}
        >
          <img src={Pro} alt="pro-icon" width={30} />
          <div>
            <p className="text-sm text-marine-blue font-bold">Pro</p>
            <p className="text-sm text-cool-gray">
              ${!planLength ? planOptions.Pro.monthly : planOptions.Pro.yearly}/
              {!planLength ? "mo" : "yr"}
            </p>
            <input
              className="hidden"
              id="Pro"
              name="plan"
              type="radio"
              checked={plan === "Pro"}
              onChange={(e) => updateForm({ plan: "Pro" })}
            />
            {planLength && (
              <p className="text-xs text-marine-blue">2 months free</p>
            )}
          </div>
        </label>
      </div>
      <div className="mt-6  flex justify-center  bg-magnolia-color p-3 rounded-lg">
        <label
          htmlFor=""
          className={`flex items-center gap-6 cursor-pointer `}
          onClick={() => updateForm({ planLength: !planLength })}
        >
          <span
            className={`text-sm font-medium ${
              !planLength ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Monthly
          </span>
          <span
            className={`bg-marine-blue flex items-center w-10 h-5 rounded-xl px-1 ${
              planLength ? "justify-end" : "justify-start"
            }`}
          >
            <div className="bg-white-color rounded-full w-3 h-3 "></div>
          </span>

          <span
            className={`text-sm font-medium ${
              planLength ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Yearly
          </span>
        </label>
      </div>
    </div>
  )
}

export default SelectPlan

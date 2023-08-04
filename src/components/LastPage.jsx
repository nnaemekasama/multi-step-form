import React from "react"
import Thanks from "../assets/images/icon-thank-you.svg"

export function LastPage({}) {
  return (
    <div className="  max-md:py-20 flex flex-col justify-center items-center gap-5">
      <img src={Thanks} alt="Thank-You_icon" width={70} />
      <div className="text-center flex flex-col gap-3">
        <p className="text-marine-blue text-3xl font-bold">Thank you!</p>
        <p className="text-cool-gray text-sm font-medium">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at mannynnodim@gmail.com
        </p>
      </div>
    </div>
  )
}

import { LastPage } from "./components/LastPage"
import { useEffect, useState } from "react"
import UseFormLogic from "./hooks/UseFormLogic"
import PersonalInfo from "./components/PersonalInfo"
import SelectPlan from "./components/SelectPlan"
import AddOns from "./components/AddOns"
import Summary from "./components/Summary"

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
}

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"]

function App() {
  const [formData, setFormData] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateForm = (fieldToUpdate) =>
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }))

  const {
    formSteps,
    goToSection,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    currentIndex,
  } = UseFormLogic(sideBar.length)

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate(formData)
    setFormErrors(errors)
    console.log(errors)

    if (Object.keys(errors).length === 0) {
      goForwards()
    }

    console.log(formErrors)

    if (isLastStep) return setSubmitted(true)
  }

  const validate = (values) => {
    const errors = {}
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!values.name) {
      errors.name = "Name is required"
    }
    if (!values.email) {
      errors.email = "email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "this email format is invalid"
    }
    if (!values.phone) {
      errors.phone = "Phone is required"
    }

    return errors
  }

  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen   items-center justify-center bg-light-blue ">
          <div className="max-md:absolute top-[15%]  max-md:z-10 max-md:w-5/6 max-md:min-w-[300px] max-md:max-w-[565px]  md:flex md:flex-row bg-white-color  md:w-2/3 md:min-w-[50rem] md:h-[35rem]  rounded-lg md:p-3">
            <aside className="max-md:bg-mobile max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 max-md:z-[-10] max-md:flex-row max-md:h-[200px] max-md:w-full max-md:justify-center max-md:items-start flex flex-col w-1/3 min-w-[33%] bg-desktop bg-no-repeat bg-center bg-cover md:rounded-lg px-6 py-6">
              {sideBar.map((item, i) => {
                const index = i + 1
                return (
                  <div
                    key={i}
                    className="flex items-center mb-4 text-white-color"
                  >
                    <button
                      onClick={() => goToSection(i)}
                      className={`mr-6 w-10 h-10 rounded-full border border-red-100 ${
                        currentIndex === i
                          ? "bg-light-gray text-marine-blue"
                          : "bg-transparent"
                      }`}
                    >
                      {index}
                    </button>
                    <div className="flex flex-col max-md:hidden">
                      <p className="uppercase font-extralight text-sm text-cool-gray">
                        Step {index}
                      </p>
                      <p className="uppercase font-bold text-paragraph">
                        {item}
                      </p>
                    </div>
                  </div>
                )
              })}
            </aside>
            {isLastStep && submitted ? (
              <div className="max-md:px-8  max-md:bg-white max-md:rounded-lg  md:w-2/3 md:min-w-[66%]  md:px-20 md:py-6 flex md:flex-col md:justify-between">
                <LastPage />
              </div>
            ) : (
              <form className="max-md:px-8  max-md:bg-white max-md:rounded-lg  md:w-2/3 md:min-w-[66%]  md:px-20 md:py-6 flex md:flex-col md:justify-between">
                {currentIndex === 0 && (
                  <PersonalInfo
                    {...formData}
                    updateForm={updateForm}
                    formErrors={formErrors}
                  />
                )}
                {currentIndex === 1 && (
                  <SelectPlan {...formData} updateForm={updateForm} />
                )}
                {currentIndex === 2 && (
                  <AddOns {...formData} updateForm={updateForm} />
                )}
                {currentIndex === 3 && (
                  <Summary
                    {...formData}
                    updateForm={updateForm}
                    goToSection={goToSection}
                  />
                )}

                <div
                  className={`max-md:fixed bottom-0 left-0 right-0 max-md:p-4 max-md:bg-magnolia-color flex ${
                    isFirstStep ? "flex-row-reverse" : "flex"
                  } justify-between mt-20`}
                >
                  {!isFirstStep && (
                    <button
                      className="bg-alabaster-color text-marine-blue text-sm px-6 py-3 rounded-md"
                      type="button"
                      onClick={goBackwards}
                    >
                      Go Back
                    </button>
                  )}
                  {
                    <button
                      className="bg-marine-blue text-white-color text-sm px-6 py-3 rounded-md"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      {isLastStep ? "Confirm" : "Next Step"}
                    </button>
                  }
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

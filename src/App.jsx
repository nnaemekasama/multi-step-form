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
      errors.name = "Username is required"
    }
    if (!values.email) {
      errors.email = "email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format"
    }
    if (!values.phone) {
      errors.phone = "Phone no. is required"
    }

    return errors
  }

  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen  items-center justify-center bg-light-blue ">
          <div className="flex flex-row bg-white-color   w-2/3 min-w-[50rem] h-[35rem]  rounded-lg p-3">
            <aside className="flex flex-col w-1/3 min-w-[33%] bg-mobile bg-no-repeat bg-center bg-cover rounded-lg px-6 py-6">
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
                    <div className="flex flex-col">
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
              <LastPage />
            ) : (
              <form className="w-2/3 min-w-[66%]  px-20 py-6 flex flex-col justify-between">
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
                  className={`flex ${
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

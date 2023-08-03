import { useState } from "react"

// take in array of elements
// handle going forward and backward, Go to step?
// current step
// if current is first or last

const UseFormLogic = (formSteps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goBackwards = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prev) => prev - 1)
  }

  const goForwards = () => {
    if (currentIndex === formSteps - 1) return
    setCurrentIndex((prev) => prev + 1)
  }

  // go to section
  const goToSection = (item) => {
    setCurrentIndex(item)
  }

  return {
    currentIndex,
    goForwards,
    goBackwards,
    goToSection,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 1,
  }
}

export default UseFormLogic

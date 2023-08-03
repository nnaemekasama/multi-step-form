import React from "react"

const PersonalInfo = ({ name, email, phone, updateForm, formErrors }) => {
  return (
    <div className="flex flex-col  gap-2">
      <h2 className="font-bold text-3xl text-marine-blue ">Personal info</h2>
      <p className="text-sm text-cool-gray ">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            required
            onChange={(e) => updateForm({ name: e.target.value })}
            autoFocus
            autoComplete="name"
            placeholder="e.g. Stephen King"
            className="p-2 border-2 border-pastel-blue outline-purplish-blue rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="email">Email Address</label>
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          </div>

          <input
            type="email"
            id="email"
            autoComplete="email"
            name="email"
            value={email}
            required
            onChange={(e) => updateForm({ email: e.target.value })}
            placeholder="e.g. stephenking@lorem.com"
            className="p-2 border-2 border-pastel-blue outline-purplish-blue rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="phone">Phone Number</label>
            <p className="text-red-500 text-sm">{formErrors?.phone}</p>
          </div>

          <input
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            required
            onChange={(e) => updateForm({ phone: e.target.value })}
            className="p-2 border-2 border-pastel-blue  outline-purplish-blue rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo

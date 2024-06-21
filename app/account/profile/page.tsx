import SelectCountry from "./_components/SelectCountry";

import UpdateProfileForm from "./_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  // CHANGE
  const nationality = "Philippines";

  const SelectCountryComponent = (
    <SelectCountry
      name="nationality"
      id="nationality"
      className="px-5 py-3 bg-secondary text-primary w-full shadow-sm rounded-sm"
      defaultCountry={nationality}
    />
  );

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm SelectCountry={SelectCountryComponent} />
    </div>
  );
}

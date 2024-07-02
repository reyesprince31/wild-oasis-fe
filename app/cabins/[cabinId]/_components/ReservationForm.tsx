function ReservationForm({ cabin, user }: any) {
  // CHANGE
  const { maxCapacity } = cabin;

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary text-secondary px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form className="bg-slate-900 py-10 px-16 text-lg flex gap-5 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-slate-200 text-primary w-full shadow-sm rounded-sm"
            required>
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-slate-200 text-primary w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary text-base">Start by selecting dates</p>

          <button className="bg-accent px-8 py-4 text-primary font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-500">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

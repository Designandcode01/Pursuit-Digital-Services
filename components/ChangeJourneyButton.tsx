"use client";

export default function ChangeJourneyButton() {
  const handleReset = () => {
    localStorage.removeItem("pursuit-journey");
    window.location.href = "/contact"; // Send back to gate
  };

  return (
    <button
      onClick={handleReset}
      className="mt-4 px-4 py-2 rounded-lg bg-zinc-500 hover:bg-gray-300 text-sm"
    >
      Change My Journey
    </button>
  );
}

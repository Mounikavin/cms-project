import { useContext, useState } from "react";
import StorageContext from "../../context/StorageContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function AddNewEvent() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [category, setCategory] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [organizer, setOrganizer] = useState("");

  const { addNewItem } = useContext(StorageContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addNewItem({
      title,
      image,
      description,
      venue,
      date,
      startTime,
      endTime,
      category,
      entryFee,
      organizer,
      isFavorite: false,
    });
    Swal.fire({
      title: "Success!",
      text: "New event added successfully.",
      icon: "success",
      confirmButtonText: "OK",
      background: "#f0e6d7",
      color: "#885133",
    });
    navigate("/dashboard/cms/display");
  }

  const inputStyle = {
    backgroundColor: "#f0e6d7",
    border: "1.5px solid #885133",
    borderRadius: "1rem",
    padding: "14px 20px",
    color: "#885133",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "inset 0 2px 6px rgba(136, 81, 51, 0.1)",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "#d62300",
    boxShadow: "0 0 8px 2px rgba(214, 35, 0, 0.4)",
    outline: "none",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-16 px-6 sm:px-12 lg:px-24"
      style={{ backgroundColor: "#f0e6d7", color: "#885133", fontFamily: "'Segoe UI', sans-serif" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-12 rounded-3xl shadow-xl"
        style={{ backgroundColor: "#f4f0ec", border: "2px solid #885133", boxShadow: "0 8px 24px rgba(136,81,51,0.15)" }}
      >
        <h2
          className="text-center text-3xl font-extrabold mb-10 tracking-tight"
          style={{ color: "#885133" }}
        >
          Add New Festival / Cultural Event
        </h2>

        <div className="space-y-8">
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Cover Image URL"
            required
            className="w-full"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
            required
            className="w-full"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={5}
            required
            className="w-full resize-none"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Venue / Location"
            required
            className="w-full"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="flex-1"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="flex-1"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              className="flex-1"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full cursor-pointer"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Festival">Festival</option>
            <option value="Cultural">Cultural</option>
            <option value="Music">Music</option>
            <option value="Dance">Dance</option>
            <option value="Food">Food</option>
          </select>

          <input
            type="number"
            min="0"
            value={entryFee}
            onChange={(e) => setEntryFee(e.target.value)}
            placeholder="Entry Fee (0 for free)"
            required
            className="w-full"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <input
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            placeholder="Organizer Name"
            required
            className="w-full"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12">
          <button
            type="reset"
            className="flex-1 font-bold rounded-full py-4 transition duration-300"
            style={{
              backgroundColor: "#f0e6d7",
              color: "#885133",
              border: "2px solid #885133",
              boxShadow: "0 4px 8px rgba(136, 81, 51, 0.3)",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#885133";
              e.target.style.color = "#f4f0ec";
              e.target.style.boxShadow = "0 6px 12px rgba(136, 81, 51, 0.6)";
              e.target.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#f0e6d7";
              e.target.style.color = "#885133";
              e.target.style.boxShadow = "0 4px 8px rgba(136, 81, 51, 0.3)";
            }}
          >
            Reset
          </button>

          <button
            type="submit"
            className="flex-1 font-bold rounded-full py-4 transition duration-300"
            style={{
              backgroundColor: "#d62300",
              color: "#f4f0ec",
              boxShadow: "0 4px 8px rgba(214, 35, 0, 0.3)",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#885133";
              e.target.style.boxShadow = "0 6px 12px rgba(136, 81, 51, 0.6)";
              e.target.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#d62300";
              e.target.style.boxShadow = "0 4px 8px rgba(214, 35, 0, 0.3)";
            }}
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
}

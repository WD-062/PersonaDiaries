import { useState } from "react";

const Form = ({ entries, setEntries }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    active: false,
    title: "",
    date: "",
    image: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      alert("Please fill all field");
      return;
    }

    const existindDate = entries.map((entry) => entry.date);
    if (existindDate.includes(formData.date)) {
      alert("This date already has an entry. Please select another date :)");
      return;
    }

    const newEntry = {
      ...formData,
      id: Date.now().toString(),
    };

    const updateEntry = [...entries, newEntry];

    localStorage.setItem("entries", JSON.stringify(updateEntry));

    setEntries(updateEntry);

    console.log("form Data", formData);

    setFormData({ title: "", date: "", image: "", content: "" });
    setShowForm(false);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <button
        className="btn my-5 bg-sky-800 text-white px-9"
        onClick={() => setShowForm(true)}>
        Add Entry
      </button>

      {showForm && (
        <div className="card p-7 w-1/2">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-2">
              <label htmlFor="title">Title</label>
              <input
                className="input input-bordered w-full mt-1"
                onChange={handleChange}
                value={formData.title}
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="date">Date</label>
              <input
                className="input input-bordered w-full mt-1"
                onChange={handleChange}
                value={formData.date}
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="image">Image</label>
              <input
                className="file-input file-input-bordered w-full mt-1"
                onChange={handleChange}
                accept="image/jpeg,image/png,image/tiff,image/webp"
                type="file"
                id="image"
                name="image"
              />
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <textarea
                className="textarea textarea-bordered w-full mt-1"
                onChange={handleChange}
                value={formData.content}
                placeholder="Add Deatils... "
                rows={4}
                cols={30}
                id="content"
                name="content"
              />
            </div>
            <button className="btn mt-4 item-center text-white bg-sky-800 px-10 justify-center">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Form;

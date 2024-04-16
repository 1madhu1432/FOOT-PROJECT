import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
import loadingIcon from "./loading.gif";

const Admin = () => {
  const [formData, setFormData] = useState({
    productName: "",
    type: "",
    category: "",
    imageProduct: "",
    imageFood: "",
    imageFood2: "",
    description: "",
    ingredients: "",
    preparationMethod: "",
    cookingTip: "",
    nutrients: {
      energy: "",
      protein: "",
      carbohydrates: "",
      totalSugar: "",
      dietaryFiber: "",
      totalFat: "",
      transFat: "",
      cholesterol: "",
      potassium: "",
      iron: "",
      calcium: "",
    },
  });

  const [secondOptions, setSecondOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let response;
    setTimeout(() => {
      response = axios({
        method: "post",
        url: "http://localhost:8080/addProduct",
        data: formData,
      });
      console.log(response);
      setLoading(false);
      alert("Product added");
    }, 3000);
  };

  const handleProductImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "lkfwzyd4");
    try {
      let cloudName = "dx9laa2q1";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const res = await axios.post(api, data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageProduct: res.data.secure_url,
      }));
    } catch (error) {
      console.error(error);
    }
  };
  const handlefoodImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "lkfwzyd4");
    try {
      let cloudName = "dx9laa2q1";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const res = await axios.post(api, data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageFood: res.data.secure_url,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handlefoodImage2 = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "lkfwzyd4");
    try {
      let cloudName = "dx9laa2q1";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const res = await axios.post(api, data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageFood2: res.data.secure_url,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleFirstSelectChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
    const selectedValue = e.target.value;

    if (selectedValue === "Breakfast") {
      setSecondOptions(["Mix Powders", "Cook Powders", "Chutney", "Sambhar"]);
    } else if (selectedValue === "Biriyani Masala") {
      setSecondOptions(["Non-Veg Biriyani Masala's", "Veg Biriyani Masala's"]);
    } else if (selectedValue === "Tea Concentration") {
      setSecondOptions(["Tea", "Bevrages"]);
    } else {
      setSecondOptions([]);
    }
  };

  return (
    <div className="product-form-container">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <label htmlFor="productName">
          Product Name:
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
          />
        </label>
        <div className="input-row-2">
          <label htmlFor="type">
            Type:
            <select onChange={handleFirstSelectChange}>
              <option value="">Select an option</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Biriyani Masala">Biriyani Masala</option>
              <option value="Tea Concentration">Tea Concentration</option>
            </select>
          </label>

          <label htmlFor="category">
            Category:
            <select
              id="secondSelect"
              onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
              }}
            >
              {secondOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label htmlFor="productImage">
          Image of Product:
          <input type="file" id="productImage" accept="image/*" onChange={(e) => handleProductImage(e)} />
        </label>

        <label htmlFor="cookedImage">
          Image of Cooked Food:
          <input type="file" id="cookedImage" accept="image/*" onChange={(e) => handlefoodImage(e)} />
        </label>

        <label htmlFor="cookedImage">
          Image of Cooked Food2:
          <input type="file" id="cookedImage2" accept="image/*" onChange={(e) => handlefoodImage2(e)} />
        </label>

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="text-box"
        />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
          className="text-box"
        />

        <label htmlFor="preparationMethod">Preparation Method:</label>
        <textarea
          id="preparationMethod"
          name="preparationMethod"
          value={formData.preparationMethod}
          onChange={(e) => setFormData({ ...formData, preparationMethod: e.target.value })}
          className="text-box"
        />

        <label htmlFor="cookingTip">Cooking Tip:</label>
        <textarea
          id="cookingTip"
          name="cookingTip"
          value={formData.cookingTip}
          onChange={(e) => setFormData({ ...formData, cookingTip: e.target.value })}
          className="text-box"
        />

        <div className="input-row">
          <label htmlFor="energy">
            Energy:
            <input
              type="text"
              id="energy"
              name="nutrients.energy"
              value={formData.nutrients.energy}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    energy: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="protein">
            Protein:
            <input
              type="text"
              id="protein"
              name="nutrients.protein"
              value={formData.nutrients.protein}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    protein: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="carbohydrates">
            Carbohydrates:
            <input
              type="text"
              id="carbohydrates"
              name="nutrients.carbohydrates"
              value={formData.nutrients.carbohydrates}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    carbohydrates: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>

        <div className="input-row">
          <label htmlFor="totalSugar">
            Total Sugar:
            <input
              type="text"
              id="totalSugar"
              name="nutrients.totalSugar"
              value={formData.nutrients.totalSugar}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    totalSugar: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="dietaryFiber">
            Dietary Fiber:
            <input
              type="text"
              id="dietaryFiber"
              name="nutrients.dietaryFiber"
              value={formData.nutrients.dietaryFiber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    dietaryFiber: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="totalFat">
            Total Fat:
            <input
              type="text"
              id="totalFat"
              name="nutrients.totalFat"
              value={formData.nutrients.totalFat}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    totalFat: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>

        <div className="input-row">
          <label htmlFor="transFat">
            Trans Fat:
            <input
              type="text"
              id="transFat"
              name="nutrients.transFat"
              value={formData.nutrients.transFat}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    transFat: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="cholesterol">
            Cholesterol:
            <input
              type="text"
              id="cholesterol"
              name="nutrients.cholesterol"
              value={formData.nutrients.cholesterol}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    cholesterol: e.target.value,
                  },
                })
              }
            />
          </label>

          <label htmlFor="potassium">
            Potassium:
            <input
              type="text"
              id="potassium"
              name="nutrients.potassium"
              value={formData.nutrients.potassium}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    potassium: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>

        <div className="input-row">
          <label htmlFor="iron">
            Iron:
            <input
              type="text"
              id="iron"
              name="nutrients.iron"
              value={formData.nutrients.iron}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: { ...formData.nutrients, iron: e.target.value },
                })
              }
            />
          </label>

          <label htmlFor="calcium">
            Calcium:
            <input
              type="text"
              id="calcium"
              name="nutrients.calcium"
              value={formData.nutrients.calcium}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrients: {
                    ...formData.nutrients,
                    calcium: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>
        {loading ? (
          <img src={loadingIcon} height={50} style={{ margin: "auto" }}></img>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default Admin;

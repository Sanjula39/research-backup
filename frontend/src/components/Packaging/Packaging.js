import React, { useState } from "react";
import "./Packaging.css";
import { Col, Alert } from "reactstrap";

function Packaging() {
  const materialImages = {
    "Corrugated boxes":
      "https://img.freepik.com/free-photo/empty-closed-boxes-white_144627-4465.jpg?w=740&t=st=1693674871~exp=1693675471~hmac=d99b17268c7e167c858cae93559a0daaa3ae044947aba084ec6d4172b5dad946",

    Polybags:
      "https://img.freepik.com/free-psd/hand-holding-white-paper-bag-transparent-background_125540-2687.jpg?w=740&t=st=1693675030~exp=1693675630~hmac=977365a323fd3155c7b3193371fe1882fcdd73df1d5585af71c6e3ab1a40c638",
    Pallets:
      "https://img.freepik.com/premium-photo/stack-wooden-crates-with-word-brick-it_777078-2877.jpg?w=900",

    "Bubble wrap":
      "https://img.freepik.com/premium-photo/person-holding-bursting-bubble-protective-wrap-trying-calm-down_63762-9261.jpg?w=740",

    "Foam sheets":
      "https://img.freepik.com/premium-photo/natural-para-latex-rubber-material-perforated-sheet_104576-412.jpg?w=740",

    "Packing peanuts":
      "https://img.freepik.com/free-vector/vector-blank-sealed-foil-plastic-bags-full-peeled-pine-nuts-with-walnuts-almonds-peanuts-top-view-dark-background_1284-46329.jpg?w=740&t=st=1693674796~exp=1693675396~hmac=367f86bca2da19b1c7916573039da8b771e0c235029959c3cadfb8b0bcc8356b",
    "Shrink wrap":
      "https://img.freepik.com/free-photo/pears-packaged-plastic-isolated-white-background_123827-20523.jpg?w=740&t=st=1693675239~exp=1693675839~hmac=7014b446bbd3d3fcfe8a4d7b47bf22ce41f35b485d7ed952b03043ff5a3ae32f",
    "Stretch films":
      "https://img.freepik.com/free-photo/black-man-moving-furniture_53876-20669.jpg?w=740&t=st=1693675352~exp=1693675952~hmac=81870e3e4d164dd172772f84de4fc3c2175da47b15539eee1bd0d4861e1243e8",
    "Strapping tapes":
      "https://img.freepik.com/free-photo/crop-hands-sealing-box_23-2147758728.jpg?w=740&t=st=1693675402~exp=1693676002~hmac=bce72f6b447b78ada8a6ae37c6587c6603ed6ca94ae6b2ecdaa0bc4f09bc785a",
    "Cushioning materials":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Cardboard boxes":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Jute bags":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Jewellery boxes":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Display cases":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    Hangers:
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Hang tags":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Plastic sleeves":
      "https://img.freepik.com/free-photo/assortment-frozen-healthy-food_23-2148969427.jpg?w=740&t=st=1693675587~exp=1693676187~hmac=76ccff863a57d74ac46c20619e26e957cce3244026e680f33761b2e17b734bbb",
    "Floral foam":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
    "Water-absorbent gels":
      "https://img.freepik.com/free-vector/set-realistic-open-red-jewelry-boxes-necklace-bracelet-ear-rings-studs-isolated_1284-28642.jpg?w=826&t=st=1693424369~exp=1693424969~hmac=fae4f7f20d59d904e81bd9069d99fa5c101d88eb9e2c73d7622e91a3a2ee80d6",
  };
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [fragility, setFragility] = useState("");
  const [optimizedMaterial, setOptimizedMaterial] = useState(null);

  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !productWeight || !fragility) {
      setPopup("Please select values for all dropdowns.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName, productWeight, fragility }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          console.log("No enough historical data to optimize the material");
          setPopup("No enough historical data to optimize the material");
        } else {
          setOptimizedMaterial(data); // Update the state with the optimized material
        } // Update the state with the optimized material
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="packaging-container">
      <form className="packaging-form" onSubmit={handleSubmit}>
        {" "}
        {/* //<h1>Packaging Material Optimization</h1> */}
        {popup && (
          <Col className="pr-md-1" md="5">
            <Alert isOpen={visible} toggle={onDismiss}>
              {popup}
            </Alert>
          </Col>
        )}
        <div className="form-group">
          <label htmlFor="productName">Product Category:</label>
          <select
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
          >
            <option value="">Select Product Name</option>
            <option value="Rubber & Rubber based products">
              Rubber & Rubber based products
            </option>
            <option value="APPAREL & TEXTILES">APPAREL & TEXTILES</option>
            <option value="DIAMONDS, GEMS & JEWELLERY">
              DIAMONDS, GEMS & JEWELLERY
            </option>
            <option value="CUT FLOWERS & FOLIAGE">CUT FLOWERS & FOLIAGE</option>
            <option value="LEATHER PRODUCTS">LEATHER PRODUCTS</option>
            <option value="GIFTWARE & TOYS">GIFTWARE & TOYS</option>
            <option value="HANDLOOM PRODUCTS & COCONUT BASED PRODUCTS">
              HANDLOOM PRODUCTS & COCONUT BASED PRODUCTS
            </option>
            <option value="WOOD & WOODEN PRODUCTS">
              WOOD & WOODEN PRODUCTS
            </option>
            <option value="CERAMICS & PORCELAIN PRODUCTS">
              CERAMICS & PORCELAIN PRODUCTS
            </option>
            <option value="FOOTWEAR AND PARTS">FOOTWEAR AND PARTS</option>
            <option value="AYURVEDIC & HERBAL PRODUCTS">
              AYURVEDIC & HERBAL PRODUCTS
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productWeight">Product Weight:</label>
          <select
            id="productWeight"
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
            className="form-control"
          >
            <option value="">Select Product Weight</option>
            <option value="Less than 1 kg">Less than 1 kg</option>
            <option value="1 kg - 5 kg">1 kg - 5 kg</option>
            <option value="5 kg - 10 kg">5 kg - 10 kg</option>
            <option value="10 kg - 20 kg">10 kg - 20 kg</option>
            <option value="20 kg - 50 kg">20 kg - 50 kg</option>
            <option value="50 kg - 100 kg">50 kg - 100 kg</option>
            <option value="More than 100 kg">More than 100 kg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fragility">Fragility:</label>
          <select
            id="fragility"
            value={fragility}
            onChange={(e) => setFragility(e.target.value)}
            className="form-control"
          >
            <option value="">Select Fragility</option>
            <option value="Fragile">Fragile</option>
            <option value="Semi-fragile">Semi-fragile</option>
            <option value="Non-fragile">Non-fragile</option>
          </select>
        </div>
        <button className="btn btn-primary" id="optimizeButton" type="submit">
          Optimize Packaging Material
        </button>
      </form>
      <div>
        {optimizedMaterial &&
          Array.isArray(optimizedMaterial) &&
          optimizedMaterial.length > 0 && (
            <div className="result-container">
              <h2>Optimized Materials:</h2>
              <div className="optimized-grid">
                {optimizedMaterial.map((material, index) => {
                  const [materialName, percentage] = material.split(" - ");
                  const materialImage = materialImages[materialName]; // Get the image URL
                  return (
                    <div key={index} className="optimized-item">
                      <div className="material-info">
                        {materialImage && (
                          <div className="material-image-container">
                            <img
                              src={materialImage}
                              alt={`${materialName} Image`}
                              className="material-image"
                            />
                          </div>
                        )}
                        <div className="material-details">
                          <p className="material-name">
                            Material: {materialName}
                          </p>
                        </div>
                      </div>
                      <div className="percentage-bar">
                        <div
                          className="percentage-fill"
                          style={{ width: `${percentage}` }}
                        ></div>
                      </div>
                      <p className="percentage">Percentage: {percentage}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Packaging;

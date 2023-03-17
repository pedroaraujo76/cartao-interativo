import { useState } from "react";
import './tela.css'

function Cartao() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate1: "",
    expiryDate2: "",
    cvc: "",
  });

  const [cardData, setCardData] = useState({
    name: "JANE APPLESSED",
    cardNumber: "0000 0000 0000 0000",
    expiryDate1: "00",
    expiryDate2: "00",
    cvc: "000",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, cardNumber, expiryDate1, expiryDate2, cvc } = formData;
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const expiryDate1Pattern = /^\d{2}$/;
    const expiryDate2Pattern = /^\d{2}$/;
    const cvcPattern = /^\d{3}$/;
    const nameInput = document.getElementById('name');
    const cardInput = document.getElementById('cardNumber');
    const mesInput = document.getElementById('expiryDate1');
    const mesInput2 = document.getElementById('expiryDate2');
    const cvcInput = document.getElementById('cvc');
    
    if (name === "") {
      nameInput.style.borderColor = "red";
      nameInput.insertAdjacentHTML("afterend", "<p style='color: red; font-size: 13px;'>Por favor, preencha o nome.</p>");
    } else if (cardNumber === "" || !cardNumberPattern.test(cardNumber)) {
      cardInput.style.borderColor = "red";
      cardInput.insertAdjacentHTML("afterend", "<p style='color: red; font-size: 13px;'>Este formado não é permitido, apenas números(0000 0000 0000 0000).</p>");
    } else if (expiryDate1 === "" || !expiryDate1Pattern.test(expiryDate1)) {
      mesInput.style.borderColor = "red";
      mesInput.insertAdjacentHTML("afterend", "<p style='color: red; font-size: 13px;'>Pora favor, preencha o mês corretamente.</p>");
    } else if (expiryDate2 === "" || !expiryDate2Pattern.test(expiryDate2)) {
      mesInput2.style.borderColor = "red";
      mesInput2.insertAdjacentHTML("afterend", "<p style='color: red; font-size: 13px;'>Por favor, preencha o ano corretamente.</p>");
    } else if (cvc === "" || !cvcPattern.test(cvc)) {
      cvcInput.style.borderColor = "red";
      cvcInput.insertAdjacentHTML("afterend", "<p style='color: red; font-size: 13px;'>Por favor, preencha o CVC corretamente(000).</p>");
    } else {
      setCardData({ name, cardNumber, expiryDate1, expiryDate2, cvc });
    }

    nameInput.addEventListener("input", () => {
      if (nameInput.value !== "") {
        nameInput.style.borderColor = "";
        const errorElement = nameInput.nextElementSibling;
        if (errorElement && errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
    });

    cardInput.addEventListener("input", () => {
      if (cardInput.value !== "") {
        cardInput.style.borderColor = "";
        const errorElement = cardInput.nextElementSibling;
        if (errorElement && errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
    });

    mesInput.addEventListener("input", () => {
      if (mesInput.value !== "") {
        mesInput.style.borderColor = "";
        const errorElement = mesInput.nextElementSibling;
        if (errorElement && errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
    });

    mesInput2.addEventListener("input", () => {
      if (mesInput2.value !== "") {
        mesInput2.style.borderColor = "";
        const errorElement = mesInput2.nextElementSibling;
        if (errorElement && errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
    });

    cvcInput.addEventListener("input", () => {
      if (cvcInput.value !== "") {
        cvcInput.style.borderColor = "";
        const errorElement = cvcInput.nextElementSibling;
        if (errorElement && errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
    });

  };

  return (
    <div className="fundo-cartao">

      <div className="dados-cartao">
        <div className="bolas">
          <div className="bola branca"></div>
          <div className="bola cinza"></div>
        </div>
        <div className="separacao">
          <p className="number">{cardData.cardNumber}</p>
          <div class="cards">
            <p>{cardData.name}</p>
            <p>{cardData.expiryDate1}/{cardData.expiryDate2} </p>
          </div>
        </div>
        <div className="cvc">
          <p>{cardData.cvc}</p>
        </div>
      </div>

      <section className="form">

        <form onSubmit={handleSubmit}>

          <label htmlFor="name" className="text-principal">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g Jane Applessed"
            value={formData.name}
            onChange={handleFormChange}
          />

          <label htmlFor="cardNumber" className="text-principal">CARD NUMBER</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="e.g 1234 5678 9123 0000"
            value={formData.cardNumber}
            onChange={handleFormChange}
          />
          <p className="text text-principal">EXP.DATE(MM/YY) CVC</p>
          <div className="separador">
            <label htmlFor="expiryDate1"></label>
            <input
              className="inputs"
              type="text"
              id="expiryDate1"
              name="expiryDate1"
              placeholder="MM"
              value={formData.expiryDate1}
              onChange={handleFormChange}
            />
            <label htmlFor="expiryDate2"></label>
            <input
              className="inputs"
              type="text"
              id="expiryDate2"
              name="expiryDate2"
              placeholder="YY"
              value={formData.expiryDate2}
              onChange={handleFormChange}
            />
            <div className="cvc-separado">
              <label htmlFor="cvc"></label>
              <input className="inputs teste"
                type="text"
                id="cvc"
                name="cvc"
                placeholder="e.g 123"
                value={formData.cvc}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <button type="submit" className="button1">Confirm</button>
        </form>
      </section>
    </div>
  );
}

export default Cartao;

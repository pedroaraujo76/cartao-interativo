import './estilo.css';
import Back from '../imagens/bg-card-back.png';
import Front from '../imagens/bg-card-front.png';
import icon from '../imagens/icon-complete.svg';
import logotipo from '../imagens/card-logo.svg';

function Teste () {

const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const compeleted = document.querySelector(".thank");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
      nameInp.classList.add('errorNome');
      nameInp.parentElement.classList.add("errorNome_message")
    } else {
      nameInp.classList.remove("errorNome");
      nameInp.parentElement.classList.remove("errorNome_message");
    }
    if (!numberInp.value) {
      numberInp.classList.add('errorNumCartao')
      numberInp.parentElement.classList.add("errorNumCartao_message");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("errorNumCartao")
    } else {
      numberInp.classList.remove("errorNumCartao");
      numberInp.parentElement.classList.remove("errorNumCartao_message");
    }
    if (!monthInp.value) {
      monthInp.classList.add("errorMes")
      monthInp.parentElement.classList.add("errorMes_message");
    } else {
      monthInp.classList.remove("errorMes");
      monthInp.parentElement.classList.remove("errorMes_message");
    }
    if (!yearInp.value) {
      yearInp.classList.add("errorAno")
      yearInp.parentElement.classList.add("errorAno_message");
    } else {
      yearInp.classList.remove("errorAno");
      yearInp.parentElement.classList.remove("errorAno_message");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("errorCvc")
      cvcInp.parentElement.classList.add("errorCvc_message");
    } else {
      cvcInp.classList.remove("errorCvc");
      cvcInp.parentElement.classList.remove("errorCvc_message");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) {
      compeleted.classList.remove("hidden");
      form.classList.add("hidden");
    }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);

return (
    <main>
      <div class="container">
        <div class="left_section">
          <div class="cards">
            <div class="front_card">
              <img
                src={logotipo}
                alt="card-logo"
                class="card_logo"
              />
              <div class="card_container">
                <img src={Front} alt="front-card" />
                <h1 id="number">0000 0000 0000 0000</h1>
                <div class="card_info">
                  <span id="name">Jane Appleseed</span>
                  <span id="date">
                    <span id="month">00</span>
                    /
                    <span id="year">00</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="back_card">
              <img src={Back} alt="back-card" />
              <span id="cvc">000</span>
            </div>
          </div>
        </div>
        <div class="right_section">
          <form>
            <div class="grid_1">
              <label for="card_name">Cardholder Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Appleseed"
                id="card_name"
                required
              />
            </div>
            <div class="grid_2">
              <label for="card_number">Card Number</label>
              <input
                type="number"
                oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                minlength="16"
                maxlength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                id="card_number"
                required
              />
            </div>
            <div class="card_information">
              <div id="card_date">
                <label for="card_date">Exp. Date (MM/YY)</label>
                <div class="two_inp">
                  <div>
                    <input
                      type="number"
                      placeholder="MM"
                      oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      minlength="2"
                      maxlength="2"
                      id="card_month"
                      required
                    />
                  </div>
                  <div>
                    <input
                    oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      type="number"
                      minlength="2"
                      maxlength="2"
                      placeholder="YY"
                      id="card_year"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="grid_4">
                <label for="card_cvc">CVC</label>
                <input type="number" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="3" placeholder="e.g. 123" id="card_cvc" required />
              </div>
            </div>
            <button id="submit_btn" type="submit">Confirm</button>
          </form>
          <div class="thank hidden">
            <img src={icon} alt="Completed" />
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </main>
);

}


export default Teste;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card({ item }) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {item.name}
          </h5>
          <h6 class="card-price text-center">
            {item.currency}
            {item.price}
            <span class="period">/{item.period}</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {item.features.map((list) => {
              return (
                // terinary operators like if else
                <li className={!list.isEnable ? "text-muted" : ``}>
                  <span class="fa-li">
                    {list.isEnable ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </span>
                  <span>
                    {list.isBold ? <strong>{list.title}</strong> : list.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

//for fonts install npm package

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome

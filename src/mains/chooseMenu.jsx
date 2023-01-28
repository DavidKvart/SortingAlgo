import { Link } from "react-router-dom";
import "../index.css";

const ChooseMenu = () => {
  return (
    <div className="menu-container">
      <div className="cardContainer">
        <div class="card text-center card-pick-sort">
          <div class="card-body">
            <h5 class="card-title">Bubble sort</h5>
            <p class="card-text">to learn one of the fastes sorting system</p>
            <Link to="/bubble/intro" class="btn btn-dark">
              Lets start!
            </Link>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <div class="card text-center card-pick-sort">
          <div class="card-body">
            <h5 class="card-title">Heap sort treatment</h5>
            <p class="card-text">to learn one of the fastes sorting system</p>
            <Link to="/heap/intro" class="btn btn-dark">
              Lets start!
            </Link>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <div class="card text-center card-pick-sort">
          <div class="card-body">
            <h5 class="card-title">Insertion sort</h5>
            <p class="card-text">to learn one of the fastes sorting system</p>
            <Link to="/insertion/intro" class="btn btn-dark">
              Lets start!
            </Link>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <div class="card text-center card-pick-sort">
          <div class="card-body">
            <h5 class="card-title">Merge sort</h5>
            <p class="card-text">to learn one of the fastes sorting system</p>
            <Link to="/merge/intro" class="btn btn-dark">
              Lets start!
            </Link>
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <div class="card text-center card-pick-sort">
          <div class="card-body">
            <h5 class="card-title">Selection sort</h5>
            <p class="card-text">to learn one of the fastes sorting system</p>
            <Link to="/selection/intro" class="btn btn-dark">
              Lets start!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMenu;

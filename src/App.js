import propTypes from "prop-types"

River.propTypes = {
  fav : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
}

const CoffeeList = [
  {
    id : 1,
    name : "Latte",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110569]_20150813221315652.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "Americano",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
    rating : 4.2
  },
  {
    id : 3,
    name : "Cappuccino",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110601]_20150803101742023.jpg",
    rating : 3
  },
  {
    id : 4,
    name : "Caffe Mocha",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[46]_20150803105115048.jpg",
    rating : 1
  },
  {
    id : 5,
    name : "Espresso",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[20]_20150813221922951.jpg",
    rating : 1
  }
]

function River({fav, picture,rating}){
  return (
    <div>
      <h2>{fav}는 맛있다!</h2>
      <img src={picture} alt={fav} />
      <span>{rating}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {CoffeeList.map(menu => <River key={menu.id} fav={menu.name} picture={menu.image} rating={menu.rating} />)}
    </div>
  );
}



export default App;

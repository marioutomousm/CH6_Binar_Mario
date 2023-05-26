import "./Hero.css";
// import "../styles/App.css";
import MercedesCar from "../../Assets/Images/MercedesCar.png";
import carImage from "../../Assets/Images/cars.png";
import Button from "../../Components/button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
	return (

		<section className="main">
			<div className="container px-0">
				<div className="row mr-n4">
					<div className="col my-auto">
						<h1 className="main-title fw-bold">
							Sewa &amp; Rental Mobil Terbaik di kawasan
							Nganjuk
						</h1>
						<p className="main-description paragraph my-1">
							Selamat datang di Binar Car Rental. Kami menyediakan
							mobil kualitas terbaik dengan harga terjangkau.
							Selalu siap melayani kebutuhanmus untuk sewa mobils
							selama 24 jam.
						</p>
						<Link to={"/sewa"} className="btn btn-success" style={{ top: 10, right: 300  }}>
							Mulai Sewa Mobil
						</Link>
						
					</div>
					<div className="main__image-wrap col-7">
						<img
							className="main__image"
							src={MercedesCar}
							alt="Mercedes" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

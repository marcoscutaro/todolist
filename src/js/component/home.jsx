import React from "react";
import Navbar from './Navbar';
import Card from "./Card"
import Footer from "./Footer.js";
import Jumbotron from './Jumbotron.js';
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		 <div className="container-fluid px-0">
    <Navbar 
      brand="CARS"
    />

<Jumbotron
				title="Lorem Ipsum "
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
			/>
    <div className="row">
				<Card
					title="Car"
					src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          url="https://www.pexels.com/photo/low-angle-photo-of-volkswagen-kombi-2533092/"
					
				/>
				<Card
					title="Car"
					src="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
					url="https://www.pexels.com/photo/low-angle-photo-of-volkswagen-kombi-2533092/"
				/>
				<Card
					title="Car"
					src="https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          url="https://www.pexels.com/photo/photo-of-classic-car-1534604/"
				/>
				<Card
					title="Car"
					src="https://images.pexels.com/photos/14382949/pexels-photo-14382949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
					url="https://www.pexels.com/photo/retro-style-dodge-14382949/"
				/>
			</div>

<Footer
  title="Vintage Cars"
/>

    </div>
		</>
	);
};

export default Home;

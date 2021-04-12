import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
	return (
		<div className="home">
			<img
				className="home_image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>

			<div className="home__row">
				<Product
					id="101"
					title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
					price={168.95}
					rating={2}
					image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SX679_.jpg"
				/>
				<Product
					id="102"
					title="Panasonic Lumix FZ80 4K Digital Camera, 18.1 Megapixel Video Camera, 60X Zoom DC VARIO 20-1200mm Lens, F2.8-5.9 Aperture"
					price={297.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/917LEZ%2Bit3L._AC_SX522_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="103"
					title="DarkFlash Phantom Black ATX Mid-Tower Desktop Computer Gaming Case USB 3.0 Ports Tempered Glass Windows"
					price={11.96}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71pauXP-50L._AC_SX679_.jpg"
				/>
				<Product
					id="104"
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={11.96}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
				/>
				<Product
					id="105"
					title="The Holographic Universe: The Revolutionary Theory of Reality Paperback"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51jh8IY3Y1L._SX329_BO1,204,203,200_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="106"
					title="Sceptre 34-inch Curved UltraWide 21: 9 Creative LED Monitor 2560x1080 Frameless HDMI DisplayPort"
					price={299.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/817TtPObqrL._AC_SX679_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="107"
					title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
					price={364.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
				/>
				<Product
					id="108"
					title="Acer Swift 3 Thin & Light Laptop, 14 Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, Wi-Fi 6, Backlit KB, Fingerprint Reader, Alexa Built-in, SF314-42-R9YN"
					price={679.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71W5ZdS%2BsEL._AC_SL1500_.jpg"
				/>
				<Product
					id="109"
					title="Acer Nitro Gaming Headset with Flexible Omnidirectional Mic, Adjustable Headband"
					price={39.99}
					rating={2}
					image="https://images-na.ssl-images-amazon.com/images/I/61oa2ObjxcL._AC_SL1500_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="110"
					title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812"
					price={699}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
				/>
				<Product
					id="111"
					title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
					price={19.9}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;

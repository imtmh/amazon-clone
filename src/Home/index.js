import React from "react";
import "./home.css";
import HeroImage from "./img/prime_1.jpg";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__contianer_image" src={HeroImage} alt="hero" />
        <div className="home__container_row">
          <Product
            className=""
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            price={122}
            title="AmazonBasics Air Purifier with 5-layer Filtration and Air Quality Indicator"
            rating={4}
          />
          <Product
            className=""
            imageUrl="https://m.media-amazon.com/images/I/51awR3jhV-L._AC_SY200_.jpghttps://m.media-amazon.com/images/I/51awR3jhV-L._AC_SY200_.jpg"
            price={43}
            title={`HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX`}
            rating={5}
          />
        </div>
        <div className="home__container_row">
          <Product
            className=""
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg"
            price={122}
            title="AmazonBasics Air Purifier with 5-layer Filtration and Air Quality Indicator"
            rating={4}
          />
          <Product
            className=""
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/inbaugwairpurifier/xcm_banners_bau_2021_desktop-quadcard-379x304-product-badge-3w59o_758x608_in-en._SY304_CB667491100_.jpg"
            price={43}
            title="24x7 eMall Brass, Copper Table Mounted Hot and Cold Basin Mixer, Brown, Bamboo, Polished Finish"
            rating={5}
          />
          <Product
            className=""
            imageUrl="https://m.media-amazon.com/images/I/31LDF8ccgJL._AC_SY200_.jpg"
            price={122}
            title="HP Ink Tank 410 WiFi Colour Printer, Scanner and Copier for Home/Office,High Capacity Tank (4000 Black and 8000 Colour),Low Cost per Page(10paise for B/W and 20 Paise for Colour), Borderless Print"
            rating={4}
          />
        </div>
        <div className="home__container_row">
          <Product
            className=""
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            price={122}
            title={`HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX`}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

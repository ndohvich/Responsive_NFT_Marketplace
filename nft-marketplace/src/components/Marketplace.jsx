import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {FaEthereum} from "react-icons/fa";
import styled from "styled-components";
import marketplace1 from "../assets/marketplace1.png";
import marketplace2 from "../assets/marketplace2.png";
import marketplace3 from "../assets/marketplace3.png";
import marketplace4 from "../assets/marketplace4.png";
import marketplace5 from "../assets/marketplace5.png";
import marketplace6 from "../assets/marketplace6.png";
import marketplace7 from "../assets/marketplace7.png";
import marketplace8 from "../assets/marketplace8.png";
import Button from "./Button";

export const Marketplace = () => {
    const marketPlaceData = [
        {
            image: marketplace1,
            name: "Aiboi-meta"
        },
        {
            image: marketplace2,
            name: "Pedram-mohamm..."
        },
        {
            image: marketplace3,
            name: "Eduardo-pena"
        },
        {
            image: marketplace4,
            name: "Daeho-cha"
        },
        {
            image: marketplace5,
            name: "Justine-florentino"
        },
        {
            image: marketplace6,
            name: "Hoang-l-p-solan"
        },
        {
            image: marketplace7,
            name: "Joshua-jay"
        },
        {
            image: marketplace8,
            name: "Ndohvich-za"
        },
    ];
    const marketPlaceType = [
        "All",
        "Art",
        "Generic",
        "Common",
        "Trading",
        "Rare",
    ];
  return (
    <Section>
        <div className="title">
            <h2>NFT Marketplace</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores quibusdam voluptates consectetur, hic id perferendis eum aperiam itaque et 
                expedita obcaecati blanditiis libero minima laudantium veniam nemo dolorem fugit nihil.
            </p>
        </div>
        <div className="marketPlaceTypes">
            {
                marketPlaceType.map(({text, index}) => {
                    return <Button text={text} key={index} blue={index === 0} />
                })
            }
        </div>
        <div className="marketPlaces">
            {
                marketPlaceData.map(({image,name}) =>{
                    return(
                        <div className="marketplace">
                            <div className="image">
                                <img src={image} />
                            </div>
                            <div className="name">
                                <h4>{name}</h4>
                                <BsThreeDots />
                            </div>
                            <h5 className="username">@koolkisha</h5>
                            <div className="price-container">
                                <h5 className="price">5.5ETH</h5>
                                <FaEthereum />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </Section>
  );
}

const Section = styled.section`
    
`;

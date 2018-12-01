import React from 'react';
import RateComponent from '../../../../components/rate';
import FooterComponent from '../../../../components/footer';
import './index.scss';

const ShopComponent = ({
    shops,
    selectShop,
    selectedShopIndex
}) => {
    const handleShopClick = (shopIndex) => {
        if (shopIndex === selectedShopIndex) {
            selectShop(-1)
        } else {
            selectShop(shopIndex)
        }
    }
    return (
        <div className="shop-container">
            <div className="title fs-30">
                Vergleiche Deine Burgerläden
            </div>
            {shops && shops.map((o, i) => {
                return (
                    <div key={i} className={`item-container margin-bottom-10 pointer ${(selectedShopIndex === i) ? 'selected' : ''}`}>
                        <div className="desc" onClick={() => handleShopClick(i)}>
                            <div className="item name">
                                <RateComponent rate={o.rating} />
                                <span className="margin-left-10">{o.name}</span>
                            </div>
                            <div className="item type">
                                <span className="margin-right">Classic Burger
                                <i className={`fs-22 margin-left-10 fa ${(o.burger_classic === 'y') ? 'fa-check green' : 'fa-times red'}`} />
                                </span>
                                <span className="margin-right">Cheese Burgur
                                <i className={`fs-22 margin-left-10 fa ${(o.burger_cheese === 'y') ? 'fa-check green' : 'fa-times red'}`} />
                                </span>
                                <span>Bio
                                <i className={`fs-22 margin-left-10 fa ${(o.burger_bio === 'y') ? 'fa-check green' : 'fa-times red'}`} />
                                </span>
                            </div>
                            <div className="item address">
                                <div className="text-right orange bold">Adresse
                                <i className="fs-22 fa fa-map-marker black margin-left-10" />
                                </div>
                            </div>
                        </div>
                        {
                            (selectedShopIndex === i) &&
                            <div className="shop-detail">
                                <div className="close fs-24" onClick={() => selectShop(-1)}>
                                    <i className="fa fa-times-circle pointer"></i>
                                </div>
                                <span className="fs-18 bold block">{shops[selectedShopIndex].name}</span>
                                <span className="fs-18 block margin-top">{shops[selectedShopIndex].street}</span>
                                <span className="fs-18 block">{`${shops[selectedShopIndex].zip} ${shops[selectedShopIndex].city}`}</span>
                                <span className="fs-18 block margin-top">
                                    <a target="_blank" className="orange bold" href={shops[selectedShopIndex].website}>Zur Website</a> 
                                </span>
                            </div>
                        }
                    </div>
                )
            })}
            <div className="more pointer fs-24 bold bg-red">
                <i className="fa fa-cloud-download margin-right-sm" />
                weitere Burgerläden holen
            </div>
            <FooterComponent />
        </div>
    )
}

export default ShopComponent;
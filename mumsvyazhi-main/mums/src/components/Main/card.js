import React, {useEffect, useState} from "react";
import {ProductService} from "../../services/ProductService";
import Modal from 'react-modal';
import '../../CSS/index.css'
import {ReactComponent as Close} from '../../img/modal/close_bttn.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Lottie from 'lottie-react-web';
import animationData from '../Animation - 1702822230496.json';
import {ReactComponent as Cart} from '../../img/header/cart.svg';


function Card(props) {
    const [Base64, setBase64] = useState([]);
    const [state, setState] = useState('');
    //модальное окно - обработка команд
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => {
      setModalIsOpen(false);

    };
        const modalContent = (

            <div className="modal_window">
                <div className="modal_card">
                    <div className="bttn_block_close">
                        <Close onClick={closeModal}>Закрыть</Close>
                    </div>
                    <div className="card-img-modal">
                        <Swiper
                            id="swiper2"
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide >
                                <img className="img-modal" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-modal" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-modal" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="card-text-modal">
                        <div className="product-title-price">
                            <p className="card-name">{props.product.title}</p>
                            <p className="price">{props.product.price} рублей</p>
                        </div>
                        <div className="discrub-modal-cart-img">
                            <div className="card-description-modal">
                                <p className="card-description">{props.product.description}</p>
                            </div>
                            <Cart className="modal-cart"></Cart>
                        </div>
                    </div>
                </div>
            </div>
        );
    function handleCardClick() {
        setState('cardIsPressed');
        setModalIsOpen(true);
    }
    const ids = props.product.images.map(image => {
        return image.id;
      }).flat();
    //конец
    useEffect(() => {
        init();
    }, []);
    const init = () => {
    setState('loading');
            let images_of_product = ids;
            let url;
            let blobImagesUrls = [];
            for(var i=0;i < images_of_product.length;i++){
                  url = ProductService.GET_IMAGES()+images_of_product[i];
                  fetch(url)
                      .then(response => response.blob())
                      .then(blob => {
                          let image = new Image()
                          image.src = URL.createObjectURL(blob);
                          blobImagesUrls.push(image.src);
                          setState('success');
                          setBase64(blobImagesUrls);
                          })
                      .catch(error => {
                          console.error('Error fetching image:', error);
                      });
                }

                        }

    return (

            <nav className="product justify-content-center text-center">
                {state === 'loading' ? (
                        // ????????????????????????????
                        <div className="loader">
                            <Lottie
                                options={{
                                    animationData: animationData,
                                    loop: true,
                                }}
                                width={330}
                                height={460}
                            />
                        </div>
                ) : (

                    <div className="card" onClick={handleCardClick}>
                        <div className="card-img">
                            <img className= "img" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                        </div>
                        <div className="card-text" >
                            <p className="card-name">{props.product.title}</p>
                            <p className="price">{props.product.price} рублей</p>
                        </div>
                    </div>
                )}
                {state === 'cardIsPressed' && (
                      <div className="modal_flex">
                          <Modal isOpen={modalIsOpen}
                                 onRequestClose={closeModal}
                                 style={{
                                    overlay: {
                                        position: 'fixed',
                                        top: 0,
                                              right: 0,
                                        bottom: 0,
                                        opacity: 1,
                                    },

                                    content: {
                                        position: 'absolute',
                                        top: '200px',
                                        left: '-50%',
                                        right: '-50%',
                                        bottom: '200px',
                                              WebkitOverflowScrolling: 'touch',
                                        borderRadius: '0',
                                        outline: 'none',
                                        padding: '20px'
                                    }}
                                 }>
                              {modalContent}
                          </Modal>
                      </div>
                  )}
                </nav>
    );
}
export default Card;
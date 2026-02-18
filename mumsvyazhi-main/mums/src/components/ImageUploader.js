import React, {  useEffect, useState } from 'react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Done from '../img/footer/done.svg';

// ДОДЕЛАТЬ (ПОКА ОТЛОЖЕНО)

const ImageUploader = () => {
        const [imageSrc, setImageSrc] = useState("default-image.jpg");
        const changeImage = (e) => {
            setImageSrc("new-image.jpg");
        };
        return (
            <div className="carousel">
                <Swiper
                    id="swiper1"
                    pagination={{
                    type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <div className="slider_flex">
                            <div className="slider_block">
                                <p className="slider_text">Как к Вам обращаться?</p>
                                <input className="slider-input" placeholder="Ваше имя"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_flex">
                            <div className="slider_block">
                                <p className="slider_text">Укажите Ваш telegram</p>
                                <input className="slider-input" placeholder="@username"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-block-file">
                            <div className="p-file">
                                <p className="slider-text-discrub">Опишите изделие (цвета, пряжу, ключевые слова) - и
                                    прикрепите фото, которые могут быть на это похожи</p>
                            </div>
                            <div className="flex-blya">
                                <div className="textarea-block">
                                    <textarea className="slider-area" placeholder="Бла бла бла"/>
                                </div>
                                <div className="bttn-costom">
                                    <label className="custom-file">
                                        <input type="file"
                                               accept="image/*"
                                               className="input-file"
                                               multiple
                                               onChange={(e) => setImageSrc(e.target.files[0])}>
                                        </input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_flex">
                            <div className="slider_block">
                                <p className="slider_text">Спасибо за заказ!</p>
                                <p className="slider-text-discrub">напиши @msvzh, чтобы подтвердить его и уточнить детали</p>
                                <img className="done"
                                     src={Done}>
                                </img>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
};

export default ImageUploader;







import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import titanImg from '../../assets/sanpham/rang-ti-tan.png';
import emaxImg from '../../assets/sanpham/rang-su-emax.png';
import venusImg from '../../assets/sanpham/rang-venus.jpg';
import katanaImg from '../../assets/sanpham/katana.jpg';
import wwhitepeaceImg from '../../assets/sanpham/wwhitepeace.jpg';
import zicoImg from '../../assets/sanpham/rangzico.png';

const Features = () => {
    return (
        <section className='features-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="" title="Danh sách sản phẩm" />

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={titanImg} alt="expert"></img>
                            </div>
                            
                            <h6>Rang su Ti tan</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={emaxImg} alt="expert"></img>
                            </div>
                            
                            <h6>Rang su Emax</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={wwhitepeaceImg} alt="expert"></img>
                            </div>
                            
                            <h6>Răng sứ White Peaks</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={zicoImg} alt="expert"></img>
                            </div>
                            
                            <h6>Rang su Zico</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={venusImg} alt="expert"></img>
                            </div>
                            
                            <h6>Rang su Venus</h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="icon-list">
                            <div>
                                <img src={katanaImg} alt="expert"></img>
                            </div>
                            
                            <h6>Rang su Katana</h6>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
import React, {useState} from 'react';
import './Banner.scss';
// import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import iconLocation from '../../assets/footer/location.png';
import bannerImg from '../../assets/banner/1.png';
// import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    let [serial, setSerial]= useState('NT123');
    let [result, setResult]= useState();

    const handleChange = (e) => {
        setSerial(e.target.value);
    };

    const handleSearch = () => {
        console.info(serial)
        setResult('123')
    }

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Trung tâm bảo hành Nhật Tín Dental</h2>
                                    <p>Chúng tôi luôn sẵn sàng hỗ trợ quý khách với các dịch vụ bảo hành nhanh chóng và chuyên nghiệp. Mọi thắc mắc vui lòng liên hệ.</p>
                                    <div className="banner-bottom">
                                            <div className="banner-call">
                                                <div className='icon'>
                                                    <img src={icon} alt="icon" />
                                                </div>
                                                <div className='call-text'>
                                                    <p>Hotline</p>
                                                    <h6>03 482 394 123</h6>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="banner-bottom">
                                            <div className="banner-call">
                                                <div className='icon'>
                                                    <img src={iconLocation} alt="icon" />
                                                </div>
                                                <div className='call-text'>
                                                    <p>Địa chỉ</p>
                                                    <h6>03 482 394 123</h6>
                                                </div>
                                            </div>
                                    </div>
                                    
                                    <div className="row banner-bottom">
                                       
                                        <div className="col-lg-8">
                                            <div class="form-group">
                                                {/* <label>Name</label> */}
                                                <input type="text" 
                                                    class="form-control" 
                                                    placeholder="Nhập mã thẻ bảo hành" 
                                                    value={serial}
                                                    onChange={handleChange}
                                                />
                                             </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <button className='button-search' onClick={handleSearch}>Tra cứu</button>
                                        </div>

                                        
                                    </div>

                                    <div className="row banner-bottom">
                                       
                                        {result? 
                                        <div className='service-box'> {result} </div> :
                                        <p>Ko co du lieu</p>
                                        }

                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                     
                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;
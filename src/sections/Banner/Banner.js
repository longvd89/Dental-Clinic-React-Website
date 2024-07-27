import React, { useState } from 'react';
import './Banner.scss';
// import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import iconLocation from '../../assets/footer/location.png';
import bannerImg from '../../assets/dental.webp';
// import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
// import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const InfoComponent = ({ info }) => {

    if (!info) {
        return (<h5 style={{ color: '#F39C12' }}> Không tìm thấy thông tin bảo hành. Vui lòng kiểm tra lại mã bảo hành.</h5>);
    }

    return (<div className="card">
        <div className="card-header">
            Thông tin bảo hành
        </div>
        <div className="card-body">
            {Object.entries(info).map(([key, value]) => {
                let label = '';
                switch (key) {
                    case 'code':
                        label = 'Mã thẻ';
                        break;
                    case 'startDate':
                        label = 'Ngày kích hoạt';
                        break;
                    case 'endDate':
                        label = 'Ngày hết hạn';
                        break;
                    case 'customer':
                        label = 'Khách hàng';
                        break;
                    case 'phone':
                        label = 'Số điện thoại';
                        break;
                    case 'doctor':
                        label = 'Bác sĩ';
                        break;
                    case 'labo':
                        label = 'Labo';
                        break;
                    case 'total':
                        label = 'Số lượng';
                        break;
                    case 'product':
                        label = 'Sản phẩm';
                        break;
                    case 'branchDental':
                        label = 'Phòng khám';
                        break;
                    case 'xuatxu':
                        label = 'Xuất xứ';
                        break;
                    case 'viTriRang':
                        label = 'Vị trí răng';
                        break; default:
                        break;
                }
                return (
                    <div className="row" key={key}>
                        <label>{label}  </label>
                        <span>{value}</span>
                    </div>
                )
            })}
        </div>
    </div>)

}

const Banner = () => {

    let [serial, setSerial] = useState('');
    let [result, setResult] = useState();
    let [showData, setShow] = useState(false);

    const handleChange = (e) => {
        let code = e.target.value;
        setSerial(code.trim());
    };

    const handleSearch = () => {

        if (!serial) {
            alert('Xin vui lòng nhập mã thẻ bảo hành')
            return;
        }

        const data = {
            code: 'C365751',
            startDate: '19-07-2024',
            endDate: '19-07-2034',
            customer: 'VŨ ĐÌNH LONG',
            phone: '0985243976',
            doctor: '',
            branchDental: 'HERIDENT',
            labo: 'LAB Nhất Tín',
            product: 'CERCON HT TCT',
            xuatxu: 'Đức (Germany)',
            total: 1,
            viTriRang: 46,
        }
        setResult(data);
        setShow(true);
    }

    return (
        <section className='section-bg section-common banner-section'>
            <div className="container pt-40 pb-30">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                            <h2>Trung tâm bảo hành Nhất Tín Labo</h2>
                            <p>Chúng tôi luôn sẵn sàng hỗ trợ quý khách với các dịch vụ bảo hành nhanh chóng và chuyên nghiệp. Mọi thắc mắc vui lòng liên hệ.</p>
                            <div className="banner-bottom">
                                <div className="banner-call">
                                    <div className='icon'>
                                        <img src={icon} alt="icon" />
                                    </div>
                                    <div className='call-text'>
                                        <p>Hotline</p>
                                        <h6>02466897699 - 0985243976</h6>
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
                                        <h6>Số 33, ngõ 69A Hoàng Văn Thái, Thanh Xuân, Hà Nội</h6>
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

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                            <div className="banner-img">
                                <img src={bannerImg} alt="banner model" />
                            </div>

                            {/* Vector Shapes */}
                            <div className="shapes">
                                {/* <img src={shapeOne} alt="shape" /> */}
                                <img src={shapeTwo} alt="shape" />
                                <img src={shapeThree} alt="shape" />
                                <img src={shapeFour} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-box">

                    {showData && <InfoComponent info={result} />
                    }


                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;
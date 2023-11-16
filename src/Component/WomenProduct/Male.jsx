/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRightLong, faChevronRight, faCircleCheck, faEnvelope, faEnvelopeCircleCheck, faEnvelopeOpen, faFaceGrinTears, faFaceMeh, faFemale, faGift, faGifts, faIdBadge, faReorder, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Male = () => {
    return (
        <div className='container'>

            <section className='container p-5 my-5 borders rounded'>
                <h2 data-aos="fade-left" data-aos-duration="2000" className='text-center py-3 fw-semibold co'>Our Collection</h2>
                <div className='cspan text-center mb-5'></div>
                <div className='row row-cols-md-3 row-cols-1 g-2'>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col  ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700148151/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_g_si75qn.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Black T-shirt</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/login' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700148150/contentsArea_itemimg_16_hi7g5q.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral T-shirt</h3>
                                <p className="card-text">Price:188.02</p>
                                <p className="card-text text-secondary">Price:<del>$198.17</del></p>
                                <Link to='/login' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card cr border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700148151/F1B9775E-C5BE-4BF0-BF7A-B91A7A90F0E4_lnxwge.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic T-shirt</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/login' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row row-cols-md-3 row-cols-1 g-2 justify'>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col  ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700148406/1-G2Lmg1vB2L8E40r9cDpV_1024x1024_eyzvqu.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic T-shirt</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/login' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        {/* <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700145476/IMG-20230327-WA0108_600x_kurtzn.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral Black Skirt</h3>
                                <p className="card-text">Price:188.02</p>
                                <p className="card-text text-secondary">Price:<del>$198.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div> */}
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700148149/mens-1619-shirt-back_1024x1024_wloasg.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral Black T-shirt</h3>
                                <p className="card-text">Price:188.02</p>
                                <p className="card-text text-secondary">Price:<del>$198.17</del></p>
                                <Link to='/login' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </div>

    );
};

export default Male;
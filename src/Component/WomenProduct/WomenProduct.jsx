/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRightLong, faChevronRight, faCircleCheck, faEnvelope, faEnvelopeCircleCheck, faEnvelopeOpen, faFaceGrinTears, faFaceMeh, faFemale, faGift, faGifts, faIdBadge, faReorder, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const WomenProduct = () => {
    return (
        <div className='container'>

            <section className='container p-5 my-5 borders rounded'>
                <h2 data-aos="fade-left" data-aos-duration="2000" className='text-center py-3 fw-semibold co'>Our Collection</h2>
                <div className='cspan text-center mb-5'></div>
                <div className='row row-cols-md-3 row-cols-1 g-2'>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col  ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700145831/il_1080xN.3776703498_ldjr_h448zp.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather Dress</h3>
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
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700145476/IMG-20230327-WA0108_600x_kurtzn.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral Black Skirt</h3>
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
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700147695/Henrietta-Vintage-inspired-Fairytale-Princess-Dress-823_2048x_itvhcf.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather  Dress</h3>
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
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700145957/331939579_max_mpvwvu.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather  Dress</h3>
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
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1700145832/331939589_max_gcuwtr.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral Black Skirt</h3>
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

export default WomenProduct;
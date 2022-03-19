import Breadcrumb from 'components/Breadcrumb';
import GreatDeals from 'components/GreatDeals';

const AboutPage = () => {
	return (
		<div style={{ paddingTop: '130px' }}>
			<Breadcrumb title='About' path='/about' />
			<GreatDeals />
			<section className='about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70'>
				<div className='container'>
					<div className='row align-items-center mb-120'>
						<div className='col-lg-7'>
							<div className='about__img__box mb-60'>
								<img
									className='about-main-thumb pl-110'
									src='assets/img/slider/01.png'
									alt='about-img'
								/>
								<img
									className='about-img about_01'
									src='assets/img/about/01.png'
									alt='about-img'
								/>
								<img
									className='about-img about_02'
									src='assets/img/about/02.png'
									alt='about-img'
								/>
								<img
									className='about-img about_03'
									src='assets/img/slider/earth-bg.svg'
									alt='about-img'
								/>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='about-wrapper'>
								<div className='section-title section-title-4 mb-60'>
									<h5 className='bottom-line mb-25'>About Us</h5>
									<h2 className='mb-20'>
										The act or experience of one that learns a computer program
										that makes learning fun
									</h2>
									<p className='mb-20'>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										di nonumy eirmod tempor invidunt ut labore et dolore magn
										aliq erat.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										di nonumy eirmod tempor invidunt ut labore et dolore magn
										aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing
										elitr, sed di nonumy.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0'>
						<div className='col-lg-3 col-md-6 col-sm-6'>
							<div className='counters text-center mb-30'>
								<h2>
									<span className='counter'>100</span>+
								</h2>
								<h5>Specialist Good Teachers</h5>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 col-sm-6'>
							<div className='counters count-1 text-center mb-30'>
								<h2>
									<span className='counter'>1000</span>+
								</h2>
								<h5>Online Learning Courses</h5>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 col-sm-6'>
							<div className='counters count-2 text-center mb-30'>
								<h2>
									<span className='counter'>13654</span>+
								</h2>
								<h5>Online &amp; Offline Students</h5>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 col-sm-6'>
							<div className='counters count-3 text-center mb-30'>
								<h2>
									<span className='counter'>365</span>+
								</h2>
								<h5>Special Awards Winning</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*about-us-area end*/}
			{/*about-section-wrapper start*/}
			<div className='about-section-wrapper pos-rel gradient-bg'>
				<div className='what-blur-shape-one' />
				<div className='what-blur-shape-two' />
				{/*what-loking-for start*/}
				<section className='what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-title text-center mb-55'>
									<h5 className='bottom-line mb-25'>Teachers &amp; Students</h5>
									<h2>What you Looking For?</h2>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-6 col-lg-6 col-md-6'>
								<div className='what-box text-center mb-3'>
									<div className='what-box__icon mb-30'>
										<img src='assets/img/icon/phone-operator.svg' alt='' />
									</div>
									<h3>Do you want to teach here?</h3>
									<p>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										di nonumy eirmod tempor invidunt ut labore et dolore magn
										aliq erat.
									</p>
									<a href='contact.html' className='theme_btn border_btn'>
										Register Now
									</a>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-6'>
								<div className='what-box text-center mb-3'>
									<div className='what-box__icon mb-30'>
										<img src='assets/img/icon/graduate.svg' alt='' />
									</div>
									<h3>Do you want to learn here?</h3>
									<p>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										di nonumy eirmod tempor invidunt ut labore et dolore magn
										aliq erat.
									</p>
									<a
										href='contact.html'
										className='theme_btn border_btn active'
									>
										Register Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*what-loking-for end*/}
				{/* course-instructor start */}
				<section className='course-instructor nav-style-two f-round-bg pt-150 pb-120 pt-md-95 pt-xs-95'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-8 col-lg-9'>
								<div className='section-title text-center text-md-start mb-60'>
									<h5 className='bottom-line mb-25'>Our Instructor</h5>
									<h2 className='mb-25'>Explore Experienced Instructor</h2>
								</div>
							</div>
						</div>
						<div className='instructor-active owl-carousel'>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/01.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>John Zlathan</a>
										</h4>
										<p>Software Development</p>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/02.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>Mally Yan</a>
										</h4>
										<p>UI/UX Designer</p>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/03.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>Mesud Lamb</a>
										</h4>
										<p>Programmer</p>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/04.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>Havana Lyon</a>
										</h4>
										<p>Digital Marketing</p>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/01.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>John Zlathan</a>
										</h4>
										<p>Software Development</p>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='z-instructors text-center mb-30'>
									<div className='z-instructors__thumb mb-15'>
										<img src='assets/img/instructor/02.jpg' alt='' />
										<div className='social-media'>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
											<a href='#'>
												<i className='fab fa-youtube' />
											</a>
										</div>
									</div>
									<div className='z-instructors__content'>
										<h4 className='sub-title mb-10'>
											<a href='instructor-profile.html'>Mally Yan</a>
										</h4>
										<p>UI/UX Designer</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* course-instructor end */}
			</div>
		</div>
	);
};

export default AboutPage;

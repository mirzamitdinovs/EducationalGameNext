import Breadcrumb from 'components/Breadcrumb';
import GreatDeals from 'components/GreatDeals';

const CoursesPage = () => {
	return (
		<div style={{ paddingTop: '130px' }}>
			<Breadcrumb title='Courses' path='/courses' />

			<GreatDeals />
			<section className='feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-75 pt-xs-95 pb-xs-70'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='section-title text-center mb-30'>
								<h5 className='bottom-line mb-25'>Featured Courses</h5>
								<h2>Explore our Popular Courses</h2>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-xl-12 text-center'>
							<div className='portfolio-menu mb-60'>
								<button className='gf_btn active' data-filter='*'>
									All
								</button>
								<button className='gf_btn' data-filter='.cat1'>
									Career
								</button>
								<button className='gf_btn' data-filter='.cat2'>
									Development
								</button>
								<button className='gf_btn' data-filter='.cat3'>
									Business
								</button>
								<button className='gf_btn' data-filter='.cat4'>
									science
								</button>
								<button className='gf_btn' data-filter='.cat5'>
									Design
								</button>
							</div>
						</div>
					</div>
					<div className='grid row'>
						<div className='col-lg-4 col-md-6 grid-item cat2 cat3'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/13.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 grid-item cat1 cat2'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/14.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 grid-item cat2'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/15.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 grid-item cat1'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/16.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 grid-item cat3'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/17.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 grid-item cat2 cat1'>
							<div className='z-gallery z-gallery-two gallery-03 mb-30'>
								<div className='z-gallery__thumb mb-20'>
									<a href='course-details.html'>
										<img
											className='img-fluid'
											src='assets/img/course/18.jpg'
											alt=''
										/>
									</a>
									<div className='heart-icon'>
										<i className='fas fa-heart' />
									</div>
									<div className='research-tag'>
										<span>Research</span>
										<span>Tag</span>
									</div>
								</div>
								<div className='z-gallery__content pos-rel'>
									<div className='course__meta d-flex align-items-center justify-content-between mb-15'>
										<span>
											<img
												className='icon'
												src='assets/img/icon/time.svg'
												alt='course-meta'
											/>{' '}
											12 Periods
										</span>
										<span>
											<img
												className='icon'
												src='assets/img/icon/bar-chart.svg'
												alt='course-meta'
											/>{' '}
											Intermediate
										</span>
									</div>
									<h4 className='sub-title mb-15'>
										<a href='course-details.html'>
											Take Your Career to the Next Level Future
										</a>
									</h4>
									<p className='mb-20'>
										There are many variations of passages of with Lorem Ipsum
										available.
									</p>
									<div className='course__authors  d-xl-flex align-items-center justify-content-between mb-20'>
										<div className='course__authors-box d-flex align-items-center'>
											<img src='assets/img/course/in7.png' alt='' />
											<div className='course__authors-box-text ml-10'>
												<h5>Mark Herry</h5>
												<span>Career Developer</span>
											</div>
										</div>
										<p>
											<span>6593+</span> Students
										</p>
									</div>
									<div className='feedback-tag pt-20'>
										<span>
											4.8 <i className='fas fa-star' /> <b>(256)</b>
										</span>
										<a
											href='course-details.html'
											className='read_more float-end'
										>
											Learn More+
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xxl-12 mt-20 text-center mb-20'>
							<a href='courses.html' className='theme_btn'>
								Explore More
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* feature-course end */}
			{/*what-loking-for start*/}
			<section className='what-looking-for pos-rel gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='what-blur-shape-one' />
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
									di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
									erat.
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
									di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
									erat.
								</p>
								<a href='contact.html' className='theme_btn border_btn active'>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CoursesPage;

const FeaturedCourses = () => {
	return (
		<section className='feature-course pt-50 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-12'>
						<div className='section-title text-center mb-50'>
							<h2>Explore our Popular Courses</h2>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-xl-12 text-center'>
						<div className='portfolio-menu mb-30'>
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
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/01.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in1.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Take Your Career to the Next Level Future
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 grid-item cat1 cat3 cat4'>
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/02.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in2.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Your Career to build for the pro level
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 grid-item cat2 cat1 cat5'>
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/03.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in3.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Take A Course For You Biright Future
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 grid-item cat2 cat3'>
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/04.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in4.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Take Your Career to the Next Level Future
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 grid-item cat5 cat4'>
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/05.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in5.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Your Career to build for the pro level
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 grid-item cat3 cat1'>
						<div className='z-gallery mb-30'>
							<div className='z-gallery__thumb mb-20'>
								<a href='course-details.html'>
									<img
										className='img-fluid'
										src='assets/img/course/06.png'
										alt=''
									/>
								</a>
								<div className='feedback-tag'>4.8(256)</div>
								<div className='heart-icon'>
									<i className='fas fa-heart' />
								</div>
							</div>
							<div className='z-gallery__content'>
								<div className='course__tag mb-15'>
									<span>Science</span>
									<span>Lab</span>
									<a className='f-right' href='instructor-details.html'>
										<img src='assets/img/course/in6.png' alt='' />
									</a>
								</div>
								<h4 className='sub-title mb-20'>
									<a href='course-details.html'>
										Take A Course For You Biright Future
									</a>
								</h4>
								<div className='course__meta'>
									<span>
										<img
											className='icon'
											src='assets/img/icon/time.svg'
											alt='course-meta'
										/>
										12 Class
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/bar-chart.svg'
											alt='course-meta'
										/>
										Higher
									</span>
									<span>
										<img
											className='icon'
											src='assets/img/icon/user.svg'
											alt='course-meta'
										/>
										6395+
									</span>
									<span>$260</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedCourses;

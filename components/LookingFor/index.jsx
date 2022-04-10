import SubjectCard from 'components/cards/SubjectCard';
import Link from 'next/link';

const LookingFor = () => {
	return (
		<section className='what-looking-for pos-rel'>
			<div className='what-blur-shape-one' />
			<div className='what-blur-shape-two' />
			<div className='what-look-bg gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='section-title text-center mb-55'>
								<h5 className='bottom-line mb-25'>Teachers &amp; Students</h5>
								<h2>What you Looking For?</h2>
							</div>
						</div>
					</div>
					<div className='row mb-85'>
						<div className='col-xl-6 col-lg-6 col-md-6'>
							<div
								className='what-box text-center mb-35 wow fadeInUp2 animated'
								data-wow-delay='.3s'
							>
								<div className='what-box__icon mb-30'>
									<img src='assets/img/icon/phone-operator.svg' alt='' />
								</div>
								<h3>Do you want to teach here?</h3>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
									erat.
								</p>
								<Link href='/contact'>
									<a className='theme_btn border_btn'>Register Now</a>
								</Link>
							</div>
						</div>
						<div className='col-xl-6 col-lg-6 col-md-6'>
							<div
								className='what-box text-center mb-35 wow fadeInUp2 animated'
								data-wow-delay='.3s'
							>
								<div className='what-box__icon mb-30'>
									<img src='assets/img/icon/graduate.svg' alt='' />
								</div>
								<h3>Do you want to learn here?</h3>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
									erat.
								</p>
								<Link href='/contact'>
									<a className='theme_btn border_btn active'>Register Now</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='categoris-container'>
						<div className='col-xl-12'>
							<div className='section-title text-center mb-55'>
								<h5 className='bottom-line mb-25'>Browse Categories</h5>
								<h2>Explore our Online Subjects</h2>
							</div>
						</div>
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5'>
							<SubjectCard
								icon='assets/img/category-icon/curiculum.png'
								title='Curiculum'
								link='/curiculum'
							/>
							<SubjectCard
								icon='assets/img/category-icon/books.png'
								title='Books'
								link='/books'
							/>
							<SubjectCard
								icon='assets/img/category-icon/games.png'
								title='Games'
								link='/games'
							/>
							<SubjectCard
								icon='assets/img/category-icon/worksheets.png'
								title='Worksheets'
								link='/worksheets'
							/>
							<SubjectCard
								icon='assets/img/category-icon/videos.png'
								title='Videos'
								link='/videos'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LookingFor;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FeedbackSlider = () => {
	return (
		<div className="feedback-area bg-fffaf3 ptb-100">
			<div className="container">
				<Swiper className="feedback-slides-two owl-carousel owl-theme">
					<SwiperSlide>
						<div className="single-feedback-box">
							<p>
							I've been using this website for a few months now and it has been a game-changer for me. As someone who was struggling to figure out what career path to take, the platform's guidance and curated courses have helped me gain clarity and confidence in my choices. The best part is that universities can also enroll and provide information about their programs, so I feel like I have access to a wealth of information and opportunities that I wouldn't have otherwise. Thank you so much for creating such a useful resource!
							</p>
							<div className="client-info d-flex align-items-center">
								<img
									src="/images/user1.jpg"
									className="rounded-circle"
									alt="image"
								/>
								<div className="title">
									<h3>John Smith</h3>
									<span>Python Developer</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-feedback-box">
							<p>
							I was looking for a platform that could provide me with the best courses to help me excel in my chosen field, and I found this website. The user-friendly interface and easy navigation make it simple for me to find what I am looking for. The website's offering of courses from top-rated institutions is really impressive, and it's great to see that universities can also provide information about their programs. Overall, I would highly recommend this website to any student looking for guidance and support in their career path.
							</p>
							<div className="client-info d-flex align-items-center">
								<img
									src="/images/user2.jpg"
									className="rounded-circle"
									alt="image"
								/>
								<div className="title">
									<h3>Sarah Taylor</h3>
									<span>PHP Developer</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-feedback-box">
							<p>
							As a university administrator, I was looking for a way to reach potential students and provide them with information about our institution. This website not only allows us to do that, but it also provides a platform for students to find courses and get guidance on their career paths. I think this is an amazing resource for students, and it has been a great way for us to connect with potential applicants. I would highly recommend this website to any university or student looking for a comprehensive and user-friendly platform for career guidance and education.
							</p>
							<div className="client-info d-flex align-items-center">
								<img
									src="/images/user1.jpg"
									className="rounded-circle"
									alt="image"
								/>
								<div className="title">
									<h3>David Warner</h3>
									<span>QA Developer</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="divider2"></div>
			<div className="divider3"></div>
			<div className="shape2">
				<img src="/images/shape2.png" alt="image" />
			</div>
			<div className="shape3">
				<img src="/images/shape3.png" alt="image" />
			</div>
			<div className="shape4">
				<img src="/images/shape4.png" alt="image" />
			</div>
			<div className="shape9">
				<img src="/images/shape8.svg" alt="image" />
			</div>
		</div>
	);
};

export default FeedbackSlider;

import React from 'react';
import './Testimonial.css';
import TestimonialCard from '../TestmonialCard/TestmonialCard';

export default function TestimonialCarousel() {
  const testimonialsData = [
    {
      companyImg:"assets/HDFC_Bank.png",
      text: "At HDFC Bank, we needed a way to deliver consistent, high-quality training across a geographically dispersed workforce. The Wise Blend's custom eLearning solutions exceeded our expectations. Their engaging and interactive courses helped us significantly improve employee knowledge retention and boost overall training efficiency.",
      avatarSrc: "assets/aloka.webp",
      name: "Aloka Tawde",
      title: "Vice President",
      company: "L&D at HDFC Bank",
    },
    {
      companyImg:"assets/panasonic-logo.svg",
      text: "Compliance training can be dry and tedious. The Wise Blend helped us transform that experience for our employees at Panasonic. Their creative approach resulted in dynamic eLearning modules that kept our team engaged and ensured they mastered the critical legal and compliance topics.",
      avatarSrc: "assets/anupam.webp",
      name: "Anupam Lohia",
      title: "Senior Manager",
      company: "Legal & Compliance"
    },
    {
      companyImg:"assets/o9-solutions-logo.svg",
      text: "The Wise Blend became a valuable partner for o9 Solutions. Their expertise in custom eLearning development helped us create targeted training programs that perfectly aligned with our specific skills gaps. We've seen a marked improvement in employee performance and a more confident workforce, thanks to The Wise Blend's solutions.",
      avatarSrc: "assets/rakesh.webp",
      name: "Rakesh Kishore",
      title: "Sr. Manager",
       company: "Education Services"
    },
    // Add more testimonials here...
  ];

  return (
    <div className="testimonial-container">
      <div className="our-partner-3">
        <div className="our-partner-content-3">
          <div className="top-3">
            <div>Here's what our clients have to say</div>
            <div>Real Stories, Real Transformations</div>
          </div>
        </div>
      </div>
      <div className="testimonial-slider">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

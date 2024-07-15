import React from 'react';
import './Solutions.css';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo 3.png';

function QuoteCard(props) {
  return (
    <figure className="snip1157">
      <blockquote>
        {props.quote}
        <div className="arrow"></div>
      </blockquote>
      <img src={props.imageUrl} alt={props.altText} />
      <div className="author">
        <h5>{props.authorName}<span>{props.authorWebsite}</span></h5>
      </div>
    </figure>
  );
}

const Solutions = () => {
  return (
    <div id="solutions">
      <div className="tag">
        <h1>Effortlessly manage your documents while ensuring your data remains safe and secure.</h1>
      </div>

      <div className="ytvideo">
        <iframe
          width="65%"
          height="500px"
          src="https://www.youtube.com/embed/rvgVsr3RC5s?si=wvNhyteMP72tQ9bU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="yt"
        ></iframe>
      </div>

      <div className="testimonial">
        <h1>Website trusted by 1 Million People</h1>
        <h3>Over 208,500+ professionals worldwide love us</h3>
      </div>

      <div className="quote-cards-container">
        <QuoteCard
          quote="You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak."
          imageUrl={logo1}
          altText="sq-sample3"
          authorName="Pelican Steve"
          authorWebsite="LIttleSnippets.net"
        />
        <QuoteCard
          quote="Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down."
          imageUrl={logo2}
          altText="sq-sample27"
          authorName="Max Conversion"
          authorWebsite="LIttleSnippets.net"
        />
        <QuoteCard
          quote="My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions."
          imageUrl={logo3}
          altText="sq-sample17"
          authorName="Eleanor Faint"
          authorWebsite="LIttleSnippets.net"
        />
      </div>
    </div>
  );
}

export default Solutions;


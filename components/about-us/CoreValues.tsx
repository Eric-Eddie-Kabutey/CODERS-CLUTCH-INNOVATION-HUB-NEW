'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const CoreValues: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const elements = [...cardsRef.current]; // Avoid stale ref issue

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="core-values">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>

        <div className="values-grid">
          {/* Row 1 */}
          <div className="row row-1">
            <div className="card creativity" ref={addToRefs}>
              <div className="card-content">
                <h3 className="card-title">Creativity</h3>
                <p className="card-description">
                  We foster creativity, transforming innovative ideas into viable products by encouraging unique solutions and thinking outside the box.
                </p>
              </div>
              <div className="card-number">01</div>
            </div>

            <div className="image-container" ref={addToRefs}>
              <Image
                src="https://kedrus.io/wp-content/uploads/2024/08/control.jpeg"
                alt="Creativity in action"
                width={600}
                height={400}
                className="value-image"
                priority
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row row-2">
            <div className="card empathy" ref={addToRefs}>
              <div className="card-content">
                <h3 className="card-title">Empathy</h3>
                <p className="card-description">
                  We understand non-tech founders&#39; challenges, integrating their vision and concerns into the development process through active listening and collaboration.
                </p>
              </div>
              <div className="card-number">02</div>
            </div>

            <div className="card diligent" ref={addToRefs}>
              <div className="card-content">
                <h3 className="card-title">Diligent</h3>
                <p className="card-description">
                  Our diligence ensures that every step, from idea to product, is handled with meticulous care and precision, delivering high-quality outcomes that meet founders&#39; expectations.
                </p>
              </div>
              <div className="card-number">03</div>
            </div>

            <div className="image-container middle-image" ref={addToRefs}>
              <Image
                src="https://kedrus.io/wp-content/uploads/2024/06/Kedrus-Image.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="value-image"
                priority
              />
            </div>

            <div className="card reliable" ref={addToRefs}>
              <div className="card-content">
                <h3 className="card-title">Reliable</h3>
                <p className="card-description">
                  We provide consistent, dependable support throughout the entire product development journey, from concept to launch, ensuring founders&#39; success and trust in our partnership.
                </p>
              </div>
              <div className="card-number">05</div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row row-3">
            <div className="card adept" ref={addToRefs}>
              <div className="card-content">
                <h3 className="card-title">Adept</h3>
                <p className="card-description">
                  Our adept team brings high-level skill and expertise, efficiently navigating complex challenges to translate innovative ideas into robust, scalable products.
                </p>
              </div>
              <div className="card-number">04</div>
            </div>
          </div>
        </div>
      </div>

      {/* Import full CSS separately for clarity or keep inline below */}
      <style jsx>{`
        .core-values {
          padding: 80px 0;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 60px;
          color: #0b2027;
          position: relative;
        }

        .section-title:after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #e6f6d2, #0b2027);
          margin: 15px auto;
          border-radius: 2px;
        }

        .values-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .row {
          display: flex;
          gap: 30px;
        }

        .row-1,
        .row-3 {
          justify-content: space-between;
        }

        .row-1 .card,
        .row-3 .card,
        .row-1 .image-container {
          width: 45%;
        }

        .row-2 {
          justify-content: space-between;
        }

        .row-2 .card,
        .row-2 .image-container {
          width: 22%;
        }

        .card {
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease;
          min-height: 300px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .card.animate-in,
        .image-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover,
        .image-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-number {
          font-size: 3rem;
          font-weight: 800;
          opacity: 0.15;
          position: absolute;
          bottom: 10px;
          right: 20px;
          z-index: 1;
        }

        .image-container {
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          overflow: hidden;
        }

        .value-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          object-fit: cover;
        }

        .row-1 .value-image {
          border-radius: 20px 60px 20px 20px;
        }

        .row-2 .value-image {
          border-radius: 60px 20px 20px 20px;
        }

        .card.creativity {
          background-color: #e6f6d2;
          border-radius: 20px 60px 20px 20px;
        }

        .card.empathy,
        .card.diligent {
          background-color: #0b2027;
          color: white;
        }

        .card.empathy {
          border-radius: 20px 20px 60px 20px;
        }

        .card.diligent {
          border-radius: 20px 20px 20px 60px;
        }

        .card.reliable {
          background-color: #e6f6d2;
          border-radius: 20px 20px 20px 60px;
        }

        .card.adept {
          background-color: #e6f6d2;
          border-radius: 20px 60px 20px 20px;
        }

        @media (max-width: 992px) {
          .row {
            flex-direction: column;
          }

          .row .card,
          .row .image-container {
            width: 100%;
          }

          .card {
            min-height: 250px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .card-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CoreValues;

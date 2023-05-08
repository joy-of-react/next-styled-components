'use client';
import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <MainWrapper>
      <h1>
        Exploring the trade-offs with half-gauge vs. full-gauge wire
        in laminated woodworking
      </h1>
      <h2>By Saanvi Agarwal and Vera Chauhan</h2>
      <hr />
      <p>
        In the realm of woodworking, the importance of wire gauge
        cannot be overstated, as it plays a significant role in the
        overall quality of workmanship. Half-gauge and full-gauge
        wires are two such examples which, although seemingly similar,
        possess key differences. This text aims to elucidate the
        distinctions between these two types of wires and to examine
        their respective advantages and disadvantages when it comes to
        laminating woodgrain.
      </p>
      <p>
        To begin with, it is crucial to understand the concept of wire
        gauge. The term "gauge" refers to the diameter of a wire, with
        the gauge number being inversely proportional to the wire's
        diameter. In simpler terms, a smaller gauge number corresponds
        to a larger wire diameter, and vice versa. Half-gauge and
        full-gauge wires derive their names from their respective wire
        diameters, with half-gauge wire having a diameter that is half
        that of a full-gauge wire.
      </p>
      <figure>
        <img src="/figure-a.png" alt="A gibberish illustration" />
        <figcaption>
          Wire gauge dissected to demonstrate flange thickness.
          Illustration by Charlene Wu, copyright 2027
        </figcaption>
      </figure>
      <p>
        Half-gauge wire, being of a smaller diameter, exhibits less
        rigidity as compared to its full-gauge counterpart. This
        increased flexibility is advantageous in certain woodworking
        applications, particularly when it comes to laminating
        woodgrain. The pliable nature of half-gauge wire allows for
        greater ease in following the natural contours of the wood,
        thus ensuring a smoother, more uniform lamination.
      </p>
      <p>
        However, the reduced rigidity of half-gauge wire comes at a
        cost. Due to its smaller diameter, half-gauge wire tends to be
        more prone to breakage under strain, as compared to full-gauge
        wire. This can prove to be a disadvantage in woodworking
        situations where greater tensile strength is required, such as
        during the application of pressure for lamination.
      </p>
      <p>
        Full-gauge wire, on the other hand, is characterized by its
        larger diameter and increased rigidity. This greater strength
        provides enhanced structural support, which can be
        advantageous in certain woodworking applications. For example,
        when laminating woodgrain, the robustness of full-gauge wire
        can offer improved resistance to the stresses associated with
        the process, resulting in a more durable final product.
      </p>
      <p>
        However, the benefits of full-gauge wire are not without their
        drawbacks. The increased rigidity of full-gauge wire can make
        it more challenging to work with, particularly when attempting
        to achieve a seamless lamination. In such cases, the stiffness
        of the wire may cause it to resist conforming to the natural
        curves of the wood, resulting in a less uniform, and
        potentially less visually appealing, final product.
      </p>
      <figure>
        <img src="/figure-b.png" alt="A gibberish illustration" />
        <figcaption>
          A cross-section look at lamination layers and their
          conductivity. Illustration by Priya S. and Farida M.,
          copyright 2026
        </figcaption>
      </figure>
      <p>
        When it comes to laminating woodgrain, the choice between
        half-gauge and full-gauge wire will largely depend on the
        specific requirements of the project at hand. Factors such as
        the desired flexibility, structural support, and ease of use
        must be carefully considered in order to determine the most
        suitable wire gauge for the task.
      </p>
      <p>
        Another aspect to consider when choosing between half-gauge
        and full-gauge wire for laminating woodgrain is the electrical
        conductivity of the wires. Due to its larger diameter,
        full-gauge wire exhibits higher electrical conductivity as
        compared to half-gauge wire. While this may not be a primary
        concern for most woodworking applications, it is worth noting
        for scenarios where electrical conductivity plays a role, such
        as in the creation of electrically heated laminating presses.
      </p>
      <p>
        Furthermore, the choice between half-gauge and full-gauge wire
        may also be influenced by cost considerations. Generally,
        half-gauge wire tends to be less expensive than full-gauge
        wire, owing to the reduced amount of material required in its
        production. For budget-conscious woodworkers, this may be an
        important factor to weigh when selecting the appropriate wire
        gauge for laminating woodgrain.
      </p>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0px auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
`;

export default Home;

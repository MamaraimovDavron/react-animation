import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 84%;
  /* background-color: red; */
  height: 100vh;
  background-image: url("https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  h2 {
    position: absolute;
  }
  p {
    font-size: 50px;
  }
`;

const Right = () => {
  return (
    <Container>
      <h2>Davron Mamaraimov</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eligendi,
        nihil impedit quam voluptatibus aliquam possimus, vero voluptates optio
        totam veniam accusamus quis dicta blanditiis esse sit! Maxime, provident
        fugiat? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem veniam iste accusantium. Ea, amet ipsam minima, eaque et
        neque beatae sit debitis facere porro repellendus molestiae suscipit
        vero placeat minus eum? Facere animi fuga perferendis ab suscipit, dolor
        assumenda expedita debitis perspiciatis delectus itaque in odio vero
        minus, quis sint molestiae illo. Sit, recusandae. Cupiditate ab delectus
        nobis dolor beatae tempora ut, iste omnis at suscipit eligendi optio
        voluptates praesentium eius consequatur officia deserunt? Accusamus ea
        nulla in fuga iure consectetur nemo nesciunt, dolor mollitia laborum
        quidem aut sequi consequatur fugit repellat vero! Id voluptates
        consequuntur nostrum incidunt laudantium est dicta a voluptas quo amet
        nobis, consectetur porro minima repudiandae optio tempora molestias!
        Quae deserunt repellendus officia adipisci voluptatem distinctio magni
        quia, asperiores ducimus dolorem facilis ex excepturi impedit non.
        Beatae ducimus assumenda excepturi totam nulla, dignissimos molestiae
        doloremque, dolorum corrupti laboriosam aliquam ad, suscipit iste
        facilis. Laudantium natus sed culpa voluptatum earum accusamus at, aut
        ullam quaerat iusto animi quas odio totam reiciendis voluptatem eveniet
        cum voluptatibus neque beatae alias molestiae mollitia expedita?
        Nesciunt quo, nobis consequuntur necessitatibus magnam esse illum aut
        itaque iste eos quod harum earum recusandae at facilis, voluptates a
        doloribus quasi, consequatur corporis aspernatur inventore!
      </p>
    </Container>
  );
};

export default Right;

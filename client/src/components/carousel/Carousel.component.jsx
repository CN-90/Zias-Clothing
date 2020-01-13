import React from 'react';

import '../../App.scss';
import './Carousel.scss';
import ProductCard from './../product-card/ProductCard.component';

const Carousel = ({ title, styles }) => {
  return (
    <div className="carousel" style={styles}>
      <div className="carousel-heading">
        <h1 className="light header-secondary">{title}</h1>
      </div>
      <div className="product-container">
        <ProductCard
          name="Slim Collarless Blazer In Jersey"
          price={29.99}
          img="http://xpert-idea.com/prestashop/jakiro/demo/two/37-home_default/blouse.jpg"
          imgHover="http://xpert-idea.com/prestashop/jakiro/demo/two/38-home_default/blouse.jpg"
          onSale={true}
        />
        <ProductCard
          name="Roullex Coat"
          price={39.99}
          img="https://previews.dropbox.com/p/thumb/AAru8NSmXAejaqBdvzLfCq-hU1nUfUSvi8IgmjjozblqGkBNs3jKsfHE60DDIoxqmHW4Ee6NyX7dnFf0JujWruaHzI7UDvtw7C5Jiw1PA_Rzrn0EvyILqafOTXysebCnY8oaoX0sTY6Wfpb-2eOeuMvE_LDLgmbeUTwMGxVDLSTNHhCGpRlVx5Bs6GHDgyBar-OiPjmloGUpReJveqdKRiKBLXtBjCGDxlIXB8OANrW7xP3aHLI-Ci2BTkkYxTVeMinZGgyeeBrMENwWbfjI8zboSKLVubH_ev-lS8tklnDK7c9z6IK9xZNdzVvZ-r-lXVhJgKF-EEuETy9xWNuV6Rh5rHlia--TdggzAn8RGm9krA/p.jpeg?fv_content=true&size_mode=5"
          imgHover="https://cdn.shopify.com/s/files/1/2073/9503/products/mzz73839_stone_xl_1_2048x.jpg?v=1498709783"
          onSale={true}
        />
        <ProductCard
          name="Bardot neckline crop top"
          price={27.99}
          img="https://previews.dropbox.com/p/thumb/AAoQHEkGB5L5bmVKlZaS_nq5UoyKqKnSX4Xc0wMPgGrDJuTPjTB7LRGXuzQnUYIQvJWypKD8Qa8CgoFJvxte8J3koqlMZljm8jehd0miro6101cTyL5-x9luRKQwKY3xFwDm9_hKTdrF9qalkg2anapT9WdxzfIdkNPy0ownLwDmCapj6UyDJSCg22LEiyhn_XmPhfNPLEQGhHg6BxktEzAaNDBVZCnt7H3uN0fWJYMPT9iGs9clXS3TweAyS9QbKDyHyYknpPVgqNllkmsby3pZRSNlZG1SxsDXVdMhOurf7AZGNpahXbAmGKtJTCPG2S5RUc-Oml7Oivofddgi2uSTHuAr5DhFV-aworhExzTbQw/p.jpeg?fv_content=true&size_mode=5"
          imgHover="https://previews.dropbox.com/p/thumb/AAp4AtoALObwHFrETS-4uUgGQZn4HPK4iKkQzSvLiM9UotnLwFNL8O5EfPmTKNnxRBZbNg0efYn5ue8Fj8edMVVytZvil5IVyu_oPqmVkwbBU6D99l052C15nMebBhgyy1GZ9-TAB9oLBe5wSbqVtKBmUfay_v-bV6KisoAnVj2BqwKcauCatvOv8RJPfzUEEK9o5yvo3hWmCZcFskh0D0GPLa_76ZgH1TJCMxA3n2rXe3q34sTeBgbOWNBp_FGBC2xP0yitytZ1zfJneUR_IRjaawLu5BrRF5S08Ok2zbZ8YSkNBioHKZE9ren0stXl8KUSqClSRPyayDc3gIAK_WLSyB6muVWsnqN0P8AWM4J9UQ/p.jpeg?fv_content=true&size_mode=5"
          onSale={true}
        />
        <ProductCard
          name="Long Sleeves Crop Top"
          price={19.99}
          img="https://previews.dropbox.com/p/thumb/AAo21G_nkL6ZkSwv0H4lx9QS2zcfzoAEHwUd8D8kfnVeXfTeQ4RaTcRjt6wIPLENjYLpgw3lUAtJBLxTXoF9ZMkVMUZA3JR8jdni8uskFQNa9FaqX7Iv_Dp4ZRrOi40VzTO18fBs8vVsr961Ig_AkSLhlx88FSmVx1IpRpoTx9VMzuu7VSyvosg4nd-zi2mLgoHHiFk1vR84oo4HADLWHOOZiswedvykZFAUBqOTTFzLblSndaFZmLMgdZMGo4_tzBd65ifIa3omfek0GsKAX9IRuGlm3mW7EOCX7pSfciDgVr3ZjeQyLn7Zw7zknPuCXM17c-PvnlEjEC4LN8vETSPmmQhsdNxsYHokM9z95rYjgQ/p.jpeg?fv_content=true&size_mode=5"
          imgHover="https://previews.dropbox.com/p/thumb/AAqhc5lMd5pHS_1XcTMm636tyMb64yDYeKZIbaojJ2tSSyKLV5vxjCVoA9iIciWKEa_oyfvOSaOsLRwuOnteNtwXI_4g9dH3eY3IEqx1hhB6TdptxQ3sz63H9DSBdrUbqI-o6qDG17JA-yLJFmuZDLkoqVGm1VdpUt0AkOkEb4yXynPXxWuF7zf7EMt4hT81MKtG4nki1ESgy3QF0Oko9zwLtkkhqan4tqw-w7oQK5lzjEXRCDkIoPXgXK3j-V7gCKf04sxpw1Bj3KI86SLGxQz4CC-JebD7RaQdZqEpDc7GNYYhocXF5Sv0b7Su_sWp620w-j2sDlGJ-TfsMpKIOzq7SVH9bS3kkeA3pLq1cbPkpg/p.jpeg?fv_content=true&size_mode=5"
          onSale={true}
        />
      </div>
    </div>
  );
};

export default Carousel;

import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "./imgs/Next.svg";
import back from "./imgs/Back.svg";
import styles from "./styles.module.scss";

type Props = {
  /* poducts: any; */
  children: ReactNode;
  itemsToShow: number;
};

export default function Carousel(props: Props) {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.itemsToShow,
    /* slidesToShow: 1, */
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return <Slider {...settings}>{props.children}</Slider>;
}

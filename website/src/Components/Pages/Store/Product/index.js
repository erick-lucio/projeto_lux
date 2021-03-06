import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  ProductDiv,
  TextDiv,
  Text,
  Button,
  Image,
  Button2,
  Image2,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import addCart from "../../../../assets/icons/icons8-add-shopping-cart-64.png";
import DefaultImg from "../../../../assets/imgs/img_dress.jpeg";
import { context1 } from "../../../../Context/Context";
const Product = (props) => {
  const { stateCounter, dispatchCounter, stateCart, dispatchCart } = useContext(
    context1
  );
  let history = useHistory();
  const [product, setProduct] = useState();
  let { id_param } = useParams();
  function genId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 35);
  }
  function getProduct() {
    try {
      return fetch("/.netlify/functions/read-product?id=" + id_param).then(
        (response) => {
          return response.json().then((json) => {
            return json;
          });
        }
      );
    } catch (error) {}
  }
  useEffect(() => {
    getProduct().then((response) => {
      if (response.data != undefined) {
        import("../../../../assets/imgs/" + response.data.img_name).then((img) => {
          setProduct({
            name: response.data.product_name,
            price: response.data.price,
            img_path: img.default,
          });
        });
      }
    });
  }, []);
  useEffect(() => {}, [product]);
  const addToCart = () => {
    dispatchCounter({ type: "increment" });
    dispatchCart({
      type: "CartAdd",
      product_name: product.name,
      product_price: product.price,
      img_path: product.img_path,
      id: genId(),
    });
  };

  if (product == undefined) {
    return (
      <Container>
        <ProductDiv>
          <TextDiv onClick={() => history.push("/")}>
            <Text fontsize={4} overcolor={true}>
              Produto não Encontrado
            </Text>
            <Text fontsize={3} overcolor={true}>
              Voltar ao menu principal
            </Text>
          </TextDiv>
        </ProductDiv>
      </Container>
    );
  } else {
    try {
      return (
        <Container>
          <ProductDiv>
            <Image src={product.img_path} height={300} width={350}></Image>
            <TextDiv>
              <Text fontsize={3.5}>{product.name}</Text>
              <Text fontsize={2.5} margintop={30}>
                Por apenas {product.price} reais
              </Text>
              <Text fontsize={2.5} margintop={50}>
                Perfeito para todas as ocasiões
              </Text>
              <Button2 onClick={() => addToCart()}>
                <Image2 src={addCart}></Image2>
                <Text fontsize={2.5}>Adicione ja ao Carrinho</Text>
              </Button2>
            </TextDiv>
          </ProductDiv>
        </Container>
      );
    } catch (error) {}
  }
};

export default Product;

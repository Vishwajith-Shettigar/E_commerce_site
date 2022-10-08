import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../mycomponent/Announcement'
import Newsletter from '../mycomponent/Newsletter'
import Navbar from '../mycomponent/Navbar'
import Footer from '../mycomponent/Footer';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useContext } from 'react'
import { globalinfo } from '../App'
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Container = styled.div`
`
const Wrapper = styled.div`

padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection: "column" })};

`
const ImageContainer = styled.div`

flex:1
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "50vh" })};
`
const InfoContainer = styled.div`
flex:1;

padding: 0px 50px;
${mobile({ padding: "10px" })};

`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin:20px 0px ;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
    display: flex;
    justify-content: space-between;
margin: 30px 0px;
${mobile({ width: "100%" })};
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;


`
const FilterColor = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
border: 1px solid black;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;


`
const FilterSizeOption = styled.option`
    

`


const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({ width: "100%" })};


`
const AmountContainer = styled.div`
    
display: flex;
align-items: center;
font-weight: 700;

cursor: pointer;
`
const Amount = styled.div`
margin:10px;
width:30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
padding: 4px;


`

const Button = styled.button`
    
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: bolder;

  &:hover{
    background-color: #fbf9f9;
  }
`
function Product() {
    const navigate=useNavigate()
    const { productId,jwtToken } = useContext(globalinfo);
    const [productinfo, setProductinfo] = useState();
    const [color, setColor] = useState();
    const [size,setSize]=useState();
    const [qty,setqty]=useState(1)
    console.log(productId.productid);



    useLayoutEffect(() => {
        Axios.get(`https://vishecomapi.herokuapp.com/api/products/find/${productId.productid}`)
            .then(res => {


                setProductinfo(res.data);


            })
    }, [productId])

    function addtocart()
    {
    
        console.log(color,size,qty)
           if(jwtToken.user===undefined)
           {
            window.alert("Login to proceed")
            navigate("/login")
           }else{
            // console.log(userId)
            Axios.post("https://vishecomapi.herokuapp.com/api/cart",{
              userid:jwtToken.userId.toString(),
              products:[{
                  productid:productId.productid,
                  title:productinfo.title,
                  quantity:qty,
                  color:color,
                  size:size,
                  price:productinfo.price,
                  img:productinfo.img
              }],

            },{
              headers:{
                token:"Barear "+jwtToken.user
              }
            }
            ).then(res=>console.log(res))
           }
    }

    function addqtySelect(e)
    {
       
        
        setqty(qty+1);
        
    }
    function minusqtySelect(e)
    {
       
        if(qty==1){
            
        }else
        setqty(qty-1);
        
    }

    function colorSelect(e) {
      setColor(e.target.value);
      console.log(color)
    }

    function sizeSelect(e)
    {
        setSize(e.target.value)
    }
    useEffect(() => {
        if (productinfo){
            setColor(productinfo.color[0])


            setSize(productinfo.size[0]);
            }
    }, [productinfo])
    if (productinfo) {

console.log(size,color)

        return (
            <Container>

                <Navbar />
                <Announcement />

                {



                    <Wrapper>
                        <ImageContainer>
                            <Image src={productinfo.img} />
                        </ImageContainer>
                        <InfoContainer>

                            <Title>{productinfo.title}</Title>
                            <Desc>{productinfo.desc}</Desc>
                            <Price>${productinfo.price}</Price>

                            <FilterContainer>
                                <Filter>
                                    <FilterTitle>Color</FilterTitle>
                                    {

                                        productinfo.color.map((color) => (

                                            <>
                                                <FilterColor color={color} value={color} onClick={(e) => { colorSelect(e) }} />

                                            </>
                                        ))
                                    }

                                </Filter>
                                <Filter>
                                    <FilterTitle>Size</FilterTitle>

                                    <FilterSize onChange={sizeSelect}>
                                        {
                                            productinfo.size.map((size) => (

                                                <>


                                                    <FilterSizeOption>{size}</FilterSizeOption>

                                                </>
                                            ))

                                        }


                                    </FilterSize>
                                </Filter>
                            </FilterContainer>

                            <AddContainer>

                                <AmountContainer>
                                    <Remove onClick={(e)=>{minusqtySelect(e)}} />
                                    <Amount>{qty}</Amount>
                                    <Add  onClick={(e)=>{addqtySelect(e)}}/>
                                </AmountContainer>

                                <Button onClick={addtocart}>Add to cart</Button>
                            </AddContainer>
                        </InfoContainer>
                    </Wrapper>

                }


                <Newsletter />
                <Footer />

            </Container>
        )
    }
}
export default Product
import React,{useState} from 'react'
import ItemCarousel from './ItemCarousel';

const Groceries = () => {
    const [items,setItems] = useState([{
        id:"1",image:"https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
    },{id:"2",image:"https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"},
    {id:"3",image:"https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70"},
    {id:"4",image:"https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"},
    {id:"5",image:"https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70"},
    {id:"6",image:"https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70"}])

    let imageSource = "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100";
    return (
        <>
            <ItemCarousel items={items} itemname={"Groceries"} imageSource={imageSource}/>   
        </>
    )
}

export default Groceries
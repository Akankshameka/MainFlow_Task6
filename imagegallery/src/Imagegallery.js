import React,{useState} from "react";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images=[
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/4000/3000",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/1000/1000",
  "https://picsum.photos/3000/4000",
  "https://picsum.photos/3000/1000",
  "https://picsum.photos/2000/1500",
  "https://picsum.photos/1900/2000",
  "https://picsum.photos/3200/1200",
  "https://picsum.photos/1000/3000",
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/1100/3000",
  "https://picsum.photos/1300/1500",
  "https://picsum.photos/4500/2000",
  "https://picsum.photos/6500/3000",
  "https://picsum.photos/2500/1000",
  "https://picsum.photos/1700/2000",
  "https://picsum.photos/4100/2000",
  "https://picsum.photos/1800/3000",
]
const Imagegallery =()=>{

    const [data,setdata]=useState({img:'',i:0 })    

    const viewImage=(img,i)=>{
        setdata({img,i})
    }

    const imgAction=(action)=>{
        let i=data.i;
        if(action==="next-img"){
            setdata({img:images[i+1],i:i+1});
        }
        if(action==="previous-img"){
            setdata({img:images[i-1],i:i-1});
        }
        if(!action){
            setdata({img:'',i:0})
        }
    }
    return( 
        <>
        {data.img &&
            <div style={{
                width:'100%',
                height:'100vh',
                background:'black',
                position:'fixed',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                overflow:'hidden',
            }}>
                <button style={{position:'absolute',top:'20px',right:'20px',fontSize:'20px'}} onClick={()=>imgAction()}>X</button>
                <button style={{padding:'10px',fontSize:'20px'}} onClick={()=>imgAction('previous-img')}>Previous</button>
                <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}}/>
                <button style={{padding:'10px',fontSize:'20px'}} onClick={()=>imgAction('next-img')}>Next</button>
            </div>
        }
        <div style={{padding:'10px'}}>
            <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                <Masonry gutter="20px">
                    {images.map((image,i)=>(
                        <img
                            key={i}
                            src={image}
                            style={{width:"100%",display:"block",cursor:"pointer"}}
                            alt=""
                            onClick={()=>viewImage(image,i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        
        </>
    );
};

export default Imagegallery;
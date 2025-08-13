import React from "react";
import Masonry from "../elements/Masonary";

const PhotoGallery = () => {
    const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1031/600/720?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1018/600/660?grayscale",
      url: "https://example.com/three",
      height: 250,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1016/600/520?grayscale",
      url: "https://example.com/three",
      height: 800,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1025/600/850?grayscale",
      url: "https://example.com/three",
      height: 100,
    },
     {
      id: "8",
      img: "https://picsum.photos/id/1065/600/590?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    
    {
      id: "9",
      img: "https://picsum.photos/id/1035/600/680?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1040/600/950?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "11",
      img: "https://picsum.photos/id/1043/600/600?grayscale",
      url: "https://example.com/three",
      height: 900,
    },
     {
      id: "12",
      img: "https://picsum.photos/id/1050/600/780?grayscale",
      url: "https://example.com/three",
      height: 200,
    },
     {
      id: "13",
      img: "https://picsum.photos/id/1055/600/640?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
     {
      id: "14",
      img: "https://picsum.photos/id/1060/600/820?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "15",
      img: "https://picsum.photos/id/1031/600/720?grayscale",
      url: "https://example.com/three",
      height: 500,
    },
    {
      id: "16",
      img: "https://picsum.photos/id/1025/600/850?grayscale",
      url: "https://example.com/three",
      height: 200,
    },
    
    // ... more items
];

    return (
        <div className="photo-gallery-container">
            <div className="photo-gallery-header">
                <h2>Previous Work</h2>
            </div>
            <div className="photo-gallery-content">
                <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}

                />
            </div>

        </div>
    );
}

export default PhotoGallery;


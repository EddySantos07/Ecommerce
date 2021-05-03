import React from "react";

// let SelectStyle = ({ styles, changeView }) => {
//   if (styles.length === undefined || styles.length === 0) {
//     return <div> place holder for when products api called </div>;
//   }

//   let slider = [];

//   return (
//     <>
//       <div className="SelectStyleContainer">
//         {styles.map((product, index) => {
//           const { photos } = product;

//           const { thumbnail_url } = photos[0];

//           return (
//             <img
//               key={index}
//               alt='style-image'
//               style={{ height: "100px", width: "100px" }}
//               src={thumbnail_url}
//               onClick={(e) => {
//                 changeView(e, product);
//               }}
//               className="styleWidgetimgs"
//             ></img>
//           );
//         })}
//       </div>
//     </>
//   );
// };

const SelectStyle = ({ CurrentStyles, CurrentStyle, HandleStyleChange }) => {
  // console.log(CurrentStyles, 'styles');
  const prop = CurrentStyles[1].defaultProp;
    // console.log(prop,'prop')
  if (prop) {
    return <div></div>;
  }

  return (
    <>
      <div className="StylesContainer">
        {CurrentStyles.map((Style, index) => {
            // console.log(Style,'url??')
          const { url } = Style.photos[0];

          return (
            <div
              className="Style"
              onClick={(e) => {
                HandleStyleChange(e, Style, index);
              }}
            >
              <img className="StyleImg" src={url} alt="style image" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectStyle;

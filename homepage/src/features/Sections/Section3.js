
import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "../../assets/css/style.css"
import codeSVG from "../../assets/images/no-Code-Required.svg"
import storeSVG from "../../assets/images/Ease-of-Extension.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import logo from "../../assets/images/icons/rectangle.svg"
import ring from "../../assets/images/icons/rectangle-fill.svg"
import bll from "../../assets/images/icons/ball.svg"
import tri from "../../assets/images/icons/triangle.svg"
export function Section3() {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu behavior
    // Additional custom logic if needed
  };
  return (
    <section className="features_wrapper section">

      <object className="svg_iocn shape_svg2" type="image/svg+xml" data={logo}></object>
      <object className="svg_iocn shape_svg" type="image/svg+xml" data={ring}></object>

      <object className="svg_iocn shape_svg3" type="image/svg+xml" data={bll}></object>

      <object className="svg_iocn shape_svg4" type="image/svg+xml" data={tri}></object>

      <div className="heading">
      <AnimationOnScroll animateIn="animate__fadeInDown" duration={1.2}>
        <div className="title ">Step into the Future of Retail</div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.2}>
        <p className="section--reveal">Revolutionizing the Shopping Experience by bridging the gap between <br/>
          Physical Retail and E-commerce!</p>
        </AnimationOnScroll>

      </div>

      <div className="grid_row section--reveal">
        <div className="col_flex">
          <div className="feat_item">
           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="136" height="136" viewBox="0 0 136 136">
            <defs>
              <clipPath id="clipPath">
                <rect id="Rectangle_46" data-name="Rectangle 46" width="136" height="136" fill="none"/>
              </clipPath>
              <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#16f6fe"/>
                <stop offset="0.107" stopColor="#1fe4fd"/>
                <stop offset="0.323" stopColor="#39b5fd"/>
                <stop offset="0.626" stopColor="#6169fc"/>
                <stop offset="1" stopColor="#9904fc"/>
              </linearGradient>
            </defs>
            <g id="Group_35" data-name="Group 35" clipPath="url(#clip-path)">
              <g id="Group_34" data-name="Group 34" transform="translate(19.788 17.702)">
                <path id="Path_94" data-name="Path 94" d="M-939.859,386.263c.008,2.637.034,5.274.019,7.911a5.336,5.336,0,0,1-3.532,5.161c-.2.091-.5.015-.6.313h-53.6c-.276-.329-.718-.329-1.065-.521a5.246,5.246,0,0,1-3.052-4.745c-.03-2.7,0-5.41.011-8.115.1.212.219.416.3.635a5.535,5.535,0,0,0,5.187,3.668q25.426.011,50.849,0a5.96,5.96,0,0,0,2.184-.484A5.842,5.842,0,0,0-939.859,386.263Z" transform="translate(1022.602 -294.107)" fill="#3b96d2"/>
                <path id="Path_95" data-name="Path 95" d="M-941.726,398.665c-1.4-.975-1.734-1.859-1.1-2.89.578-.944,1.583-1.035,2.98-.306-.03-1.522-.03-3.011-.03-4.533,0-8,.06-16.033,0-24.034a5.334,5.334,0,0,0-5.081-5.021c-2.554-.03-5.142,0-7.7.03-1.828,2.04-3.683,4.076-5.659,5.965a4.471,4.471,0,0,1-3.075,1.216h-18.741a4.475,4.475,0,0,1-3.1-1.216c-1.979-1.889-3.834-3.925-5.629-5.965-2.584-.03-5.172-.06-7.726-.03a5.4,5.4,0,0,0-5.081,5.141c-.034,9.494,0,18.953,0,28.447.514-.242.971-.638,1.609-.548a1.817,1.817,0,0,1,1.552,1.337,1.646,1.646,0,0,1-.638,1.919c-.82.638-1.7,1.247-2.558,1.855V425.59a25.622,25.622,0,0,0,3.015,2.1c3.8,2.644,7.6,5.293,11.409,7.911,5.081,3.5,10.132,6.966,15.183,10.495a2.064,2.064,0,0,0,2.644,0q14.6-10.087,29.24-20.169c.151-.125.272-.246.393-.336V400.033Q-940.769,399.347-941.726,398.665Zm-22.119-17.525a1.72,1.72,0,0,1,2.282-.517c1.337.82,2.618,1.764,3.9,2.678a1.794,1.794,0,0,1,.7,1.247,1.831,1.831,0,0,1-2.708,1.7c-1.337-.823-2.614-1.734-3.9-2.678A1.762,1.762,0,0,1-963.845,381.14Zm-9.339-5.262c.453-.336.941-.672,1.428-.975a1.745,1.745,0,0,1,1.949,0,13.627,13.627,0,0,1,1.61,1.1,1.7,1.7,0,0,1,.608,2.006,1.741,1.741,0,0,1-1.885,1.216,2.171,2.171,0,0,1-.608-.151,1.2,1.2,0,0,0-1.337-.03,1.734,1.734,0,0,1-2.372-.729A1.78,1.78,0,0,1-973.184,375.878Zm-10.559,7.3c1.156-.85,2.342-1.674,3.559-2.433a1.831,1.831,0,0,1,2.8,1.7,1.6,1.6,0,0,1-.7,1.216c-1.186.884-2.4,1.734-3.649,2.527a1.807,1.807,0,0,1-2.527-.487A1.789,1.789,0,0,1-983.743,383.177Zm-10.74,7.488a25.093,25.093,0,0,1,4.046-2.8,1.6,1.6,0,0,1,2.1.517,1.517,1.517,0,0,1,.091,2.1,17.848,17.848,0,0,1-4.594,3.226,1.8,1.8,0,0,1-.366.061,1.974,1.974,0,0,1-1.7-1.217A1.535,1.535,0,0,1-994.483,390.664Zm46.886,2.92a1.935,1.935,0,0,1-2.161-.457,11.667,11.667,0,0,0-1.216-.759c-.642-.487-1.341-.944-1.949-1.462a1.711,1.711,0,0,1-.363-2.4,1.673,1.673,0,0,1,2.248-.608c1.372.82,2.678,1.795,3.955,2.735a2.737,2.737,0,0,1,.612.914A1.987,1.987,0,0,1-947.6,393.584Z" transform="translate(1022.6 -361.869)" fill="url(#linear-gradient)"/>
                <path id="Path_96" data-name="Path 96" d="M-939.867,398.077c0,1.915,0,3.834-.03,5.75a5.72,5.72,0,0,1-3.287,3.8,5.923,5.923,0,0,1-2.191.484h-50.838a5.522,5.522,0,0,1-5.172-3.649c-.091-.242-.211-.427-.3-.638q0-9.905.03-19.807c-.03-1.337-.03-2.709-.03-4.076a7.571,7.571,0,0,1,1.639,1.156c.246.151.488.272.7.427q12.591,8.67,25.16,17.34a5.436,5.436,0,0,0,6.725.06q6.3-4.29,12.535-8.64c5.021-3.438,10.007-6.875,15.028-10.313C-939.9,386-939.867,392.021-939.867,398.077Z" transform="translate(1022.625 -311.659)" fill="url(#linear-gradient)"/>
                <path id="Path_97" data-name="Path 97" d="M-924.5,405.891q-7.514,5.151-15.024,10.306c-4.182,2.879-8.353,5.78-12.542,8.647a5.456,5.456,0,0,1-6.706-.053q-12.58-8.693-25.175-17.359c-.223-.155-.472-.28-.707-.416a7.766,7.766,0,0,0-1.651-1.167l-16.418-11.367c-.646-.446-1.3-.888-1.946-1.345a5.441,5.441,0,0,1,.019-9.244q8.71-6.041,17.45-12.047c.306-.215.6-.449.9-.676.525-.234,1-.65,1.625-.533a1.846,1.846,0,0,1,1.564,1.311,1.692,1.692,0,0,1-.642,1.919c-.835.654-1.715,1.251-2.577,1.87-5.451,3.744-10.914,7.473-16.354,11.239a1.786,1.786,0,0,0,.072,3.151c1.651,1.171,3.324,2.308,4.994,3.449q5.638,3.859,11.288,7.714a26.031,26.031,0,0,0,3.03,2.093q5.707,3.967,11.417,7.93c5.051,3.5,10.121,6.97,15.168,10.476a2.074,2.074,0,0,0,2.641.008q14.614-10.1,29.244-20.185a4.519,4.519,0,0,0,.389-.325c5.481-3.759,10.975-7.5,16.429-11.288a1.754,1.754,0,0,0-.087-3.026q-8.149-5.644-16.339-11.235c-.638-.461-1.273-.929-1.919-1.379-1.383-.956-1.73-1.855-1.1-2.875.582-.937,1.587-1.047,2.977-.317q6.965,4.834,13.928,9.667c1.439,1,2.886,1.976,4.318,2.977,3.543,2.474,3.6,6.9.057,9.365-5.791,4.038-11.617,8.028-17.427,12.036C-923.911,405.426-924.2,405.665-924.5,405.891Z" transform="translate(1007.229 -337.569)" fill="#fd5566"/>
                <path id="Path_98" data-name="Path 98" d="M-962.093,361.9c-1.825,2.044-3.661,4.08-5.648,5.973a4.38,4.38,0,0,1-3.083,1.22q-9.367.017-18.738,0a4.424,4.424,0,0,1-3.086-1.228c-1.991-1.881-3.834-3.914-5.652-5.969,4.938-.011,9.875-.03,14.813-.027Q-972.787,361.87-962.093,361.9Z" transform="translate(1032.034 -361.865)" fill="#3b97d2"/>
                <path id="Path_99" data-name="Path 99" d="M-971.76,375.361c1.009.873,2.339,1.285,3.275,2.263-3.721,2.316-7.423,4.654-11.163,6.936a12.128,12.128,0,0,1-3.46,1.934l-14.216-8.87a49.561,49.561,0,0,1,5.145-3.347c2.8-1.794,5.648-3.525,8.455-5.315a1.312,1.312,0,0,1,1.647-.011C-978.658,371.119-975.2,373.231-971.76,375.361Z" transform="translate(1034.742 -342.988)" fill="#efc31a"/>
                <path id="Path_100" data-name="Path 100" d="M-997.168,371.037q7.106,4.437,14.216,8.87a2.241,2.241,0,0,1,.2,1.3v15.141c-2.622-1.405-5.062-3.105-7.6-4.65-2.074-1.266-4.107-2.6-6.192-3.842a1.429,1.429,0,0,1-.808-1.481c.045-.782-.015-1.571-.03-2.357q.023-5.956.053-11.907C-997.323,371.755-997.478,371.354-997.168,371.037Z" transform="translate(1034.586 -336.401)" fill="#e47e26"/>
                <path id="Path_101" data-name="Path 101" d="M-984.549,370.931a1.8,1.8,0,0,1-2.682,1.7,39.487,39.487,0,0,1-3.895-2.678,1.753,1.753,0,0,1-.3-2.414,1.72,1.72,0,0,1,2.286-.529c1.333.835,2.614,1.76,3.9,2.675A1.715,1.715,0,0,1-984.549,370.931Z" transform="translate(1050.168 -348.259)" fill="#f97c78"/>
                <path id="Path_102" data-name="Path 102" d="M-989.965,368.8a1.617,1.617,0,0,1-.706,1.216c-1.194.858-2.4,1.711-3.638,2.5a1.8,1.8,0,0,1-2.535-.476,1.781,1.781,0,0,1,.525-2.524c1.156-.854,2.335-1.685,3.551-2.448A1.843,1.843,0,0,1-989.965,368.8Z" transform="translate(1035.187 -348.211)" fill="#f87c78"/>
                <path id="Path_103" data-name="Path 103" d="M-998.1,374.814a2,2,0,0,1-1.685-1.228,1.539,1.539,0,0,1,.408-1.877,26.168,26.168,0,0,1,4.053-2.8,1.589,1.589,0,0,1,2.112.525,1.514,1.514,0,0,1,.091,2.085,17.261,17.261,0,0,1-4.609,3.211A1.41,1.41,0,0,1-998.1,374.814Z" transform="translate(1027.484 -342.906)" fill="#f87d78"/>
                <path id="Path_104" data-name="Path 104" d="M-981.808,372.586a1.976,1.976,0,0,1-1.126,2.014,1.96,1.96,0,0,1-2.172-.442c-.378-.287-.8-.514-1.209-.767-.657-.484-1.341-.941-1.972-1.462a1.73,1.73,0,0,1-.351-2.4,1.693,1.693,0,0,1,2.251-.616c1.368.839,2.671,1.787,3.967,2.739A3.258,3.258,0,0,1-981.808,372.586Z" transform="translate(1057.948 -342.896)" fill="#f87c78"/>
                <path id="Path_105" data-name="Path 105" d="M-989.794,369.846a1.693,1.693,0,0,1-.615-.155,1.208,1.208,0,0,0-1.323-.019,1.762,1.762,0,0,1-2.4-.729,1.775,1.775,0,0,1,.616-2.422c.469-.344.952-.672,1.443-.978a1.741,1.741,0,0,1,1.938-.015,13.406,13.406,0,0,1,1.609,1.1,1.681,1.681,0,0,1,.608,2.01A1.745,1.745,0,0,1-989.794,369.846Z" transform="translate(1042.92 -352.501)" fill="#f97c78"/>
                <path id="Path_106" data-name="Path 106" d="M-993.357,396.348V381.207a2.241,2.241,0,0,0-.2-1.3,12.128,12.128,0,0,0,3.46-1.934c3.74-2.282,7.442-4.62,11.163-6.936.3.283.159.65.159.975.011,4.771-.008,9.546.023,14.318a1.583,1.583,0,0,1-.858,1.564c-4.382,2.7-8.738,5.44-13.1,8.164C-992.919,396.182-993.089,396.371-993.357,396.348Z" transform="translate(1045.195 -336.401)" fill="#f09c21"/>
              </g>
            </g>
            </svg>
            <div className="text">VIRTUAL TRY-ON</div>
            <div className="subText">Give a Real Life shopping experience using Virtual Try-on</div>
          </div>

          <div className="feat_item"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="111.731" height="108.062" viewBox="0 0 111.731 108.062">
            <defs>
              <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                <stop offset="0.137" stopColor="#16f6fe"/>
                <stop offset="0.202" stopColor="#1bebfd"/>
                <stop offset="0.314" stopColor="#2ad0fd"/>
                <stop offset="0.459" stopColor="#42a4fd"/>
                <stop offset="0.631" stopColor="#6366fc"/>
                <stop offset="0.824" stopColor="#8d19fc"/>
                <stop offset="0.875" stopColor="#9904fc"/>
              </linearGradient>
            </defs>
            <g id="Group_141" data-name="Group 141" transform="translate(1368.969 -449.98)">
              <path id="Path_325" data-name="Path 325" d="M-1011.3,689.344a2.418,2.418,0,0,1-2.524,1.091c-.737-.109-1.1.139-.972.931a3.331,3.331,0,0,1,0,.653,1.764,1.764,0,0,1-1.789,1.9,1.762,1.762,0,0,1-1.7-1.88,5.789,5.789,0,0,1,0-.871c.063-.567-.153-.8-.732-.741a5.646,5.646,0,0,1-1.2-.012,1.705,1.705,0,0,1-1.556-1.785,1.7,1.7,0,0,1,1.559-1.678c.035-.006.073,0,.109-.007.567-.073,1.281.25,1.673-.154s.081-1.109.144-1.678a1.75,1.75,0,0,1,1.7-1.658,1.746,1.746,0,0,1,1.782,1.687c0,.036,0,.073,0,.109.1,1.571.1,1.6,1.732,1.68a2.511,2.511,0,0,1,1.76,1.1Z" transform="translate(-245.939 -165.381)" fill="red"/>
              <path id="Path_326" data-name="Path 326" d="M-1219.383,529.219a61.962,61.962,0,0,0,5.852-6.877,47.618,47.618,0,0,0,7.258-16.2,28.7,28.7,0,0,1,1.711-5.5,4.789,4.789,0,0,1,5.633-2.811c3.4.568,4.9,2.847,5.311,6.245.528,4.381-.545,8.566-1.671,12.731a58.516,58.516,0,0,1-2.75,7.911c-.362.839-.188,1,.7,1,8.327-.029,16.655-.018,24.982-.018,3,0,5.207,1.877,5.366,4.564.2,3.424-1.392,5.443-4.672,5.922a.992.992,0,0,0-.23.124c2.32,1.749,3.774,3.919,2.909,6.911-.639,2.213-2.352,3.279-4.741,3.5,2.364,1.8,3.822,3.913,3.019,6.881-.619,2.29-2.353,3.347-4.784,3.6a7.247,7.247,0,0,1,3.147,4.414,4.859,4.859,0,0,1-4.582,5.969q-14.345.057-28.691-.015a10.212,10.212,0,0,1-6.6-2.738c-2.346-2-4.736-3.951-7.108-5.923-.013-.471-.036-.942-.036-1.412Q-1219.378,543.362-1219.383,529.219Z" transform="translate(-105.958 -33.826)" stroke="#fff" strokeWidth="2" fill="url(#linear-gradient)"/>
              <path id="Path_327" data-name="Path 327" d="M-1270.268,605.6q.007,14.144.016,28.287c0,.471.024.942.036,1.413-.013,2.58-.055,5.161-.02,7.74.01.761-.192.973-.962.969q-9.541-.047-19.081,0c-.8,0-.941-.258-.94-.989q.032-18.264,0-36.528c0-.683.144-.932.888-.928C-1283.643,605.6-1276.956,605.592-1270.268,605.6Z" transform="translate(-55.073 -110.206)" fill="#fff"/>
              <path id="Path_328" data-name="Path 328" d="M-1327.374,481.9l-3.728-2.052q-15.027-8.259-30.062-16.5c-.854-.467-.943-.683-.109-1.321,4.7-3.6,9.368-7.246,14.033-10.893.49-.383.776-.615,1.223.12q9.135,15.031,18.325,30.029C-1327.623,481.39-1327.572,481.51-1327.374,481.9Z" transform="translate(-5.041 -0.56)" fill="url(#linear-gradient)"/>
              <path id="Path_329" data-name="Path 329" d="M-1063.224,449.98c2.294,2.945,4.456,5.718,6.615,8.493,1.717,2.206,3.419,4.424,5.155,6.616.369.466.345.676-.2.948q-11.64,5.792-23.266,11.614a2.187,2.187,0,0,1-.427.055Z" transform="translate(-207.984 0)" fill="url(#linear-gradient)"/>
              <path id="Path_330" data-name="Path 330" d="M-1051.1,773.885c.332-.183.634,0,.936.088,5.138,1.541,10.27,3.106,15.417,4.615.837.246.81.432.248.986-2.484,2.447-4.94,4.923-7.4,7.39-.337.337-.6.761-1.043.045-2.7-4.389-5.419-8.76-8.134-13.138Z" transform="translate(-225.163 -229.38)" fill="url(#linear-gradient)"/>
              <path id="Path_331" data-name="Path 331" d="M-1345.25,762.808q-4.047,8.14-8.083,16.284c-.272.552-.51.535-.98.248q-3.672-2.241-7.379-4.426c-.5-.3-.646-.483-.071-.883q8.1-5.631,16.171-11.293a.7.7,0,0,1,.205-.063A1.388,1.388,0,0,0-1345.25,762.808Z" transform="translate(-4.841 -221.496)" fill="url(#linear-gradient)"/>
              <path id="Path_332" data-name="Path 332" d="M-1223.319,468.9a1.733,1.733,0,0,1-1.79,1.79,23.8,23.8,0,0,1-2.616-.005c-.705-.049-.874.229-.835.874.049.8.025,1.6.008,2.4a1.771,1.771,0,0,1-1.722,1.972,1.757,1.757,0,0,1-1.764-1.928c-.02-.872-.027-1.746,0-2.617.018-.512-.148-.713-.678-.693-.908.033-1.818.031-2.726,0a1.735,1.735,0,0,1-1.834-1.746,1.736,1.736,0,0,1,1.845-1.734,22.98,22.98,0,0,1,2.507.008c.748.057.937-.24.89-.929-.052-.76-.022-1.526-.009-2.289.021-1.27.708-2.047,1.775-2.027a1.771,1.771,0,0,1,1.714,1.98c.016.836.032,1.674-.006,2.508-.025.558.142.782.731.754.907-.043,1.818-.036,2.726,0A1.73,1.73,0,0,1-1223.319,468.9Z" transform="translate(-93.285 -8.494)" fill="red"/>
              <path id="Path_333" data-name="Path 333" d="M-1362.01,629.583a1.712,1.712,0,0,1,1.752,1.713c.046.943.036,1.891.006,2.835-.016.515.153.71.68.691.908-.033,1.818-.031,2.726,0a1.734,1.734,0,0,1,1.832,1.748,1.742,1.742,0,0,1-1.85,1.732,17.926,17.926,0,0,1-2.4-.01c-.864-.087-1.059.264-1,1.046a19.868,19.868,0,0,1,.005,2.4,1.735,1.735,0,0,1-1.777,1.8,1.724,1.724,0,0,1-1.7-1.77c-.037-.944-.028-1.891,0-2.835.012-.47-.152-.645-.628-.632q-1.362.039-2.726,0a1.75,1.75,0,0,1-1.883-1.7,1.751,1.751,0,0,1,1.9-1.786,16.825,16.825,0,0,1,2.288.013c.91.1,1.116-.283,1.051-1.1a19.028,19.028,0,0,1,0-2.4A1.721,1.721,0,0,1-1362.01,629.583Z" transform="translate(0 -127.22)" fill="red"/>
              <path id="Path_334" data-name="Path 334" d="M-1342.871,566.225c-.361-.023-.384-.3-.461-.532-.447-1.342-.874-2.691-1.353-4.022a1.074,1.074,0,0,1,.123-1.016c1.5-2.487,3.005-4.973,4.484-7.473.334-.565.54-.694.927-.034,1.434,2.443,2.9,4.867,4.364,7.291.253.418.411.745-.139,1.07-2.531,1.5-5.05,3.017-7.574,4.527C-1342.623,566.11-1342.756,566.167-1342.871,566.225Z" transform="translate(-17.148 -72.764)" fill="#f9c43a"/>
              <path id="Path_335" data-name="Path 335" d="M-1106.1,462.223c.318.034.456.271.63.445,1.391,1.382,2.759,2.786,4.17,4.147.442.426.46.687.008,1.122q-2.119,2.038-4.158,4.158c-.46.479-.69.412-1.057-.09-1.413-1.933-2.866-3.837-4.3-5.754-.23-.308-.571-.576,0-.942,1.468-.936,2.9-1.925,4.352-2.89C-1106.33,462.339-1106.2,462.28-1106.1,462.223Z" transform="translate(-182.648 -8.672)" fill="#f9c43a"/>
              <path id="Path_336" data-name="Path 336" d="M-1023.285,562.933a1.768,1.768,0,0,1-1.9,1.795c-1.536.064-1.536.064-1.582,1.516-.038,1.2-.7,1.957-1.729,1.969a1.765,1.765,0,0,1-1.763-1.932,6.68,6.68,0,0,1,0-.872c.05-.517-.15-.729-.677-.687a6.606,6.606,0,0,1-1.2-.01,1.727,1.727,0,0,1-1.613-1.741,1.754,1.754,0,0,1,1.63-1.732c.6-.076,1.392.283,1.748-.205.283-.388.065-1.122.124-1.7a1.724,1.724,0,0,1,1.763-1.589,1.751,1.751,0,0,1,1.707,1.657c.064.571-.243,1.282.145,1.681s1.106.09,1.676.152A1.755,1.755,0,0,1-1023.285,562.933Z" transform="translate(-237.451 -76.337)" fill="#35aedb"/>
              <path id="Path_337" data-name="Path 337" d="M-1226.8,784.616a1.7,1.7,0,0,1-1.524,1.575,3,3,0,0,1-.978.015c-.86-.137-1.1.256-.989,1.037a3.4,3.4,0,0,1-.01.871,1.711,1.711,0,0,1-1.769,1.579,1.687,1.687,0,0,1-1.692-1.546c-.1-.6.248-1.368-.163-1.783s-1.18-.062-1.781-.166a1.688,1.688,0,0,1-1.551-1.688,1.719,1.719,0,0,1,1.571-1.778c.072-.01.145-.006.218-.01,1.567-.1,1.567-.1,1.692-1.737a1.746,1.746,0,0,1,1.725-1.749,1.744,1.744,0,0,1,1.761,1.713c.006.072,0,.145,0,.218.055,1.5.055,1.5,1.543,1.555A1.8,1.8,0,0,1-1226.8,784.616Z" transform="translate(-93.294 -233.226)" fill="red"/>
              <path id="Path_338" data-name="Path 338" d="M-1136.575,772.686c-.173.2-.3.361-.453.511-1.383,1.386-2.781,2.758-4.146,4.162-.464.478-.716.421-1.045-.139q-2.177-3.7-4.412-7.367c-.313-.514-.233-.74.35-.918,1.349-.413,2.688-.865,4.018-1.338a.719.719,0,0,1,.866.19c1.48,1.494,2.972,2.977,4.457,4.466C-1136.818,772.375-1136.715,772.518-1136.575,772.686Z" transform="translate(-157.364 -224.933)" fill="#f9c43a"/>
              <path id="Path_339" data-name="Path 339" d="M-1304.711,762.41l.184-.11c-.016.08-.032.16-.048.241A1.4,1.4,0,0,1-1304.711,762.41Z" transform="translate(-45.517 -221.229)" fill="#e52a50"/>
              <path id="Path_340" data-name="Path 340" d="M-1051.074,773.827l.006-.084c-.008.032-.016.064-.025.1Z" transform="translate(-225.165 -229.335)" fill="#e52a50"/>
            </g>
            </svg>
            <div className="text">Personalized Product Recommendations</div>
            <div className="subText">Give your customers a more Personalized Shopping Experience using AI</div>
          </div>

          <div className="feat_item"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="112.229" height="125.439" viewBox="0 0 112.229 125.439">
            <defs>
              <linearGradient id="linear-gradient" x1="0.069" y1="0.504" x2="1" y2="0.496" gradientUnits="objectBoundingBox">
                <stop offset="0.137" stopColor="#16f6fe"/>
                <stop offset="0.202" stopColor="#1bebfd"/>
                <stop offset="0.314" stopColor="#2ad0fd"/>
                <stop offset="0.459" stopColor="#42a4fd"/>
                <stop offset="0.631" stopColor="#6366fc"/>
                <stop offset="0.824" stopColor="#8d19fc"/>
                <stop offset="0.875" stopColor="#9904fc"/>
              </linearGradient>
              <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="1.695" gradientTransform="translate(0.393) scale(0.213 1)" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#231f20"/>
                <stop offset="0.088" stopColor="#1f1c1c" stopOpacity="0.906"/>
                <stop offset="1" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="linear-gradient-2" x1="1.543" y1="-0.356" x2="-0.065" y2="1.2" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient"/>
              <linearGradient id="linear-gradient-3" x1="-0.182" y1="-0.161" x2="0.706" y2="1.024" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient"/>
            </defs>
            <g id="Group_140" data-name="Group 140" transform="translate(581.059 -399.17)">
              <path id="Path_312" data-name="Path 312" d="M-467.16,460.928a5.019,5.019,0,0,0-3.081,3.088c-1.115,3.147-2.247,6.287-3.369,9.427-.7,1.819-1.406,3.634-2.08,5.462a2.238,2.238,0,0,1-2.293,1.8c-1.22-.039-1.76-.828-2.139-1.848-.72-1.94-1.469-3.866-2.2-5.8-1.158-3.212-2.27-6.44-3.493-9.626a4.822,4.822,0,0,0-3.071-2.61A31.09,31.09,0,0,1-506.1,445.009a32,32,0,0,1,15.354-43.062,31.865,31.865,0,0,1,8.642-2.512c.268-.039.586.052.759-.265h6.607a14.924,14.924,0,0,0,3.294.677,31.626,31.626,0,0,1,24.395,25.294C-444.414,440.92-452.32,455.008-467.16,460.928Z" transform="translate(-48.258 0)" fill="#f4dd46"/>
              <path id="Path_313" data-name="Path 313" d="M-469.151,643.01c-.01-.249-.02-.5-.026-.746a1.007,1.007,0,0,1-.092-.147c0-.013.049-.042.075-.065a41.648,41.648,0,0,0-2.689-8.194,61.928,61.928,0,0,0-2.708-6.748c.088-.389-.343-.51-.422-.831a18.563,18.563,0,0,0-5.027-8.377c-7.526-7.69-16.518-9.744-26.75-6.614-4.975,1.521-9.868,3.34-15.079,3.935-.7,1.819-1.406,3.634-2.08,5.462a2.238,2.238,0,0,1-2.293,1.8c-1.22-.039-1.76-.827-2.139-1.848-.72-1.94-1.469-3.866-2.2-5.8a127.9,127.9,0,0,1-13.031-3.693c-8.462-2.558-16.286-1.305-23.335,4.079a23.571,23.571,0,0,0-8.367,11.887,3.664,3.664,0,0,0-.785,1.743c-1.573,4.386-3.683,8.589-4.612,13.2.226.157.216.311-.016.451-.01.17-.02.337-.026.5a14.939,14.939,0,0,0,.258,6.866,20.971,20.971,0,0,0,18.147,16.361c7.3.854,13.214-2.443,18.795-6.594,1.976-.968,3.752-2.273,5.646-3.379a14.9,14.9,0,0,1,5.708-2.005,59.222,59.222,0,0,1,12.439-.245,17.809,17.809,0,0,1,8.194,2.489,51.4,51.4,0,0,0,5.22,3.137,30.6,30.6,0,0,0,4.131,2.748c5,3.392,10.545,4.828,16.453,3.529,8.527-1.874,14-7.229,16.273-15.687A14.35,14.35,0,0,0-469.151,643.01Zm-22.867-21.055a5.218,5.218,0,0,1,5.23,5.181,5.207,5.207,0,0,1-5.276,5.119,5.2,5.2,0,0,1-5.22-5.175A5.207,5.207,0,0,1-492.018,621.956Zm-12.8,13.241a5.411,5.411,0,0,1,5.27,5.22,5.437,5.437,0,0,1-5.374,5.253,5.363,5.363,0,0,1-5.1-5.237A5.253,5.253,0,0,1-504.814,635.2Zm-23.407,5.374c1.092-.046,2.192-.01,3.287-.01,1.057,0,2.113-.029,3.169,0a1.845,1.845,0,0,1,1.913,1.812,1.96,1.96,0,0,1-1.9,1.848q-3.228.049-6.46,0a1.94,1.94,0,0,1-1.845-1.894A1.808,1.808,0,0,1-528.221,640.57Zm-35.156-9.463c-.007-1.06.484-1.583,1.56-1.573,1.55.013,3.1-.02,4.651.01.988.016,1.4-.419,1.38-1.4-.033-1.469-.016-2.937-.007-4.406.01-1.384.373-1.766,1.714-1.776,1.711-.016,3.425-.013,5.139,0,1.344.01,1.7.386,1.714,1.77.013,1.469.026,2.937-.007,4.406-.02.978.386,1.426,1.38,1.41,1.547-.029,3.1.033,4.648-.02,1.125-.039,1.557.5,1.564,1.534,0,.939,0,1.878,0,2.816,0,.815.006,1.632,0,2.447-.016,1.269-.481,1.756-1.776,1.779-1.426.029-2.859.078-4.282-.013-1.227-.078-1.58.458-1.537,1.58.052,1.426-.026,2.855.023,4.282a1.465,1.465,0,0,1-1.586,1.724c-1.792.052-3.591.049-5.384,0a1.472,1.472,0,0,1-1.622-1.694c.043-1.55-.023-3.1.023-4.651.026-.89-.3-1.259-1.207-1.233-1.508.043-3.019.026-4.53.007-1.338-.016-1.838-.517-1.851-1.858C-563.39,634.532-563.367,632.822-563.377,631.108Z" transform="translate(0 -141.781)" fill="url(#linear-gradient)"/>
              <path id="Path_314" data-name="Path 314" d="M-505.295,734.839c.018-.365.26-.436.57-.5,3.71-.75,6.827-2.74,9.956-4.725,2.845-1.806,5.709-3.585,8.612-5.295a14.4,14.4,0,0,1,5.8-1.7,74.538,74.538,0,0,1,9.138-.243,21.553,21.553,0,0,1,12.386,3.66,117.56,117.56,0,0,0,10.474,6.447,21.192,21.192,0,0,0,4.667,1.753c.364.1.985-.075,1.045.607a30.181,30.181,0,0,1-11.372.52c-.427-.057-.891-.555-1.346-.038a51.269,51.269,0,0,1-5.221-3.138,17.824,17.824,0,0,0-8.2-2.488,59.239,59.239,0,0,0-12.438.245,14.826,14.826,0,0,0-5.707,2c-1.894,1.107-3.669,2.411-5.646,3.379-.215-.31-.477-.182-.757-.106a19.507,19.507,0,0,1-5.154.486A24.8,24.8,0,0,1-505.295,734.839Z" transform="translate(-50.982 -217.467)" fill="url(#radial-gradient)"/>
              <path id="Path_315" data-name="Path 315" d="M-286.234,678.47c-.631.059-.57.633-.689,1.011-2.584,8.23-8.225,13.072-16.562,14.839a16.031,16.031,0,0,1-4.595.307c-.445-.036-.915.042-1.146-.48,9.5-3.371,15.325-10.035,17.6-19.8a25.688,25.688,0,0,0-.09-11.219c-.043-.2-.131-.384.048-.556a62.785,62.785,0,0,1,2.708,6.747,41.614,41.614,0,0,1,2.687,8.195c-.026.022-.078.055-.074.063a1.135,1.135,0,0,0,.091.149Z" transform="translate(-182.919 -177.243)" fill="url(#linear-gradient-2)"/>
              <path id="Path_316" data-name="Path 316" d="M-557.149,694.145c-1,.949-2.251.5-3.339.429a20.907,20.907,0,0,1-9.639-2.979,21.373,21.373,0,0,1-9.469-12.326c-.1-.327-.006-.779-.547-.8q.013-.252.026-.5c.234-.143.243-.294.016-.453.929-4.613,3.04-8.814,4.614-13.2a3.674,3.674,0,0,1,.783-1.743c-.1,2.162-.589,4.275-.587,6.465a25.99,25.99,0,0,0,5.6,16.267A25.3,25.3,0,0,0-557.149,694.145Z" transform="translate(-0.616 -177.241)" fill="url(#linear-gradient-3)"/>
              <path id="Path_317" data-name="Path 317" d="M-580.048,708.268c.227.159.218.31-.016.453Q-580.056,708.494-580.048,708.268Z" transform="translate(-0.67 -207.994)" fill="#81a9c7"/>
              <path id="Path_318" data-name="Path 318" d="M-503.268,658.723c0,.816.008,1.632,0,2.448-.014,1.267-.481,1.755-1.773,1.78-1.427.027-2.86.076-4.282-.014-1.229-.078-1.581.457-1.539,1.58.053,1.426-.026,2.856.024,4.282a1.467,1.467,0,0,1-1.588,1.723c-1.793.051-3.59.048-5.384,0a1.471,1.471,0,0,1-1.621-1.695c.041-1.549-.023-3.1.022-4.649.025-.892-.3-1.259-1.209-1.234-1.508.042-3.018.026-4.527.006-1.339-.017-1.839-.517-1.854-1.857-.019-1.713,0-3.426-.007-5.139a1.363,1.363,0,0,1,1.561-1.574c1.55.013,3.1-.018,4.65.01.99.018,1.4-.418,1.382-1.4-.034-1.468-.017-2.937-.006-4.4.01-1.384.373-1.766,1.712-1.778q2.57-.022,5.14,0c1.345.011,1.7.386,1.715,1.772.011,1.468.026,2.937-.005,4.4-.021.978.383,1.427,1.378,1.409,1.549-.029,3.1.033,4.649-.02,1.123-.039,1.558.5,1.562,1.537C-503.265,656.846-503.268,657.784-503.268,658.723Z" transform="translate(-36.373 -166.629)" fill="#fff"/>
              <path id="Path_319" data-name="Path 319" d="M-363.861,692.534a5.254,5.254,0,0,1,5.2-5.235,5.413,5.413,0,0,1,5.272,5.221,5.44,5.44,0,0,1-5.374,5.253A5.364,5.364,0,0,1-363.861,692.534Z" transform="translate(-146.154 -193.884)" fill="#fff"/>
              <path id="Path_320" data-name="Path 320" d="M-319.718,657.121a5.2,5.2,0,0,1-5.219-5.172,5.2,5.2,0,0,1,5.266-5.126A5.216,5.216,0,0,1-314.444,652,5.2,5.2,0,0,1-319.718,657.121Z" transform="translate(-172.346 -166.648)" fill="#fff"/>
              <path id="Path_321" data-name="Path 321" d="M-358.621,647.618a5.255,5.255,0,0,1,5.236,5.2,5.413,5.413,0,0,1-5.221,5.272,5.44,5.44,0,0,1-5.253-5.374A5.364,5.364,0,0,1-358.621,647.618Z" transform="translate(-146.155 -167.183)" fill="#fff"/>
              <path id="Path_322" data-name="Path 322" d="M-322.844,691.761a5.2,5.2,0,0,1,5.172-5.219,5.2,5.2,0,0,1,5.126,5.266,5.216,5.216,0,0,1-5.181,5.228A5.2,5.2,0,0,1-322.844,691.761Z" transform="translate(-173.755 -193.375)" fill="#fff"/>
              <path id="Path_323" data-name="Path 323" d="M-420,703.669c1.056,0,2.113-.029,3.168.007a1.84,1.84,0,0,1,1.913,1.81,1.959,1.959,0,0,1-1.9,1.85q-3.228.047-6.458,0a1.938,1.938,0,0,1-1.845-1.893,1.81,1.81,0,0,1,1.83-1.76C-422.2,703.636-421.1,703.67-420,703.669Z" transform="translate(-104.932 -204.892)" fill="red"/>
              <path id="Path_324" data-name="Path 324" d="M-424.8,470.123h-28.426a1.859,1.859,0,0,1-.111-.515q.431-5.766.881-11.529.46-6.008.915-12.017c.032-.418.065-.448.5-.448h4.467c0-.2-.007-.348,0-.5a15.958,15.958,0,0,1,.136-2.14,7.231,7.231,0,0,1,4.833-5.749,7.2,7.2,0,0,1,7.5,1.353,7.316,7.316,0,0,1,2.654,5.787c0,.409,0,.817,0,1.248h.393c1.38,0,2.759,0,4.139,0,.253,0,.409.058.431.353.186,2.5.383,5,.573,7.5.184,2.425.362,4.851.547,7.276.227,2.977.461,5.954.682,8.931A1.491,1.491,0,0,1-424.8,470.123Zm-8.74-24.521c0-.521.01-1.008,0-1.5a5.509,5.509,0,0,0-5.178-5.27c-3.158-.148-6.319,2.409-5.728,6.766Zm-13.036,2.367a2.412,2.412,0,0,0-1.552,2.621,2.622,2.622,0,0,0,2.628,2.323,2.616,2.616,0,0,0,2.563-2.357,2.374,2.374,0,0,0-1.553-2.584v.323c0,.663,0,1.325,0,1.988a1.011,1.011,0,0,1-.634.979,1.033,1.033,0,0,1-1.448-.95C-446.583,449.533-446.573,448.754-446.573,447.969Zm13.04,0a2.411,2.411,0,0,0-1.552,2.62,2.622,2.622,0,0,0,2.595,2.324,2.615,2.615,0,0,0,2.6-2.356,2.376,2.376,0,0,0-1.553-2.585c0,.752.012,1.5-.008,2.245a1.458,1.458,0,0,1-.169.646.991.991,0,0,1-1.125.451,1.035,1.035,0,0,1-.782-1C-433.54,449.533-433.533,448.754-433.533,447.969Z" transform="translate(-85.947 -25.265)" fill="#fff"/>
            </g>
            </svg>
            <div className="text">Retail Gamification</div>
            <div className="subText">Boost Sales & Engagement by providing rewards through Gamification</div>
          </div>

        </div>

        <div className="col_flex" style={{borderRadius:"10px"}}>
        <div style={{ borderRadius: "20px", overflow: "hidden" }}>
          <video
            src={"https://gcpsucks.s3.ap-south-1.amazonaws.com/final-features-2.mp4"}
            autoPlay
            loop
            muted="muted"
            playsInline
            onContextMenu={handleContextMenu}
            style={{ width: "100%", height: "auto" }}
          ></video>
        </div>        </div>

        <div className="col_flex">
          <div className="feat_item">


            <img src={codeSVG} alt="" />

              <div className="text">No Code Required</div>
              <div className="subText">Build your metadrob store using drag and drop</div>
          </div>

          <div className="feat_item"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="114.923" height="114.923" viewBox="0 0 114.923 114.923">
            <defs>
              <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#16f6fe"/>
                <stop offset="1" stopColor="#9805fc"/>
              </linearGradient>
            </defs>
            <g id="Group_139" data-name="Group 139" transform="translate(-3700.054 -532.578)">
              <path id="Path_302" data-name="Path 302" d="M3900.387,532.578a2.745,2.745,0,0,1,1.15,2.6c-.062,2.5-.011,5-.024,7.508a1.825,1.825,0,1,1-3.6,0c-.013-2.5.038-5.006-.024-7.508a2.744,2.744,0,0,1,1.15-2.6Z" transform="translate(-142.192)" fill="url(#linear-gradient)"/>
              <path id="Path_303" data-name="Path 303" d="M3700.054,731.563a2.745,2.745,0,0,1,2.6-1.15c2.5.062,5.005.011,7.508.024a1.826,1.826,0,1,1,0,3.6c-2.5.013-5.006-.038-7.507.024a2.745,2.745,0,0,1-2.6-1.15Z" transform="translate(0 -142.191)" fill="url(#linear-gradient)"/>
              <path id="Path_304" data-name="Path 304" d="M3810.448,654.174q6.917-1.029,13.836-2.057c.59-.087,1.181-.2,1.774-.231.647-.035.744-.561.948-.973q3.655-7.387,7.29-14.784c.132-.268.261-.539.405-.8a2.255,2.255,0,0,1,2-1.4,2.2,2.2,0,0,1,2.016,1.372c.458.856.873,1.736,1.3,2.608,2.131,4.326,4.272,8.646,6.377,12.984a1.683,1.683,0,0,0,1.5,1.055c5.655.769,11.3,1.613,16.945,2.445a2.264,2.264,0,0,1,2.1,1.43,2.3,2.3,0,0,1-.8,2.506c-4.132,4.014-8.239,8.053-12.37,12.068a1.5,1.5,0,0,0-.517,1.547c1.02,5.652,1.968,11.318,2.936,16.979a2.345,2.345,0,0,1-.771,2.529c-.971.72-1.9.366-2.833-.125-4.925-2.6-9.861-5.18-14.771-7.809a2.027,2.027,0,0,0-2.17-.018c-4.417,2.358-8.867,4.653-13.306,6.97a2.352,2.352,0,0,1-1.266-2.3c.92-5.4,1.843-10.8,2.852-16.19.316-1.688.272-3.091-1.471-3.94a.351.351,0,0,1-.082-.076c-3.724-3.714-7.421-7.453-11.261-11.048A2.284,2.284,0,0,1,3810.448,654.174Z" transform="translate(-79.195 -72.842)" fill="url(#linear-gradient)"/>
              <path id="Path_305" data-name="Path 305" d="M3800.493,705.924a2.284,2.284,0,0,0,.665,2.734c3.841,3.6,7.538,7.335,11.261,11.048a.349.349,0,0,0,.082.076c1.743.849,1.787,2.253,1.471,3.94-1.009,5.386-1.932,10.788-2.852,16.19a2.352,2.352,0,0,0,1.266,2.3c-.618.346-1.232.7-1.856,1.037a2.157,2.157,0,0,1-2.427-.005,2.213,2.213,0,0,1-.847-2.388c.393-2.353.805-4.7,1.212-7.054.6-3.489,1.193-6.981,1.833-10.464.117-.638-.292-.88-.62-1.2q-6.086-5.964-12.185-11.916a3.472,3.472,0,0,1-.975-1.213,2.024,2.024,0,0,1,1.333-2.682A22.535,22.535,0,0,1,3800.493,705.924Z" transform="translate(-69.24 -124.591)" fill="#fff"/>
              <path id="Path_306" data-name="Path 306" d="M3767.874,598.652a1.829,1.829,0,0,1-1.128,1.582,1.646,1.646,0,0,1-1.956-.374c-.977-.919-1.909-1.885-2.858-2.833-.976-.974-1.958-1.942-2.923-2.927-.936-.955-1.066-2.126-.343-2.874a1.98,1.98,0,0,1,2.872.267c1.856,1.833,3.691,3.687,5.539,5.529A2.277,2.277,0,0,1,3767.874,598.652Z" transform="translate(-41.794 -41.792)" fill="url(#linear-gradient)"/>
              <path id="Path_307" data-name="Path 307" d="M4025.819,592.5a1.9,1.9,0,0,1-.666,1.452c-1.9,1.905-3.8,3.822-5.719,5.71a1.824,1.824,0,1,1-2.56-2.562c1.887-1.922,3.807-3.812,5.708-5.72a1.961,1.961,0,0,1,2.252-.524A1.566,1.566,0,0,1,4025.819,592.5Z" transform="translate(-227.195 -41.771)" fill="url(#linear-gradient)"/>
              <path id="Path_308" data-name="Path 308" d="M3759.96,858.346a1.592,1.592,0,0,1-1.617-.926,1.854,1.854,0,0,1,.372-2.177c1.225-1.261,2.479-2.494,3.722-3.738.74-.741,1.461-1.5,2.231-2.213a1.752,1.752,0,0,1,2.6-.069,1.727,1.727,0,0,1-.029,2.6c-1.955,2.012-3.954,3.982-5.945,5.96A1.736,1.736,0,0,1,3759.96,858.346Z" transform="translate(-41.754 -227.194)" fill="url(#linear-gradient)"/>
              <path id="Path_309" data-name="Path 309" d="M4017.865,848.7a2.146,2.146,0,0,1,1.563.716c1.905,1.9,3.821,3.8,5.709,5.72a1.943,1.943,0,0,1,.226,2.719,1.9,1.9,0,0,1-2.718-.095c-1.98-1.934-3.928-3.9-5.875-5.871a1.711,1.711,0,0,1-.475-2.042A1.819,1.819,0,0,1,4017.865,848.7Z" transform="translate(-227.176 -227.208)" fill="url(#linear-gradient)"/>
              <path id="Path_310" data-name="Path 310" d="M4071.353,730.479c1.3,0,2.61-.012,3.915,0,1.332.015,2.117.679,2.135,1.771s-.772,1.819-2.077,1.827q-4.027.025-8.053,0a1.9,1.9,0,0,1-2.1-1.826,1.928,1.928,0,0,1,2.153-1.774C4068.668,730.469,4070.011,730.479,4071.353,730.479Z" transform="translate(-262.427 -142.237)" fill="url(#linear-gradient)"/>
              <path id="Path_311" data-name="Path 311" d="M3901.555,903.868c0,1.342.017,2.685,0,4.027-.02,1.25-.7,2.01-1.759,2.033-1.1.024-1.829-.768-1.837-2.067q-.025-4.083,0-8.165a1.809,1.809,0,1,1,3.594.034C3901.57,901.108,3901.555,902.488,3901.555,903.868Z" transform="translate(-142.23 -262.427)" fill="url(#linear-gradient)"/>
            </g>
            </svg>
            <div className="text">Feature Area</div>
            <div className="subText">Place Best products at the ideal spots to grasp Direct Customer Attention</div>
          </div>

          <div className="feat_item">


            <img src={storeSVG} alt="" />
            <div className="text">Ease of Store Expansion</div>
            <div className="subText">Choose from 1000+ Metadrob Store Templates with Customizable sizes!</div>
          </div>
        </div>
      </div>

    </section>


  );
}

export default Section3;

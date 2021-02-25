export const AreaChart = () => {

    const data = {}

    data.width = 500;
    data.height = 750;

    
    data.dataset = [
        {
           "date":1,
           "sample":21,
           "score":75,
           "vsly":0
        },
        {
           "date":2,
           "sample":110,
           "score":71,
           "vsly":0
        },
        {
           "date":3,
           "sample":2,
           "score":62,
           "vsly":0
        },
        {
           "date":4,
           "sample":0,
           "score":0,
           "vsly":0
        }
     ]

     data.x_display_name = 'Month';
     data.y_display_name = 'Score';
     data.margins = {top: 20, right: 10, bottom: 0, left: 10};
     data.fill = ['salmon']

    return (
       <>
       <h2>This is the AREA CHART</h2>
         <svg id="area">

         </svg>
       </>

    )
}
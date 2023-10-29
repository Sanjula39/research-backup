
import React, { useState ,useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample10,
  countries
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = useState("data1");
  const [dataSet, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(2023);
  const navigate = useNavigate();
  const params = useParams();
  const index =countries.indexOf(params.country);
  const [country, setCountry] = useState(index);
  const handleChange = (event) => {
    chartExample1.data1 =chartData1([]);
    setCountry(event.target.value);
    navigate(`/dashboard/Textiles/${countries[event.target.value]}`);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
    
  };
  // const setBgChartData = (name) => {
  //   setbigChartData(name);
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async()=>{
  try{
    const res= await 
     axios.get(`http://localhost:3000/dashboard/Textiles/${params.country}`);
    const dataset =[];
      const values = await res.data;
      setDataset(values);
      // yearly data set
      for(let year=2012 ; year <=2023 ; year ++){
              const data  = values.filter(el=> new Date(el.Date).getFullYear() === year);
        let total=0;
        data.forEach(element => {
          total+=element.Quantity;
        });
        const average = total/data.length;
        dataset.push(average);
      } 


      const monthlyData =[];
      const yearData  =  values.filter(el=> new Date(el.Date).getFullYear() === year);
      for(let month =0 ; month < 12 ;month++){
        const monthData  =  yearData.filter(el=> new Date(el.Date).getMonth() === month);
        monthData.forEach(el=>{
          monthlyData.push(el.Quantity);
        })
      }
      chartExample1.data1 =chartData1(dataset);
      chartExample10.data1 =chartData2(monthlyData);
      setLoading(false);
    }catch(err){
      console.log(err);
      setDataset(null);
    }
    // setBgChartData("data1"); 
  };

  useEffect(()=>{
    setLoading(true);
    fetchData();
   },[country, year])

   let chartData1 = (data)=>{
    return canvas => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //blue colors
      return {
        labels: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        datasets: [
          {
            label:  "Exports",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: data,
          },
        ],
      };
    }  
};
   let chartData2 = (data)=>{
    return canvas => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label:  "Exports",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: data,
          },
        ],
      };
    }  
};





  return (
    <>
      <div className="content">
{/*==================== Chart 1 ======================   */}
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Yearly Shipments</h5>
                    <CardTitle tag="h2">{countries[country]} Exports</CardTitle>
                  </Col>
                  <Col md="10">
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Country</InputLabel>
          <Select
             labelId="demo-select-small-label"
              id="demo-select-small"
              value={country}
              label="country"
              onChange={handleChange}
        >
        <MenuItem value="">
            </MenuItem>
            <MenuItem value={0}>{countries[0]}</MenuItem>
            <MenuItem value={1}>{countries[1]}</MenuItem>
            <MenuItem value={2}>{countries[2]}</MenuItem>
            <MenuItem value={4}>{countries[4]}</MenuItem>
            <MenuItem value={5}>{countries[5]}</MenuItem>
            <MenuItem value={6}>{countries[6]}</MenuItem>
            <MenuItem value={7}>{countries[7]}</MenuItem>
            <MenuItem value={8}>{countries[8]}</MenuItem>
            <MenuItem value={9}>{countries[9]}</MenuItem>
            <MenuItem value={10}>{countries[10]}</MenuItem>
            </Select>
        </FormControl>
                  {!dataSet ? <p style={{color:'rgba(255, 0, 0, 0.4)'}}>Data not available</p> : loading? <p style={{color:'rgba(0, 255, 0, 0.4)'}}>loading...</p> : null}
                 
                  </Col>
                </Row>
  </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                    />
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>



{/*==================== Chart 2 ======================   */}
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Monthly Shipments</h5>
                    <CardTitle tag="h2"> {year} { countries[country] } Exports</CardTitle>
                  </Col>
                  <Col md="10">
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Year</InputLabel>
          <Select
             labelId="demo-select-small-label"
              id="demo-select-small"
              value={year}
              label="year"
              onChange={handleYearChange}
        >
            <MenuItem value={2012}>2012</MenuItem>
            <MenuItem value={2013}>2013</MenuItem>
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            </Select>
        </FormControl>
        {!dataSet ? <p style={{color:'rgba(255, 0, 0, 0.4)'}}>Data not available</p> : loading? <p style={{color:'rgba(0, 255, 0, 0.4)'}}>loading...</p> : null}
        
                  </Col>
                </Row>

  </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample10[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

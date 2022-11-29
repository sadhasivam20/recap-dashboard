import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine ,faCaretUp,faCaretDown , faCoins, faDollar,faSignal} from '@fortawesome/free-solid-svg-icons'
import LinearProgress from '@mui/material/LinearProgress';


function App() {
  return (
    <div className="App">
      < DashBoard/>
    </div>
  );
}
function DashBoard(){
  return(
    <div>
     <h3> Welcome To DashLead 🎉⭐ </h3>
    {/* < SummaryBox/> */}
    <SummaryBoxList/>
    </div>
  )
}
function SummaryBoxList(){
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count"
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money"
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money"
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money"
    }
  ];
  return(
    <div className='summary-box-list'>
      {dataList.map((er)=>(
        <SummaryBox data={er}/>
     ) )}
    </div>
  )
}

function SummaryBox({data}){
  // const data={
  //   text:"Number Of Sales",
  //   number:568,
  //   percent:0.7,
  //   performance:"up",
  //   time:"Last Month",
  //   type:"money",
  //   icon:faChartLine,
  //   iconColor:"hsl(255deg 94% 68%)",
  // }
  return(
    <div className='summary-box-cointainer'>
      <div className='summary-text-icon'>
      <p className='summary-box-text'>{data.text} </p>
        <FontAwesomeIcon style={{color:data.iconColor}} icon={data.icon} />
        </div>
      <h2 className='summary-box-number'>
        {data.type=="money"?"$":null}
        {data.number}</h2>
        <LinearProgress variant="determinate" value={50} />
     <div className='summary-box-time-cointainer'>
      <p >{data.time}</p>
      <p><FontAwesomeIcon style={{color:
      data.performance==="up" ? "hsl(164deg 97% 40%)":"hsl(3deg 99% 62%)", }} 
      icon={data.performance=== "up"? faCaretUp :faCaretDown}
       />{" "}
      {data.percent} %
      </p>
      </div>
    </div>
  )
}
export default App;

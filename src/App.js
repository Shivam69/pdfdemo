import React, { useState, useRef, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './App.css'; // Import your CSS file for styling
import LineChart from "./components/linechart"

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const contentRef = useRef(null);

  const handleStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  const steps = Array.from({ length: 5 }, (_, i) => i);

  const stepData = [
    {
      step: 1,
      text: 'This is Step 1',
      imageURL: require('./PDFViewer/image/sample.jpg'),
      additionalContent: 'Additional content for Step 1 kjbkjabsd kjbasd kjbasd bkjabsd kjbasd ygwqie asjdbjasd ',
    },
    {
      step: 2,
      text: 'This is Step 2',
      imageURL: 'https://images.unsplash.com/photo-1559456751-057ed03f3143?q=80&w=3001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalContent: 'Additional content for Step 2',
    },
    {
      step: 3,
      text: 'This is Step 3',
      imageURL: 'https://images.unsplash.com/photo-1682685797140-c17807f8f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalContent: 'This chart shows the area in square kilometres of each local authority district in the UK. Each circle represents one district. The scale is logarithmic. ',
    },
    {
      step: 4,
      text: 'This is Step 4',
      imageURL: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalContent: 'Additional content for Step 4',
    },
    {
      step: 5,
      text: 'This is Step 5',
      imageURL: require('./PDFViewer/image/sample.jpg'),
      additionalContent: 'Additional content for Step 5',
    },
  ];

  const data = [
    [{
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },],
    [  {
      name: "Page A",
      uv: 3000,
      pv: 2000,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 2800,
      pv: 1708,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2090,
    },
    {
      name: "Page D",
      uv: 2300,
      pv: 3708,
      amt: 2200,
    },
    {
      name: "Page E",
      uv: 2890,
      pv: 3800,
      amt: 2081,
    },
    {
      name: "Page F",
      uv: 3390,
      pv: 5000,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3090,
      pv: 4000,
      amt: 2300,
    },]
  ];

  useEffect(() => {
    const updateContentHeight = () => {
      const contentHeight = contentRef.current.clientHeight;
      document.body.style.height = `${contentHeight}px`;
    };

    updateContentHeight();
    window.addEventListener('resize', updateContentHeight);
    return () => {
      window.removeEventListener('resize', updateContentHeight);
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, overflow: 'hidden' }}>
      <div
        style={{ flex: 1, padding: '20px', overflowY: 'scroll', margin: 0 }}
        ref={contentRef}
      >
        <Scrollama onStepEnter={handleStepEnter} offset={0.5}>
          {steps.map((step, index) => (
            <Step key={index} data={index}>
              <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                {/* Add your scrollable text content here */}
                <p style={{ fontSize: 18, color: 'gray', maxWidth: '30%' }}>{stepData[index].additionalContent}</p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '10%',
          right: '10%',
          left: '10%',
          top: '10%', // Center from right
          transform: 'translateX(30%)', // Center horizontally
          zIndex: 1, // Set z-index to ensure it's above the scrolling content
        }}
      >
        {/* Display different images. based on the current step */}
        {stepData[currentStep].step < 3 ? (
          <img
          src={stepData[currentStep].imageURL}
          alt={`Image ${currentStep + 1}`}
          style={{ width: '80%', height: '90%' }}
        />
        ) 
        : 
          stepData[currentStep].step == 4 ?
          <LineChart data={data[0]}  /> : 
          <LineChart data={data[1]}/>
        
        }
      </div>

    </div>
  );
};

export default App;

import { useState } from "react";    
import Logo from"./assets/Logo.png";

function App() {
  const [value, setValue] = useState(null);
  const[data, setData] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " +String(process.env.REACT_APP_OPENAI_KEY),
      }, 
      body: JSON.stringify({
        prompt: value + `\n\nTl;dr`,
        temperature: 0.1,
        max_tokens: Math.floor(value.length / 2),
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5, 
        stop: ['"""'],
        //aiModle :"gpt-3.5-turbo-1106"
      }),
    };
    fetch("https://api.openai.com/v1/completions",
    requestOptions)
    .then((response)=> response.json())
    .then((dt) => {
    const text = dt.choices?.[0]?.text;
      if (text) {
        setSubmitting(false);
        setData(text);
      } else {
        setSubmitting(false);
      }
  }) 
  .catch ((error) => {
    setSubmitting(false);
    console.log(error);
  });
};

console.log(data);
  return (
    <div className='w-full bg-[#0f172a] h-full min-h-[100vh 
    py-4 
    px-4 
    md:px-20'>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center w-full h-10 px-5 2xl:px-40">
          <h3 className="cursor-pointer text-3xl font-bold text-cyan-600">Summary!</h3>
          <a href="#" /*onClick={(e) => e.preventDefault()}*/>
            <img src={Logo} className="w-16 h-20.4 rounded-lg cursor-pointer" alt="logo"/>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 p-4">
          <h1 className="text-3xl text-white text-center leading-10 font-semibold">Summarizer with<br/><span className="text-5xl font-bold text-cyan-500">OpenAI</span></h1>
          <p className="mt-5 text-lg text-gray-500 sm:text-xl text-center max-w-2xl">Simply upload your document and get a quick summary using OpenAI GPT Summarizer </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center mt-5  ">
          <textarea placeholder="Paste doc content here ..."
          rows={7} className="block w-full md:w-[650px] rounded-md border border-slate-700 bg-slate-800 p-2 text-sm shadow-lg font-medium text-white
          focus:border-gray-500 focus:outline-none focus:ring-0" onChange={(e) => setValue(e.target.value)}> 
          </textarea>
          {value?.length > 0 && (submitting ? ( <p className="text-md text-cyan-500 mt-5">Please Wait .....</p>):(<button className="mt-5 bg-blue-500 px-5 py-2 text-white text-md font-semibold cursor-pointer rounded-md" onClick={handlesubmit}>Submit</button>))}
        </div>
      </div>
      <div className="w-full mt-10 flex flex-col gap-5 shadow-md items-center justify-center">{data?.length > 0 && 
      <>
      <p>Summary History</p>
      {data?.map((d,index) => (
        <div>

          <p>{d}</p>
        </div>
      ))}
      </>
      }
      
      </div>    
    </div>
  );
}

export default App;

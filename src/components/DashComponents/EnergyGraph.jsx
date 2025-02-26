import { Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Line, ComposedChart } from 'recharts';

export default function EnergyGraph() {
  const data = [
    { id:1, name: 'Sat', EC: 400, pv: 2400, amt: 2400 },
    { id:2, name: 'Sun', EC: 300, pv: 1398, amt: 2210 },
    { id:3, name: 'Mon', EC: 200, pv: 9800, amt: 2290 },
    { id:4, name: 'Tue', EC: 278, pv: 3908, amt: 2000 },
    { id:5, name: 'Wed', EC: 189, pv: 4800, amt: 2181 },
    { id:6, name: 'Thu', EC: 190, pv: 4800, amt: 2181 },
    { id:7, name: 'Fri', EC: 191, pv: 4800, amt: 2181 },
  ];

  return (
    <div
      className="pr-4 rounded-2xl shadow-md flex flex-col justify-center items-center w-[70%] sm:w-[50%] mr-5 sm:mr-10 h-fit bg-white mt-20"
    >
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={data} margin={{ top: 20, right: 10, left: 20, bottom: 0 }}>
            <XAxis dataKey="name" stroke="#6597A9" orientation="top" />
            <YAxis stroke="#A6A6A6" />
            <YAxis yAxisId="right" orientation="right" stroke="#06507F" />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend
              wrapperStyle={{
                lineHeight: '10px',
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
              }}
              iconType="circle"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="EC" fill="#FFEDD8" barSize={30} radius={5} key="id" />
            <Line yAxisId="right" type="monotone" dataKey="pv" stroke="#06507F" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      {/* Text Section */}
      <div
        className="mt-4 text-center"
        style={{
          fontSize: '12px',
          color: '#06507F',
        }}
      >
        <p>AVG Consumption: <strong>180.3 KWH</strong></p>
        <p>AVG Temperature: <strong>40°C</strong></p>
      </div>
    </div>
  );
}

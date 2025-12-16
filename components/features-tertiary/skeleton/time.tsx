
// --- 1. Interfaces & Data (Defined at the top) ---

// Defines the data structure for the daily bars on the chart
interface DailyDataItem {
  day: string;
  totalHours: number;
  tracked: number;
  heightPct: number;
  trackedPct: number;
}

const dailyData: DailyDataItem[] = [
  { day: 'Mon', totalHours: 4.0, tracked: 3.8, heightPct: 50, trackedPct: 76 },
  { day: 'Tue', totalHours: 7.5, tracked: 6.7, heightPct: 101, trackedPct: 89 },
  { day: 'Wed', totalHours: 9.0, tracked: 8.5, heightPct: 122, trackedPct: 94 },
  { day: 'Thu', totalHours: 5.5, tracked: 3.2, heightPct: 85, trackedPct: 58 },
  { day: 'Fri', totalHours: 4.0, tracked: 2.5, heightPct: 50, trackedPct: 63 },
  { day: 'Sat', totalHours: 8.0, tracked: 7.2, heightPct: 106, trackedPct: 90 },
  { day: 'Sun', totalHours: 1.0, tracked: 0.0, heightPct: 13, trackedPct: 0 },
];

// --- 2. Sub-Components (Moved OUTSIDE the main component) ---

const ChartHeader = () => (
  <header className="flex justify-between items-center p-5">
    <div className="flex items-center gap-2">
      {/* SVG Icon */}
      <div className="w-6 h-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 3H6.5C6.5 3 6.27 4.85 6.5 6C6.97 8.33 9.6 10.4 11.04 11.39C11.62 11.79 12.38 11.79 12.96 11.39C14.4 10.4 17.03 8.33 17.5 6C17.73 4.85 17.5 3 17.5 3Z" stroke="#1DBF73" strokeWidth="2" strokeLinejoin="round"></path>
          <path d="M17.5 21H6.5C6.5 21 6.27 19.15 6.5 18C6.97 15.67 9.6 13.6 11.04 12.61C11.63 12.21 12.38 12.21 12.96 12.61C14.4 13.6 17.03 15.67 17.5 18C17.73 19.15 17.5 21 17.5 21Z" stroke="#1DBF73" strokeWidth="2" strokeLinejoin="round"></path>
          <path d="M14.96 18.5c0 .27-.23.5-.5.5H9.54c-.27 0-.5-.23-.5-.5v-.21c0-.14.01-.29.07-.42.42-.8.89-1.18 1.42-1.28.1-.02.2-.02.3 0 .53.1 2.32.48 2.74 1.28.07.13.08.28.08.42v.21z" fill="#1DBF73"></path>
          <path d="M10.65 7c-.32 0-.55.3-.37.56.33.49.88.9 1.27 1.15.27.18.62.18.9 0 .39-.25.94-.66 1.27-1.15.18-.26-.05-.56-.37-.56H10.65z" fill="#1DBF73"></path>
          <path d="M19.5 3H4.5M19.5 21H4.5" stroke="#1DBF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Time Tracker</h2>
      {/* Info Icon */}
      <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center ml-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#AFAFAF"></circle>
          <path fillRule="evenodd" clipRule="evenodd" d="M9.3 5.24C9.43 5.02 9.5 4.77 9.5 4.5c0-.83-.67-1.5-1.5-1.5S6.5 3.67 6.5 4.5c0 .83.67 1.5 1.5 1.5.56 0 1.05-.3 1.3-.76zm-2 1.76H7.5h1c.55 0 1 .45 1 1v1v4c0 .55-.45 1-1 1s-1-.45-1-1v-.75c0-.41-.34-.75-.75-.75S6 9.34 6 8.25V8c0-.35.18-.66.46-.84.16-.1.35-.16.54-.16z" fill="white"></path>
        </svg>
      </div>
    </div>
  </header>
);

const DailyBar = ({ dayData }: { dayData: DailyDataItem }) => (
  <div
    className="flex flex-col items-start relative flex-1 grow"
    style={{ height: `${dayData.heightPct}px` }}
  >
    {/* Untracked Time (Light Green) */}
    <div className="bg-[#D2F2E3] rounded-t-lg relative flex-1 self-stretch w-full grow"></div>
    {/* Tracked Time (Dark Green) */}
    <div
      className="bg-[#1DBF73] rounded-b-lg relative self-stretch w-full"
      style={{ height: `${dayData.trackedPct}%` }}
    ></div>
  </div>
);

// --- 3. Main Component ---

const TimeTrackerChart = ({ data = dailyData }: { data?: DailyDataItem[] }) => {
  return (
    <div className="relative lg:w-[532px] h-[275px] bg-white rounded-3xl shadow-lg border border-gray-200 p-5 overflow-hidden">
      {/* --- HEADER --- */}
      <ChartHeader />

      {/* --- CHART AREA CONTAINER --- */}
      <div className="relative h-40 ">
        
        {/* --- BAR CHART AND AXIS --- */}
        <div className="flex relative w-full h-full">
          {/* Y-Axis Labels */}
          <div className="flex flex-col justify-between items-end text-sm font-medium text-gray-500 w-10">
            <div>8h</div>
            <div>4h</div>
            <div>2h</div>
            <div>0</div>
          </div>

          {/* Bar Columns */}
          <div className="flex flex-1 items-end gap-4 border-b border-gray-300 ml-4 pb-2">
            {data.map((day, index) => (
              <DailyBar key={index} dayData={day} />
            ))}
          </div>
        </div>

        {/* --- AVG LINE / INDICATOR --- */}
        <div className="absolute w-full top-1/2 border-t border-dashed border-gray-500/50">
          <div className="absolute right-0 -top-5 flex items-center bg-black text-white text-xs font-normal px-2 py-1 rounded-l-md">
            Avg
          </div>
        </div>
      </div>

      {/* --- X-AXIS LABELS --- */}
      <div className="flex w-full mt-4 justify-around text-sm font-medium text-gray-500">
        {data.map((day, index) => (
          <div key={index} className="flex-1 text-center">
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTrackerChart;
const RealValue = () => {
  return (
    <table className=" col-start-1 col-span-1 row-span-2 table-fixed border-collapse border border-slate-700 text-xs">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={3}>現在値（ハウス代表値）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '></td>
          <td className='border border-slate-700 p-1 bg-lime-100 '>現在値</td>
          <td className='border border-slate-700 p-1 bg-lime-100 '>設定値</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>冷却</td>
          <td className='border border-slate-700 p-1'>23.6℃</td>
          <td className='border border-slate-700 p-1'>25.0℃</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>暖房</td>
          <td className='border border-slate-700 p-1'>23.6℃</td>
          <td className='border border-slate-700 p-1'>21.0℃</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>除湿</td>
          <td className='border border-slate-700 p-1'>5.4g/m³</td>
          <td className='border border-slate-700 p-1'>5.3g/m³</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>加湿</td>
          <td className='border border-slate-700 p-1'>5.4g/m³</td>
          <td className='border border-slate-700 p-1'>14.0g/m³</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>CO₂</td>
          <td className='border border-slate-700 p-1'>432ppm</td>
          <td className='border border-slate-700 p-1'>1480ppm</td>
        </tr>
      </tbody>
    </table>
  );
};

const MachineOp = () => {
  return (
    <table className=" col-start-2 col-span-1  row-span-3 table-fixed border-collapse border border-slate-700 text-xs">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={3}>制御機器のON/OFF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '></td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ステータス</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ON/OFF</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>冷却</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>OFF</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>暖房</td>
          <td className='border border-slate-700 p-1 text-center'>温度連動</td>
          <td className='border border-slate-700 p-1 text-center'>ON</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>冷房除湿</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>OFF</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>暖房除湿</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>OFF</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>CO₂</td>
          <td className='border border-slate-700 p-1 text-center'>自動</td>
          <td className='border border-slate-700 p-1 text-center'>ON</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>灌水</td>
          <td className='border border-slate-700 p-1 text-center'>自動</td>
          <td className='border border-slate-700 p-1 text-center'>OFF</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>循環扇（CFAN)</td>
          <td className='border border-slate-700 p-1 text-center'>自動</td>
          <td className='border border-slate-700 p-1 text-center'>ON</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>換気扇（PFAN）</td>
          <td className='border border-slate-700 p-1 text-center'>自動</td>
          <td className='border border-slate-700 p-1 text-center'>ON</td>
        </tr>
      </tbody>
    </table>
  );
};

const WindowCurtainRate = () => {
  return (
    <table className=" col-start-3 col-span-1  table-fixed border-collapse border border-slate-700 text-xs">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={4}>窓・カーテンの開閉率</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '></td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>対象</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ステータス</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>開閉率</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第1系統）</td>
          <td className='border border-slate-700 p-1 bg-cyan-200 text-center'>天窓</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第2系統）</td>
          <td className='border border-slate-700 p-1 bg-cyan-200 text-center'>天窓</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第3系統）</td>
          <td className='border border-slate-700 p-1 bg-slate-400 text-center'>側窓</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第4系統）</td>
          <td className='border border-slate-700 p-1 bg-slate-400 text-center'>側窓</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第5系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第6系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第7系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>窓（第8系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第1系統）</td>
          <td className='border border-slate-700 p-1 bg-amber-300 text-center'>遮光</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第2系統）</td>
          <td className='border border-slate-700 p-1 bg-amber-300 text-center'>遮光</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第3系統）</td>
          <td className='border border-slate-700 p-1 bg-orange-400 text-center'>保温</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第4系統）</td>
          <td className='border border-slate-700 p-1 bg-orange-400 text-center'>保温</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>0%</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第5系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第6系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第7系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>カーテン（第8系統）</td>
          <td className='border border-slate-700 p-1 bg-neutral-500 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>停止</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
      </tbody>
    </table>
  );
};

const HouseState_Sensor = () => {
  return (
    <table className=" col-start-1 col-span-2  row-start-4 row-span-2 table-fixed border-collapse border border-slate-700 text-xs w-full">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={9}>ハウス内状況（センサー別）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>センサー</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>1</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>2</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>3</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>4</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>5</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>6</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>7</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>8</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>温度</td>
          <td className='border border-slate-700 p-1 text-center'>24.8℃</td>
          <td className='border border-slate-700 p-1 text-center'>22.6℃</td>
          <td className='border border-slate-700 p-1 text-center'>24.8℃</td>
          <td className='border border-slate-700 p-1 text-center'>22.6℃</td>
          <td className='border border-slate-700 p-1 text-center'>24.8℃</td>
          <td className='border border-slate-700 p-1 text-center'>22.6℃</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>湿度</td>
          <td className='border border-slate-700 p-1 text-center'>77.5%RH</td>
          <td className='border border-slate-700 p-1 text-center'>69.9%RH</td>
          <td className='border border-slate-700 p-1 text-center'>77.5%RH</td>
          <td className='border border-slate-700 p-1 text-center'>69.9%RH </td>
          <td className='border border-slate-700 p-1 text-center'>77.5%RH</td>
          <td className='border border-slate-700 p-1 text-center'>69.9%RH </td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>飽差</td>
          <td className='border border-slate-700 p-1 text-center'>5.1g/m³</td>
          <td className='border border-slate-700 p-1 text-center'>6.1g/m³ </td>
          <td className='border border-slate-700 p-1 text-center'>5.1g/m³</td>
          <td className='border border-slate-700 p-1 text-center'>6.1g/m³ </td>
          <td className='border border-slate-700 p-1 text-center'>5.1g/m³</td>
          <td className='border border-slate-700 p-1 text-center'>6.1g/m³ </td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>CO₂濃度</td>
          <td className='border border-slate-700 p-1 text-center'>434ppm</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>434ppm</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>434ppm</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
      </tbody>
    </table>
  );
};

const HosuseState_Block = () => {
  return (
    <table className=" table-fixed border-collapse border border-slate-700 w-full">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={11}>ハウス内状況（ブロック別）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '></td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック1</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック2</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック3</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック4</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック5</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック6</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック7</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック8</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック9</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>ブロック10</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>灌水量：設定値</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>10L</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>灌水量：設定値</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>0.3L</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>土壌含水量：設定値</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>20%</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>土壌含水量：設定値</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>10%</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
          <td className='border border-slate-700 p-1 text-center'>ー</td>
        </tr>
      </tbody>
    </table>
  );
};

const Weather = () => {
  return (
    <table className=" col-start-1 col-span-2 row-span-2 table-fixed border-collapse border border-slate-700 text-xs">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={3}>外気象</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>温度</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>相対湿度</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>飽差</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 text-center'>21.0℃</td>
          <td className='border border-slate-700 p-1 text-center'>64.9%RH</td>
          <td className='border border-slate-700 p-1 text-center'>6.5g/m³</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>絶対湿度</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>風速</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>風向</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 text-center'>11.9g/m³</td>
          <td className='border border-slate-700 p-1 text-center'>2.8m/s</td>
          <td className='border border-slate-700 p-1 text-center'>南東</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>日射量</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>積算日射量</td>
          <td className='border border-slate-700 p-1 bg-lime-100 text-center'>雨</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 text-center'>385.7W/m2</td>
          <td className='border border-slate-700 p-1 text-center'>26.6MJ/m2</td>
          <td className='border border-slate-700 p-1 text-center'>降雨なし</td>
        </tr>
      </tbody>
    </table>
  );
};

const AverageTemp = () => {
  return (
    <table className=" col-start-3 col-span-1 row-span-1 table-fixed border-collapse border border-slate-700 text-xs">
      <thead>
        <tr>
          <th className='border border-slate-700 bg-lime-500 p-2 text-left' colSpan={2}>明期/暗期平均気温</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>明期平均気温</td>
          <td className='border border-slate-700 p-1 text-center'>19.6℃</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>暗期平均気温</td>
          <td className='border border-slate-700 p-1 text-center'>14.4℃</td>
        </tr>
        <tr>
          <td className='border border-slate-700 p-1 bg-lime-100 '>DIF（昼夜間温度差）</td>
          <td className='border border-slate-700 p-1 text-center'>5.2℃</td>
        </tr>
      </tbody>
    </table>
  );
};

export { RealValue, MachineOp, WindowCurtainRate, HouseState_Sensor, HosuseState_Block, Weather, AverageTemp };
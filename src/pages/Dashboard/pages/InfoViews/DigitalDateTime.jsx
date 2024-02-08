import React, { useEffect, useState } from "react";

function DigitalDateTime() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      setDate(year + '/' + month + '/' + day);

      // .padStart() : 在当前字符串的开头添加指定的字符，直到字符串达到指定的长度
      // .padStart(2, '0') 用于确保小时、分钟和秒数始终以两位数字的形式显示

      let hour = d.getHours().toString().padStart(2, '0');
      let minute = d.getMinutes().toString().padStart(2, '0');
      let seconds = d.getSeconds().toString().padStart(2, '0');
      setTime(hour + ':' + minute + ':' + seconds);
    }, 1000);
  }, []);

  return (
    <div className="text-center p-2">
      <div className="text-base">{date}</div>
      <div className="text-xl font-bold">{time}</div>
    </div>
  );
}

export default DigitalDateTime;
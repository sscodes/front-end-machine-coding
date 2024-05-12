const [hour, setHour] = useState(new Date().getHours());
const [minutes, setMinutes] = useState(new Date().getMinutes());
const [seconds, setSeconds] = useState(new Date().getSeconds());
const [ampm, setampm] = useState('');

useEffect(() => {
  const interval = setInterval(() => {
    setHour(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  }, 1000);
}, []);

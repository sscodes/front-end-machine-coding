const [path, setPath] = useState(['home']);
const navigate = useNavigate();

const pathName = window.location.pathname;

useEffect(() => {
  if (pathName === '/') setPath(['home']);
  else setPath(['home', ...pathName.split('/').slice(1, pathName.length)]);
}, [pathName]);

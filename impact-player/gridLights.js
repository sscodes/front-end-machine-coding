let interval = setInterval(() => {
  if (startDeselect)
    setList((orderlist) => {
      let tempList = [...orderlist];
      tempList.pop();
      return tempList;
    });
  else clearInterval(interval);
}, 1000);

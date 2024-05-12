const formatDateTime = (time) => {
  let date = new Date(time);
  return date.toString();
};

formatDateTime(new Date());

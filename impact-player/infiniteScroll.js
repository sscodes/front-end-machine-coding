const handleScrolledToBottom = () => {
  if (
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    setLimit((e) => e + 10);
    setLoading(true);
  }
};
useEffect(() => {
  window.addEventListener('scroll', handleScrolledToBottom);

  return () => window.removeEventListener('scroll', handleScrolledToBottom);
}, []);

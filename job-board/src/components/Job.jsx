import React, { useEffect, useState } from 'react';

const Job = ({ id }) => {
  const [job, setJob] = useState({});
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { signal })
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, []);

  const formatDateTime = (time) => {
    let date = new Date(time);
    let dateStr = date.toString();
    return dateStr.slice(0, dateStr.indexOf('GMT'));
  };

  return (
    <div className='job'>
      <div>
        <div className='job-title'>
          {job.url !== undefined ? (
            <a target='_blank' href={job.url}>
              {job.title}
            </a>
          ) : (
            <div>{job.title}</div>
          )}
        </div>
      </div>
      <div className='job-details'>
        <div>By {job.by}</div>
        <div>-</div>
        <div>{formatDateTime(job?.time)}</div>
      </div>
    </div>
  );
};

export default Job;

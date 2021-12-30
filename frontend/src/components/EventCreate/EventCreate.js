import { useState } from "react";
import styles from "./EventCreate.module.css";

export default function EventCreate() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({})
  
  function nextPage() {
    if (page === 4) return;
    setPage((page) => page +1);
  }

  return (
    <div className={styles.event_create_main}>
      {/* progress bar */}
      <div>Progress Bar</div>


      {/* content */}
      <div>
      {page === 1 && <EventCreate1 />}
      {page === 2 && <EventCreate2 />}
      {page === 3 && <EventCreate3 />}
      {page === 4 && <EventCreate4 />}
      </div>
      {page !== 4 &&<button onClick={nextPage}>Next</button>}
      {page === 4 && <button type="submit">Submit</button>}
    </div>
  );
}

function EventCreate1() {
  return <div>Page 1</div>;
}

function EventCreate2() {
  return <div>Page 2</div>;
}

function EventCreate3() {
  return <div>Page 3</div>;
}

function EventCreate4() {
  return <div>Page 4</div>;
}

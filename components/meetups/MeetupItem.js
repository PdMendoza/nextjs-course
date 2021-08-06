import React from "react";
import { useRouter } from "next/router";

import Card from "../ui/Card";

import style from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();
  function showDetailHandler() {
    router.replace("/" + props.id);
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
